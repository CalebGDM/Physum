import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './StyleLesson'
import { Title } from '../../constants/Texts'

interface LessonPorps{
    lesson: Lesson
}

const Lesson = ({lesson}: LessonPorps) => {
    const words = lesson.lessonName.split(" ")
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: lesson.color}]}>
        <Text>
        {
            words.map((item, index) => (<Text style={[Title.Secondary, styles.text]} numberOfLines={3}>{ item + '\n'}</Text>))
        }
        </Text>
        <Image style={styles.image} source={{uri: lesson.imageUri}}/>
      
    </TouchableOpacity>
  )
}

export default Lesson