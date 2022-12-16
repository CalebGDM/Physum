import { Topic } from "../models"

export const groupByLevels = (topics: Topic[]) => {
    console.log(topics)
    const levels: {[key: number]: any[]} = {}

    topics.forEach(topic => {
    if (!levels[topic.level]) {
        levels[topic.level] = []
    }
    levels[topic.level].push(topic)
    })

    return Object.values(levels)
}

/* export const getCurrentActiveLevel = (levels: Topic[][]) => {
    return levels.reduce(
        (acc: number, levelTopics) => 
        levelTopics.every(topic => topic.progress >= 1) ?  acc + 1 :  acc,1 
    )

} */