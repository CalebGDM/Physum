import { View, FlatList} from 'react-native'
import React from 'react'
import { getTheme} from '../../components/Themed'
import LessonPreview from '../../components/LessonPreview'
import lessons from '../../../assets/data/lessons'
import Colors from '../../constants/Colors'
import SectionSign from '../../components/SectionSign'
import FooterList from '../../components/FooterList'
import UserLessons from '../../components/UserLessons'
import userLessons from '../../../assets/data/userLessons'
import { styles } from '../../constants/GeneralStyles'




const HomeScreen = () => {
  const theme = getTheme()
  return (
    <View style={[styles.screen, {backgroundColor: Colors[theme].background}]}>

      {/* TopLessonPewviewList */}
      <FlatList
        data={lessons}
        renderItem={({item}) => <LessonPreview lesson={item}/>}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={<FooterList/>}
      />

      {/* Tus Lecciones */}
      <SectionSign label='Tus lecciones' screen={'UserLessons'}/>
      <FlatList
        data={userLessons}
        renderItem={({item}) => <UserLessons userLesson={item}/>}

      />
    </View>
  )
}

export default HomeScreen