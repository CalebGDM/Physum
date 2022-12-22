import { QuizResult, Topic, UserTopicProgress } from "../models";

type ResourceItem = {
  id: string;
  title: string;
  url: string;
  completed?: boolean;
};

export type TopicWithResult = Topic & {
  progress?: UserTopicProgress;
  quizResult?: QuizResult;
  isQuizPassed?: boolean;
};
