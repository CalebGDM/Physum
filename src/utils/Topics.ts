export const groupByLevels = (topics: Topic[]): Topic[][] => {
    const levels: {[key: number]: any[]} = {}

    topics.forEach(topic => {
    if (!levels[topic.level]) {
        levels[topic.level] = []
    }
    levels[topic.level].push(topic)
    })

    return Object.values(levels)
}

export const getCurrentActiveLevel = (levels: Topic[][]) => {
    return levels.reduce(
        (acc: number, levelTopics) => 
        levelTopics.every(topic => topic.progress >= 1) ?  acc + 1 :  acc,1 
    )

}