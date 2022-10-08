import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './StylesLessonPreview'
import { Title } from '../../constants/Texts'
import { useNavigation } from '@react-navigation/native'

interface LessonPreviewNode {
    lesson: Lesson
}

const LessonPreview = ({lesson}: LessonPreviewNode) => {
  const navigation = useNavigation()

  const onLessonPressed = () => {
    navigation.navigate('LessonsStack',{screen: 'Topics', initial: false})
  }
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: lesson.color}]} onPress={onLessonPressed}>
      <Text style={[Title.Secondary, styles.text]}>{lesson.lessonName}</Text>
      <Image style={styles.image} source={{uri: lesson.imageUri}}/>
    </TouchableOpacity>
  )
}

export default LessonPreview