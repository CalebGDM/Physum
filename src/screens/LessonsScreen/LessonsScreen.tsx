import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Lesson from '../../components/Lesson'
import lessons from '../../../assets/data/lessons'
import { getTheme } from '../../components/Themed'
import { GStyles } from '../../constants/GeneralStyles'
import Colors from '../../constants/Colors'
import useApplyHeaderWorkaround from '../../../hooks/useAplyHeaderWorks'
import { useNavigation } from '@react-navigation/native'

const LessonsScreen = () => {
  const theme = getTheme()
  const navigation = useNavigation()
  useApplyHeaderWorkaround(navigation.setOptions)
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