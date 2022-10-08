import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import topics from '../../../assets/data/topics';
import { MarkdownView } from 'react-native-markdown-view'
import { styles } from '../../constants/GeneralStyles';
import Colors from '../../constants/Colors';
import { getTheme } from '../../components/Themed';
import { Styles } from './TopicScreenStyle';
import { Title } from '../../constants/Texts';

const TopicScreen = () => {
  const route = useRoute();
  const topicId = route?.params?.id;
  const topic = topics.find((t) => t.id === topicId)
  const copy = `# h1 Heading 8-)
  1. First item
2. Second item
3. Third item
4. Fourth item

`;
  const theme = getTheme()
  return (
    <ScrollView style={[styles.screen, {backgroundColor: Colors.light.background}]}>
      <MarkdownView>{copy}</MarkdownView>
      <TouchableOpacity style={[Styles.button, {backgroundColor: Colors[theme].primary[500]}]}>
      <Text style={[Title.Secondary, {color: Colors[theme].primary[900]}]}>Responder Quiz</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default TopicScreen