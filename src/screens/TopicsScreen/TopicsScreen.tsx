import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import TopicNode from "../../components/TopicNode";
import TopicNodesRow from "../../components/TopicNodesRow";
import topics from "../../../assets/data/topics";
import { getCurrentActiveLevel, groupByLevels } from "../../utils/Topics";
import { getTheme } from "../../components/Themed";
import { GStyles } from "../../constants/GeneralStyles";
import Colors from "../../constants/Colors";
import useApplyHeaderWorkaround from "../../../hooks/useAplyHeaderWorks";
import { useNavigation, useRoute } from "@react-navigation/native";
import { QuizResult, Topic } from "../../models";
import { Auth, DataStore } from "aws-amplify";
import quiz from "../../../assets/data/quiz";
import { TopicWithResult } from "../../types/models";

const TopicsScreen = () => {
  const theme = getTheme();
  const route = useRoute();
  const navigation = useNavigation();
  useApplyHeaderWorkaround(navigation.setOptions);

  const [levels, setLevels] = useState<TopicWithResult[][]>([]);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [lessonId, setLessonID] = useState();

  const fetchTopics = async () => {
    const topics = await (
      await DataStore.query(Topic)
    ).filter((topic) => topic.lessonID == route?.params?.id);

    const topicsWithProgress = await addProgressToTopics(topics);
    
    const _levels = groupByLevels(topicsWithProgress);
    setCurrentLevel(getCurrentActiveLevel(levels))
    setLevels(_levels);
  };

  const addProgressToTopics = async (
    topics: Topic[]
  ): Promise<TopicWithResult[]> => {
    const topicsWithProgress = await Promise.all(topics.map(addProgress));

    return topicsWithProgress;
  };

  const addProgress = async (topic: Topic) => {
    if (!topic.Quiz) {
      return topic;
    }
    const userData = await Auth.currentAuthenticatedUser();
    const quizResults = await DataStore.query(QuizResult);
    const userResults = quizResults.filter(
      (qr) => qr.quizID == topic.topicQuizId && qr.sub == userData?.attributes.sub
    );
    
    if (userResults.length == 0) {
      console.log('poto', topic.title)
      return topic;
    }

    const bestUserResult = userResults.reduce((best, result) => result.precentage > best.precentage ? result : best
    );

    console.log("quizResult", userResults);
    return { ...topic, quizResult: bestUserResult, isQuizPassed: bestUserResult && bestUserResult.precentage >= 0.9 };
  };

  useEffect(() => {
    fetchTopics();
  }, []);

  useEffect(() => {
    fetchTopics();
  }, [route?.params?.id]);

   useEffect(() => {
   setCurrentLevel(getCurrentActiveLevel(levels))
  }, [levels])
  
  if(!levels){
    <ActivityIndicator/>
  }

  levels.map((level) => {
    console.log(level)
  })

  return (
    <View
      style={[GStyles.screen, { backgroundColor: Colors.light.background }]}
    >
      <FlatList
        data={levels}
        renderItem={({ item }) => (
          <TopicNodesRow>
            {item.map((topic) => (
              <TopicNode
                topic={topic}
                key={topic.id}
                isDisabled={currentLevel < topic.level}
                hasThree={item.length == 3}
              />
            ))}
          </TopicNodesRow>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TopicsScreen;
