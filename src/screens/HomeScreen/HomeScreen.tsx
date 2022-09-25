import { View, Text } from 'react-native'
import React from 'react'
import { NormalText, SmallText, Title } from '../../constants/Texts'
import Colors from '../../constants/Colors'
import useColorScheme from '../../../hooks/useColorScheme'

const HomeScreen = () => {
  const colorScheme = useColorScheme()
  return (
    <View>
      <Text style={[Title.Item, {color: Colors[colorScheme].primary[500]}]}>HomeScreen</Text>
      <Text style={Title.Secondary}>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen