// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Exersice, Lesson, Topic, Resource, Quiz, QuizQuestion } = initSchema(schema);

export {
  Exersice,
  Lesson,
  Topic,
  Resource,
  Quiz,
  QuizQuestion
};