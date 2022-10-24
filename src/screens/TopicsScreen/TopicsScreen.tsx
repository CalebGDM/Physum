import { View, Text, FlatList } from 'react-native'
import React from 'react'
import TopicNode from '../../components/TopicNode'
import TopicNodesRow from '../../components/TopicNodesRow'
import topics from '../../../assets/data/topics'
import { getCurrentActiveLevel, groupByLevels } from '../../utils/Topics'
import { getTheme } from '../../components/Themed'
import { GStyles } from '../../constants/GeneralStyles'
import Colors from '../../constants/Colors'
import useApplyHeaderWorkaround from '../../../hooks/useAplyHeaderWorks'
import { useNavigation } from '@react-navigation/native'


const levels = groupByLevels(topics)
const currentLevel = getCurrentActiveLevel(levels)
console.log(currentLevel)


const TopicsScreen = () => {
  const theme = getTheme()
  const navigation = useNavigation()
  useApplyHeaderWorkaround(navigation.setOptions)
  return (
    <View style={[GStyles.screen, {backgroundColor: Colors[theme].background}]}>
      <FlatList
        data={levels}
        renderItem={({item}) =>(
          <TopicNodesRow>
            {
              item.map((topic) => (
                <TopicNode topic={topic} key={topic.id} isDisabled={currentLevel < topic.level}/>
              ))
            }
          </TopicNodesRow>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default TopicsScreen