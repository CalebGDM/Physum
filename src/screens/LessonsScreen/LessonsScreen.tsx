import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Lesson from '../../components/Lesson'
import lessons from '../../../assets/data/lessons'

const LessonsScreen = () => {
  return (
    <View style={{paddingHorizontal: 15, paddingVertical: 20}}>
        <FlatList
            data={lessons}
            numColumns={2}
            renderItem={({item}) => <Lesson lesson={item}/>}
        />
      
    </View>
  )
}

export default LessonsScreen