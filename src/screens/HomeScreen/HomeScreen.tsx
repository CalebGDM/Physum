import { View, FlatList, ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import { getTheme} from '../../components/Themed'
import LessonPreview from '../../components/LessonPreview'
import lessons from '../../../assets/data/lessons'
import Colors from '../../constants/Colors'
import SectionSign from '../../components/SectionSign'
import FooterList from '../../components/FooterList'
import UserLessons from '../../components/UserLessons'
import userLessons from '../../../assets/data/userLessons'
import { GStyles } from '../../constants/GeneralStyles'
import { Auth, DataStore } from 'aws-amplify'
import { Lesson } from '../../models'





const HomeScreen = () => {
  
  const [lessonsToRender, setLessonsToRender] = useState<Lesson[]>([]) 
  //const [userLessons, setUserLessons] = useState<Lesson[]>()
 
  useEffect(() => {
    const fetchLessons =async () => {
      const lessons = await DataStore.query(Lesson)
      setLessonsToRender(lessons.slice(0,4))
    }
    const fetchUserLessons = async () => {
      const userData = Auth.currentAuthenticatedUser()
      
    }
    fetchLessons()
  },[])

return (
  <ScrollView style={[GStyles.screen, {backgroundColor: Colors.light.background}]} showsVerticalScrollIndicator={false}>

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