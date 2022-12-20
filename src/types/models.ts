import { QuizResult, Topic } from "../models";


type ResourceItem = {
    id: string,
    title: string,
    url: string,
    completed?: boolean
}

export type TopicWithResult = Topic & { quizResult?: QuizResult, isQuizPassed?: boolean };
