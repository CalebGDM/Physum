import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { getTheme} from '../../components/Themed'
import SearchBar from '../../components/SearchBar'
import LessonPreview from '../../components/LessonPreview'
import lessons from '../../../assets/data/lessons'
import { FontAwesome } from '@expo/vector-icons';
import { Title } from '../../constants/Texts'
import Colors from '../../constants/Colors'
import SectionSign from '../../components/SectionSign'
import FooterList from '../../components/FooterList'
import UserLessons from '../../components/UserLessons'
import userLessons from '../../../assets/data/userLessons'



const HomeScreen = () => {
  const theme = getTheme()
  return (
    <View style={{paddingHorizontal: 15}}>

      {/* TopLessonPewviewList */}
      <FlatList
        style={{marginVertical: 20}}
        data={lessons}
        renderItem={({item}) => <LessonPreview lesson={item}/>}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={<FooterList/>}
      />

      {/* Tus Lecciones */}
      <SectionSign label='Tus lecciones' screen='userLessons'/>
      <FlatList
        data={userLessons}
        renderItem={({item}) => <UserLessons userLesson={item}/>}

      />
    </View>
  )
}

export default HomeScreen