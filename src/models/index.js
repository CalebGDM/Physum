// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Exersice, Resource, QuizResult, UserTopicProgress, Lesson, Topic, Quiz, QuizQuestion } = initSchema(schema);

export {
  Exersice,
  Resource,
  QuizResult,
  UserTopicProgress,
  Lesson,
  Topic,
  Quiz,
  QuizQuestion
};