import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly expoNotificationToken?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly expoNotificationToken?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

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

type EagerResource = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Resource, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title: string;
  readonly url?: string | null;
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
  readonly title: string;
  readonly url?: string | null;
  readonly topicID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Resource = LazyLoading extends LazyLoadingDisabled ? EagerResource : LazyResource

export declare const Resource: (new (init: ModelInit<Resource>) => Resource) & {
  copyOf(source: Resource, mutator: (draft: MutableModel<Resource>) => MutableModel<Resource> | void): Resource;
}

type EagerQuizResult = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<QuizResult, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly nofQuestions: number;
  readonly nofCorretAnswers: number;
  readonly precentage: number;
  readonly failedQuestions?: string[] | null;
  readonly attemps: number;
  readonly quizID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyQuizResult = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<QuizResult, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly nofQuestions: number;
  readonly nofCorretAnswers: number;
  readonly precentage: number;
  readonly failedQuestions?: string[] | null;
  readonly attemps: number;
  readonly quizID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type QuizResult = LazyLoading extends LazyLoadingDisabled ? EagerQuizResult : LazyQuizResult

export declare const QuizResult: (new (init: ModelInit<QuizResult>) => QuizResult) & {
  copyOf(source: QuizResult, mutator: (draft: MutableModel<QuizResult>) => MutableModel<QuizResult> | void): QuizResult;
}

type EagerUserTopicProgress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserTopicProgress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly completedResources: string[];
  readonly completedExercises: string[];
  readonly progress: number;
  readonly isCompleted?: boolean | null;
  readonly topicID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserTopicProgress = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserTopicProgress, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly sub: string;
  readonly completedResources: string[];
  readonly completedExercises: string[];
  readonly progress: number;
  readonly isCompleted?: boolean | null;
  readonly topicID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserTopicProgress = LazyLoading extends LazyLoadingDisabled ? EagerUserTopicProgress : LazyUserTopicProgress

export declare const UserTopicProgress: (new (init: ModelInit<UserTopicProgress>) => UserTopicProgress) & {
  copyOf(source: UserTopicProgress, mutator: (draft: MutableModel<UserTopicProgress>) => MutableModel<UserTopicProgress> | void): UserTopicProgress;
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
  readonly level?: number | null;
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
  readonly level?: number | null;
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
  readonly Quiz?: Quiz | null;
  readonly lessonID: string;
  readonly UserTopicProgresses?: (UserTopicProgress | null)[] | null;
  readonly Resources?: (Resource | null)[] | null;
  readonly Exersices?: (Exersice | null)[] | null;
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
  readonly Quiz: AsyncItem<Quiz | undefined>;
  readonly lessonID: string;
  readonly UserTopicProgresses: AsyncCollection<UserTopicProgress>;
  readonly Resources: AsyncCollection<Resource>;
  readonly Exersices: AsyncCollection<Exersice>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly topicQuizId?: string | null;
}

export declare type Topic = LazyLoading extends LazyLoadingDisabled ? EagerTopic : LazyTopic

export declare const Topic: (new (init: ModelInit<Topic>) => Topic) & {
  copyOf(source: Topic, mutator: (draft: MutableModel<Topic>) => MutableModel<Topic> | void): Topic;
}

type EagerQuiz = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Quiz, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly QuizQuestions?: (QuizQuestion | null)[] | null;
  readonly name: string;
  readonly QuizResults?: (QuizResult | null)[] | null;
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
  readonly QuizResults: AsyncCollection<QuizResult>;
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