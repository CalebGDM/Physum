import { View, Text, FlatList } from 'react-native'
import React from 'react'
import userLessons from '../../../assets/data/userLessons'
import UserLessons from '../../components/UserLessons'
import { getTheme } from '../../components/Themed'
import { GStyles, styles } from '../../constants/GeneralStyles'
import Colors from '../../constants/Colors'

const UserLessonsScreen = () => {
  const theme = getTheme()
  return (
    <View style={[GStyles.screen, {backgroundColor: Colors[theme].background}]}>
      <FlatList
        data={userLessons}
        renderItem={({item}) => <UserLessons userLesson={item}/>}
      />
    </View>
  )
}

export default UserLessonsScreen