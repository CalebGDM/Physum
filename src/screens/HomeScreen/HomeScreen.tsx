import { View, Text } from 'react-native'
import React from 'react'
import { Title } from '../../constants/Texts'
import Colors from '../../constants/Colors'
import { getTheme} from '../../components/Themed'


const HomeScreen = () => {
  const theme = getTheme()
  return (
    <View>
      <Text style={[Title.Item, {color: Colors[theme].primary[600]}]}>HomeScreen</Text>
      <Text style={[Title.Secondary, {color: Colors[theme].neutral[900]}]}>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen