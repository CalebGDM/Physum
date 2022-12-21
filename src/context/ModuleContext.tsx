import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { TopicWithResult } from "../types/models";
import { Auth, DataStore } from "aws-amplify";
import { QuizResult, Topic, UserTopicProgress } from "../models";
import { getCurrentActiveLevel, groupByLevels } from "../utils/Topics";

interface ModuleContextData {
  levels: TopicWithResult[][];
  currentLevel: number;
  updateTopicProgress: (topicID: string, newProgress: UserTopicProgress) => void,
  setLessonID?: any;
}

const ModuleContext = createContext<ModuleContextData>({
  levels: [],
  currentLevel: 0,
  updateTopicProgress: () => {},
});



const ModuleContextProvider = ({ children }: { children: ReactNode }) => {
  const [levels, setLevels] = useState<TopicWithResult[][]>([]);
  const [topics, setTopics] = useState<TopicWithResult[]>([]);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [lessonID, setLessonID] = useState<string>()
  const fetchTopics = async () => {
    const topics = await (
      await (await DataStore.query(Topic)).filter((topic) => topic.lessonID == lessonID)
    )

    const topicsWithProgress = await addProgressToTopics(topics);
    setTopics(topicsWithProgress);
  };
  useEffect(() => {
    fetchTopics()
  },[lessonID])

  useEffect(() => {
    const _levels = groupByLevels(topics);
    setCurrentLevel(getCurrentActiveLevel(levels));
    setLevels(_levels);
  }, [topics]);

  const addProgressToTopics = async (
    topics: Topic[]
  ): Promise<TopicWithResult[]> => {
    const topicsWithProgress = await Promise.all(topics.map(addProgress));

    return topicsWithProgress;
  };

  const addProgress = async (topic: Topic) => {
    const topicWithProgress: TopicWithResult = { ...topic };

    const userData = await Auth.currentAuthenticatedUser();

    // Progreso del topic
    const userTopicProgresses = await DataStore.query(UserTopicProgress);
    const userProgress = userTopicProgresses.find(
      (tp) => tp.topicID == topic.id && tp.sub == userData?.attributes.sub
    );
    if (userProgress) {
      topicWithProgress.progress = userProgress;
    }

    // Resultados del quiz
    if (topic.topicQuizId) {
      const quizResults = await DataStore.query(QuizResult);
      const userResults = quizResults.filter(
        (qr) =>
          qr.quizID == topic.topicQuizId && qr.sub == userData?.attributes.sub
      );

      if (userResults.length !== 0) {
        const bestUserResult = userResults.reduce((best, result) =>
          result.precentage > best.precentage ? result : best
        );
        topicWithProgress.quizResult = bestUserResult;
        topicWithProgress.isQuizPassed =
          bestUserResult && bestUserResult.precentage >= 0.9;
      }
    }
    return topicWithProgress;
  };

  const updateTopicProgress = (topicID: string, newProgress: UserTopicProgress) => {
    setTopics((_topics) =>
      _topics.map(topic => topic.id !== topicID ? topic : {...topic, progress: newProgress})
    )
  }

  return (
    <ModuleContext.Provider value={{ levels, currentLevel, updateTopicProgress, setLessonID }}>
      {children}
    </ModuleContext.Provider>
  );
};

export default ModuleContextProvider;
export const useModule = () => useContext(ModuleContext);
