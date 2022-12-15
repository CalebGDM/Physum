import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './StylesUserLesson'
import Colors from '../../constants/Colors'
import { getTheme } from '../Themed'
import { NormalText, Title } from '../../constants/Texts'
import ProgressBar from '../ProgressBar'
import { useNavigation } from '@react-navigation/native'


interface UserLessonsNode {
    userLesson: UserLesson
}

const UserLessons = ({userLesson}: UserLessonsNode) => {
  const theme = getTheme()
  const navigation = useNavigation()
  const onUserLessonPressed = () => {
    navigation.navigate('LessonsStack',{screen: 'Topics', initial: false})
  }
  return (
    <TouchableOpacity style={styles.containerMain} onPress={onUserLessonPressed}>
        <View style={[styles.imageBox, {backgroundColor: userLesson.color}]}>
            <Image style={styles.image} source={{uri: userLesson.imageUri}}/>
        </View>
        <View>
            <Text style={[Title.Item, {color: Colors[theme].neutral[900]}]} numberOfLines={1}>{userLesson.lessonName}</Text>
            <View style={styles.container}>
                <ProgressBar progress={userLesson.progress} style={{width: 150}}/>
                <Text style={[NormalText.Bold, {color: Colors[theme].neutral[500]}]}>{userLesson.progress * 100}%</Text>
            </View>
        </View>
      
    </TouchableOpacity>
  )
}

export default UserLessons