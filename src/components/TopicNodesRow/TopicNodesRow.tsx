import { View, Text } from 'react-native'
import React from 'react'

interface TopicsNodeRowProps {
    children: React.ReactNode
}

const TopicNodesRow = ({children}: TopicsNodeRowProps) => {
  return (
    <View style={{flexDirection: 'row', width: '100%', justifyContent: 'center'}}>
      {children}
    </View>
  )
}

export default TopicNodesRow