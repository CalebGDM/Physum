import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './StylesLessonPreview'
import { Title } from '../../constants/Texts'

interface LessonPreviewNode {
    lesson: Lesson
}

const LessonPreview = ({lesson}: LessonPreviewNode) => {
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: lesson.color}]}>
      <Text style={[Title.Secondary, styles.text]}>{lesson.lessonName}</Text>
      <Image style={styles.image} source={{uri: lesson.imageUri}}/>
    </TouchableOpacity>
  )
}

export default LessonPreview