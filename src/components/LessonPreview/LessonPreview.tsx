import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from './StylesLessonPreview'
import { Title } from '../../constants/Texts'
import { useNavigation } from '@react-navigation/native'
import { Lesson } from '../../models'
import { S3Image } from "aws-amplify-react-native";

interface LessonPreviewNode {
    lesson: Lesson
}

const LessonPreview = ({lesson}: LessonPreviewNode) => {
  const navigation = useNavigation()

  const onLessonPressed = () => {
    //navigation.navigate('LessonsStack',{screen: 'Topics'},{ initial: false, params:{id: lesson.id}})
    navigation.navigate("LessonsStack", {screen: 'Topics',initial: false,  params:{id: lesson.id}})
  }
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: lesson.color}]} onPress={onLessonPressed}>
      <Text style={[Title.Secondary, styles.text]}>{lesson.lessonName}</Text>
      <Text>{lesson.imageUri}</Text>
      <S3Image imgKey={lesson.imageUri} style={styles.image} level={"public"} resizeMode={'contain'}/>
      
    </TouchableOpacity>
  )
}

export default LessonPreview