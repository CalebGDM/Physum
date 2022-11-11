import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './StyleLesson'
import { Title } from '../../constants/Texts'
import { useNavigation } from '@react-navigation/native'

interface LessonPorps{
    lesson: Lesson
}

const Lesson = ({lesson}: LessonPorps) => {
    const words = lesson.lessonName.split(" ")
    const navigation = useNavigation()
    const onLessonPressed = () => {
      navigation.navigate('LessonsStack',{screen: 'Topics', initial: false})
    }
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: lesson.color}]} onPress={onLessonPressed}>
        <Text style={styles.text}>
        {
            words.map((item, index) => (<Text style={[Title.Secondary]} numberOfLines={3} >{ item + '\n'}</Text>))
        }
        </Text>
       
      
    </TouchableOpacity>
  )
}

export default Lesson