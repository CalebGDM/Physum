import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import TopicNode from "../../components/TopicNode";
import TopicNodesRow from "../../components/TopicNodesRow";
import { GStyles } from "../../constants/GeneralStyles";
import Colors from "../../constants/Colors";
import useApplyHeaderWorkaround from "../../../hooks/useAplyHeaderWorks";
import { useNavigation, useRoute } from "@react-navigation/native";

import { useModule } from "../../context/ModuleContext";
import { Analytics } from "aws-amplify";
import { Title } from "../../constants/Texts";

const TopicsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const lessonId = route?.params?.id;
  const lessonName = route?.params?.lessonName;

  useApplyHeaderWorkaround(navigation.setOptions);
  navigation.setOptions({title: lessonName})
  const { levels, currentLevel, setLessonID } = useModule();
  

  useEffect(() => {
    if(!lessonId || lessonId == ""){
      return
    }
    Analytics.record({
      name: 'lessonOpened',
      attributes: {lessonId: lessonId}
    })
    setLessonID(lessonId)
  },[lessonId])

  if (!levels || !currentLevel) {
    <ActivityIndicator />;
  }
  return (
    <View
      style={[GStyles.screen, { backgroundColor: Colors.light.background }]}
    >
      <FlatList
        data={levels}
        renderItem={({ item }) => (
          <TopicNodesRow>
            {item.map((topic) => (
              <TopicNode
                topic={topic}
                key={topic.id}
                isDisabled={currentLevel < topic.level}
                hasThree={item.length == 3}
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
