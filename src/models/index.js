// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { QuizResult, UserTopicProgress, Exersice, Lesson, Topic, Resource, Quiz, QuizQuestion } = initSchema(schema);

export {
  QuizResult,
  UserTopicProgress,
  Exersice,
  Lesson,
  Topic,
  Resource,
  Quiz,
  QuizQuestion
};