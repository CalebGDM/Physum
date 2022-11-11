import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import topics from "../../../assets/data/topics";
import Colors from "../../constants/Colors";
import { getTheme } from "../../components/Themed";
import { Styles } from "./TopicScreenStyle";
import { Title } from "../../constants/Texts";
import topicInfo from "../../../assets/data/topicInfo";
import Markdown from "react-native-markdown-display";
import { getCurrTheme, MarkdownStyles } from "../../constants/MarkdownStyles";
import CustomButtom from "../../components/CustomButtom";
import useApplyHeaderWorkaround from "../../../hooks/useAplyHeaderWorks";

const TopicScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const topicId = route?.params?.id;
  const topic = topics.find((t) => t.id === topicId);
  useApplyHeaderWorkaround(navigation.setOptions);

  const theme = getTheme();
  const onGoToQuizPressed = () => {
    navigation.navigate("Quiz", { id: "129" });
  };
  return (
    <ScrollView
      style={[{ backgroundColor: Colors[theme].background }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={Styles.content}>
        <Markdown style={MarkdownStyles}>{topicInfo[0].info}</Markdown>
        <CustomButtom
          text="Responder Quiz"
          color={Colors[theme].primary[500]}
          onPress={onGoToQuizPressed}
        />
      </View>
    </ScrollView>
  );
};

export default TopicScreen;
