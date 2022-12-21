import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import TopicNode from "../../components/TopicNode";
import TopicNodesRow from "../../components/TopicNodesRow";
import { GStyles } from "../../constants/GeneralStyles";
import Colors from "../../constants/Colors";
import useApplyHeaderWorkaround from "../../../hooks/useAplyHeaderWorks";
import { useNavigation, useRoute } from "@react-navigation/native";

import { useModule } from "../../context/ModuleContext";

const TopicsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const lessonId = route?.params?.id;

  useApplyHeaderWorkaround(navigation.setOptions);
  const { levels, currentLevel, setLessonID } = useModule();
  setLessonID(lessonId)

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
