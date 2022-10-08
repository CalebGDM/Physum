import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import topics from '../../../assets/data/topics';
import { styles } from '../../constants/GeneralStyles';
import Colors from '../../constants/Colors';
import { getTheme } from '../../components/Themed';
import { Styles } from './TopicScreenStyle';
import { Title } from '../../constants/Texts';
import topicInfo from '../../../assets/data/topicInfo';
import Markdown from 'react-native-markdown-display';
import { getCurrTheme, MarkdownStyles } from '../../constants/MarkdownStyles';

const TopicScreen = () => {
  const route = useRoute();
  const topicId = route?.params?.id;
  const topic = topics.find((t) => t.id === topicId)

  const theme = getTheme()
  return (
    <ScrollView style={[ {backgroundColor: Colors[theme].background}]}>
      <View style={Styles.content}>
      <Markdown >{topicInfo[0].info}</Markdown>
      <TouchableOpacity style={[Styles.button, {backgroundColor: Colors[theme].primary[500]}]}>
      <Text style={[Title.Secondary, {color: Colors[theme].primary[900]}]}>Responder Quiz</Text>
      </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default TopicScreen