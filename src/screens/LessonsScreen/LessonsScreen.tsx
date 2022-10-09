import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Lesson from '../../components/Lesson'
import lessons from '../../../assets/data/lessons'
import { getTheme } from '../../components/Themed'
import { GStyles, styles } from '../../constants/GeneralStyles'
import Colors from '../../constants/Colors'

const LessonsScreen = () => {
  const theme = getTheme()
  return (
    <View style={[GStyles.screen, {backgroundColor: Colors[theme].background}]}>
        <FlatList
            data={lessons}
            numColumns={2}
            renderItem={({item}) => <Lesson lesson={item}/>}
        />
      
    </View>
  )
}

export default LessonsScreen