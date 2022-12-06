type Lesson = {
    id: string,
    lessonName: string,
    color: string,
    imageUri: string
}

type UserLesson = {
    id: string,
    lessonName: string,
    color: string,
    imageUri: string,
    progress: number,
}

type Topic = {
    id: string,
    title: string,
    imageUri: string,
    level: number,
    progress: number,
    resources?: ResourceItem[],
}

type ResourceItem = {
    id: string,
    title: string,
    url: string,
    completed?: boolean
}