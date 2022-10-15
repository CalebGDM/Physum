import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { LessonStackParamList, RootStackParamList } from '../../../types'
import { GStyles } from '../../constants/GeneralStyles'
import { getTheme } from '../../components/Themed'
import Colors from '../../constants/Colors'
import huskiHappy from '../../../assets/images/huski-happy.png'
import huskiSad from '../../../assets/images/huski-sad.png'
import { Title } from '../../constants/Texts'
import CustomButtom from '../../components/CustomButtom'
import useApplyHeaderWorkaround from '../../../hooks/useAplyHeaderWorks'


const QuizEndScreen = ({route, navigation}: RootStackParamList<"QuizEnd">) => {
  const {numberOfQuestions, numberOfCorrectAnswers} = route.params
  const theme = getTheme();
  const percentage = (numberOfCorrectAnswers / numberOfQuestions) * 100
  const isHappy = percentage > 70
  const happyText = 'Eres muy bueno 🎉'
  const sadText = 'Puedes hacerlo mejor...'
  useApplyHeaderWorkaround(navigation.setOptions)

  const onContinue = () => {
    navigation.navigate('Topics')
  }
  
  return (
    <View style={[GStyles.screen, {backgroundColor: Colors[theme].background, alignItems: 'center'}]}>
      <Image 
        source={isHappy ? huskiHappy : huskiSad}
        style={styles.image}
        resizeMode={'contain'}
      />
      <Text style={[Title.Section, {color: Colors[theme].neutral[500]}]}>{isHappy ? happyText : sadText}</Text>
      <Text style={[Title.Principal, {fontSize: 80, color: isHappy ? Colors[theme].primary[500] : Colors[theme].tertiary[500]}]}>{percentage}%</Text>
      <Text style={[Title.Secondary, {color: Colors[theme].neutral[100]}]}>{numberOfCorrectAnswers} / {numberOfQuestions}</Text>
      <CustomButtom text='Continuar' color={Colors[theme].primary[500]} onPress={onContinue}/>
    </View>
  )
}

const styles = StyleSheet.create({
  image:{
    height: '50%',
    aspectRatio: 1,
    marginBottom: 30
  }
})

export default QuizEndScreen