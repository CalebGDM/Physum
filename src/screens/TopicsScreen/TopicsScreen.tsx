import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import TopicNode from "../../components/TopicNode";
import TopicNodesRow from "../../components/TopicNodesRow";
import topics from "../../../assets/data/topics";
import { groupByLevels } from "../../utils/Topics";
import { getTheme } from "../../components/Themed";
import { GStyles } from "../../constants/GeneralStyles";
import Colors from "../../constants/Colors";
import useApplyHeaderWorkaround from "../../../hooks/useAplyHeaderWorks";
import { useNavigation } from "@react-navigation/native";
import { Topic } from "../../models";
import { DataStore } from "aws-amplify";

const TopicsScreen = () => {
  const theme = getTheme();
  const navigation = useNavigation();
  useApplyHeaderWorkaround(navigation.setOptions);

  const [levels, setLevels] = useState<Topic[][]>([]);
  const [currentLevel, setCurrentLevel] = useState(0)
  


  useEffect(() => {
    const fetchTopics = async () => {
      const topics = await (await DataStore.query(Topic)).filter((topic) => topic.lessonID == 'd6e3a16a-4209-435e-bc2b-7a34fbc6c7a8');
      
      const _levels = groupByLevels(topics);
      setLevels(_levels);
      
    };
    fetchTopics()
  }, []);

  console.log(levels)

/*   useEffect(() => {
   setCurrentLevel(getCurrentActiveLevel(levels))
  }, [levels])
   */


  return (
    <View
      style={[GStyles.screen, { backgroundColor: Colors[theme].background }]}
    >
      <FlatList
        data={levels}
        renderItem={({ item }) => (
          <TopicNodesRow>
            {item.map((topic) => (
              <TopicNode
                topic={topic}
                key={topic.id}
                //isDisabled={currentLevel < topic.level}
              />
            ))}
          </TopicNodesRow>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TopicsScreen;
