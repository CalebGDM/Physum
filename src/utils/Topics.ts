import { Topic } from "../models"
import { TopicWithResult } from "../types/models"

export const groupByLevels = (topics: Topic[]) => {
    
    const levels: {[key: number]: any[]} = {}

    topics.forEach(topic => {
    if (!levels[topic.level]) {
        levels[topic.level] = []
    }
    levels[topic.level].push(topic)
    })

    return Object.values(levels)
}

 export const getCurrentActiveLevel = (levels: TopicWithResult[][]) => {
    return levels.reduce(
        (acc: number, levelTopics) => 
        levelTopics.every(topic => topic.isQuizPassed ) ?  acc + 1 :  acc,1 
    )

} 