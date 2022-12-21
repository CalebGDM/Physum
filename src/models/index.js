// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Exersice, Resource, QuizResult, UserTopicProgress, Lesson, Topic, Quiz, QuizQuestion } = initSchema(schema);

export {
  User,
  Exersice,
  Resource,
  QuizResult,
  UserTopicProgress,
  Lesson,
  Topic,
  Quiz,
  QuizQuestion
};