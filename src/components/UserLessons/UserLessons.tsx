import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './StylesUserLesson'
import Colors from '../../constants/Colors'
import { getTheme } from '../Themed'
import { NormalText, Title } from '../../constants/Texts'


interface UserLessonsNode {
    userLesson: UserLesson
}

const UserLessons = ({userLesson}: UserLessonsNode) => {
  const theme = getTheme()
  return (
    <TouchableOpacity style={styles.containerMain}>
        <View style={[styles.imageBox, {backgroundColor: userLesson.color}]}>
            <Image style={styles.image} source={{uri: userLesson.imageUri}}/>
        </View>
        <View>
            <Text style={[Title.Item, {color: Colors[theme].neutral[900]}]} numberOfLines={1}>{userLesson.lessonName}</Text>
            <View style={styles.container}>
                <View style={[styles.progressBar, {backgroundColor: Colors[theme].neutral[100]}]}>
                    <View style={[styles.progress, {backgroundColor: Colors[theme].secondary[400], width: (userLesson.progress * 150)/100}]}></View>
                </View>
                <Text style={[NormalText.Bold, {color: Colors[theme].neutral[500]}]}>{userLesson.progress}%</Text>
            </View>
        </View>
      
    </TouchableOpacity>
  )
}

export default UserLessons