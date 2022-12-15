import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerExersice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Exersice, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly url?: string | null;
  readonly topicID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExersice = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Exersice, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly url?: string | null;
  readonly topicID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Exersice = LazyLoading extends LazyLoadingDisabled ? EagerExersice : LazyExersice

export declare const Exersice: (new (init: ModelInit<Exersice>) => Exersice) & {
  copyOf(source: Exersice, mutator: (draft: MutableModel<Exersice>) => MutableModel<Exersice> | void): Exersice;
}

type EagerLesson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Lesson, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly lessonName: string;
  readonly color?: string | null;
  readonly imageUri?: string | null;
  readonly Topics?: (Topic | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLesson = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Lesson, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly lessonName: string;
  readonly color?: string | null;
  readonly imageUri?: string | null;
  readonly Topics: AsyncCollection<Topic>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Lesson = LazyLoading extends LazyLoadingDisabled ? EagerLesson : LazyLesson

export declare const Lesson: (new (init: ModelInit<Lesson>) => Lesson) & {
  copyOf(source: Lesson, mutator: (draft: MutableModel<Lesson>) => MutableModel<Lesson> | void): Lesson;
}

type EagerTopic = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Topic, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly icon?: string | null;
  readonly level: number;
  readonly info: string;
  readonly Resources?: (Resource | null)[] | null;
  readonly Exercises?: (Exersice | null)[] | null;
  readonly Quiz?: Quiz | null;
  readonly lessonID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly topicQuizId?: string | null;
}

type LazyTopic = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Topic, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly icon?: string | null;
  readonly level: number;
  readonly info: string;
  readonly Resources: AsyncCollection<Resource>;
  readonly Exercises: AsyncCollection<Exersice>;
  readonly Quiz: AsyncItem<Quiz | undefined>;
  readonly lessonID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly topicQuizId?: string | null;
}

export declare type Topic = LazyLoading extends LazyLoadingDisabled ? EagerTopic : LazyTopic

export declare const Topic: (new (init: ModelInit<Topic>) => Topic) & {
  copyOf(source: Topic, mutator: (draft: MutableModel<Topic>) => MutableModel<Topic> | void): Topic;
}

type EagerResource = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resource, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title: string;
  readonly Url?: string | null;
  readonly topicID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyResource = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resource, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Title: string;
  readonly Url?: string | null;
  readonly topicID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Resource = LazyLoading extends LazyLoadingDisabled ? EagerResource : LazyResource

export declare const Resource: (new (init: ModelInit<Resource>) => Resource) & {
  copyOf(source: Resource, mutator: (draft: MutableModel<Resource>) => MutableModel<Resource> | void): Resource;
}

type EagerQuiz = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Quiz, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly QuizQuestions?: (QuizQuestion | null)[] | null;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuiz = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Quiz, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly QuizQuestions: AsyncCollection<QuizQuestion>;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Quiz = LazyLoading extends LazyLoadingDisabled ? EagerQuiz : LazyQuiz

export declare const Quiz: (new (init: ModelInit<Quiz>) => Quiz) & {
  copyOf(source: Quiz, mutator: (draft: MutableModel<Quiz>) => MutableModel<Quiz> | void): Quiz;
}

type EagerQuizQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<QuizQuestion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly question?: string | null;
  readonly image?: string | null;
  readonly choises?: string[] | null;
  readonly correctAnswers?: string[] | null;
  readonly quizID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuizQuestion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<QuizQuestion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly question?: string | null;
  readonly image?: string | null;
  readonly choises?: string[] | null;
  readonly correctAnswers?: string[] | null;
  readonly quizID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type QuizQuestion = LazyLoading extends LazyLoadingDisabled ? EagerQuizQuestion : LazyQuizQuestion

export declare const QuizQuestion: (new (init: ModelInit<QuizQuestion>) => QuizQuestion) & {
  copyOf(source: QuizQuestion, mutator: (draft: MutableModel<QuizQuestion>) => MutableModel<QuizQuestion> | void): QuizQuestion;
}