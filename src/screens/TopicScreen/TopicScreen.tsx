import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
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
import SectionSign from "../../components/SectionSign";
import ResourceItem from "../../components/ResourceItem";
import { DataStore } from "aws-amplify";
import { Exersice, Resource, Topic } from "../../models";

const TopicScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const topicId = route?.params?.id;
  const [resources, setResources] = useState<Resource[]>([]);
  const [exercise, setExercise] = useState<Exersice[]>([]);
  const [topic, setTopic] = useState<Topic>();

  useApplyHeaderWorkaround(navigation.setOptions);

  useEffect(() => {
    DataStore.query(Topic, topicId).then(setTopic);
  }, [topicId]);

  useEffect(() => {
    DataStore.query(Resource)
      .then((resources) => resources.filter((r) => r.topicID == topicId))
      .then(setResources);

    DataStore.query(Exersice)
      .then((exercises) => exercises.filter((e) => e.topicID == topicId))
      .then(setExercise);
  }, [topic]);

  const theme = getTheme();
  navigation.setOptions({ title: topic?.title });
  const onGoToQuizPressed = () => {
    if (topic?.topicQuizId) {
      navigation.navigate("Quiz", { id: topic?.topicQuizId });
    }
  };
  console.log(topic);
  return (
    <ScrollView
      style={[{ backgroundColor: Colors[theme].background }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={Styles.content}>
        <Markdown style={MarkdownStyles}>{topic?.info}</Markdown>
        {topic?.Resources && <SectionSign label="Recuros extra" />}

        {resources?.map((resource, index) => (
          <ResourceItem resource={resource} index={index} key={resource.id} />
        ))}

        {topic?.Exercises && <SectionSign label="Ejercisios de práctica" />}

        {exercise?.map((resource, index) => (
          <ResourceItem resource={resource} index={index} key={resource.id} />
        ))}
        {topic?.topicQuizId && (
          <CustomButtom
            text="Responder Quiz"
            color={Colors[theme].primary[500]}
            onPress={onGoToQuizPressed}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default TopicScreen;
