import { View, FlatList, ScrollView} from 'react-native'
import React from 'react'
import { getTheme} from '../../components/Themed'
import LessonPreview from '../../components/LessonPreview'
import lessons from '../../../assets/data/lessons'
import Colors from '../../constants/Colors'
import SectionSign from '../../components/SectionSign'
import FooterList from '../../components/FooterList'
import UserLessons from '../../components/UserLessons'
import userLessons from '../../../assets/data/userLessons'
import { GStyles } from '../../constants/GeneralStyles'




const HomeScreen = () => {
  const theme = getTheme()
  const lessonsToRender = lessons.slice(0,4)

return (
  <ScrollView style={[GStyles.screen, {backgroundColor: Colors[theme].background}]} showsVerticalScrollIndicator={false}>

    {/* TopLessonPewviewList */}
    <FlatList
      data={lessonsToRender}
      renderItem={({item}) => <LessonPreview lesson={item}/>}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      ListFooterComponent={<FooterList/>}
    />

    {/* Tus Lecciones */}
    <SectionSign label='Tus lecciones' screen={'UserLessons'}/>
   
    {
      userLessons.map((item, index) => <UserLessons userLesson={item}/>)
    }
  </ScrollView>
)
}

export default HomeScreen