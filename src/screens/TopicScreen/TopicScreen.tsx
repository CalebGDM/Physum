import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import topics from "../../../assets/data/topics";
import Colors from "../../constants/Colors";
import { getTheme } from "../../components/Themed";
import { Styles } from "./TopicScreenStyle";
import { Title } from "../../constants/Texts";

import Markdown from "react-native-markdown-display";
import { getCurrTheme, MarkdownStyles } from "../../constants/MarkdownStyles";
import CustomButtom from "../../components/CustomButtom";
import useApplyHeaderWorkaround from "../../../hooks/useAplyHeaderWorks";
import SectionSign from "../../components/SectionSign";
import ResourceItem from "../../components/ResourceItem";
import { Auth, DataStore } from "aws-amplify";
import { Exersice, Resource, Topic, UserTopicProgress } from "../../models";
import LoadingScreen from "../LoadingScreen";
import { useModule } from "../../context/ModuleContext";

const TopicScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const topicId = route?.params?.id;
  const [resources, setResources] = useState<Resource[]>([]);
  const [exercises, setExercises] = useState<Exersice[]>([]);
  const [topic, setTopic] = useState<Topic>();
  const [userTopicProgress, setUserTopicProgress] =
    useState<UserTopicProgress>();
  const { updateTopicProgress } = useModule();

  useApplyHeaderWorkaround(navigation.setOptions);

  useEffect(() => {
    DataStore.query(Topic, topicId).then(setTopic);
  }, [topicId]);

  useEffect(() => {
    if (topic) {
      navigation.setOptions({ title: topic.title });
    }
    const fetchTopicDetails = async () => {
      if (!topic) {
        return;
      }
      const resources = await DataStore.query(Resource);
      setResources(resources.filter((r) => r.topicID == topicId));

      const exercises = await DataStore.query(Exersice);
      setExercises(exercises.filter((e) => e.topicID == topicId));

      const userData = await Auth.currentAuthenticatedUser();
      const userTopicProgresses = await DataStore.query(UserTopicProgress);
      const userProgress = userTopicProgresses.find(
        (tp) => tp.topicID == topic.id && tp.sub == userData?.attributes.sub
      );
      if (userProgress) {
        setUserTopicProgress(userProgress);
        console.log("pito");
      } else {
        console.log("nueve");
        const newUserProgress = await DataStore.save(
          new UserTopicProgress({
            sub: userData?.attributes.sub,
            completedResources: [],
            completedExercises: [],
            progress: 0,
            topicID: topic.id,
          })
        );

        setUserTopicProgress(newUserProgress);
        console.log("poto");
      }
    };

    fetchTopicDetails();
  }, [topic]);

  const onGoToQuizPressed = () => {
    if (topic?.topicQuizId) {
      navigation.navigate("Quiz", { id: topic?.topicQuizId });
    }
  };
  console.log(userTopicProgress);

  const onResourceCompleted = async (resource: Resource) => {
    if (
      !userTopicProgress ||
      userTopicProgress.completedResources.includes(resource.id)
    ) {
      return;
    }
    // Recalculate progress
    const progressUpdated = await DataStore.save(
      UserTopicProgress.copyOf(userTopicProgress, (updated) => {
        updated.completedResources.push(resource.id);
        const progress =
          (userTopicProgress.completedResources.length +
            userTopicProgress.completedExercises.length +
            1) /
          (resources.length + exercises.length);
        updated.progress = progress;
      })
    );

    setUserTopicProgress(progressUpdated);
    updateTopicProgress(topicId, progressUpdated);
  };

  const onExercieCompleted = async (exercise: Exersice) => {
    if (
      !userTopicProgress ||
      userTopicProgress.completedExercises.includes(exercise.id)
    ) {
      return;
    }
    // Recalculate progress
    const progressUpdated = await DataStore.save(
      UserTopicProgress.copyOf(userTopicProgress, (updated) => {
        updated.completedExercises.push(exercise.id);
        const progress =
          (userTopicProgress.completedResources.length +
            userTopicProgress.completedExercises.length +
            1) /
          (resources.length + exercises.length);
        updated.progress = progress;
      })
    );

    setUserTopicProgress(progressUpdated);
    updateTopicProgress(topicId, progressUpdated);
  };

  if (!userTopicProgress || !topic) {
    return <LoadingScreen />;
  }
  return (
    <ScrollView
      style={[{ backgroundColor: Colors.light.background }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={Styles.content}>
        <Markdown style={MarkdownStyles}>{topic?.info}</Markdown>
        {topic?.Resources && <SectionSign label="Recuros extra" />}

        {resources?.map((resource, index) => (
          <ResourceItem
            resource={resource}
            index={index}
            key={resource.id}
            onComplete={onResourceCompleted}
            isCompleted={userTopicProgress.completedResources.includes(
              resource.id
            )}
          />
        ))}

        {topic?.Exersices && <SectionSign label="Ejercisios de práctica" />}

        {exercises?.map((resource, index) => (
          <ResourceItem
            resource={resource}
            index={index}
            key={resource.id}
            onComplete={onExercieCompleted}
            isCompleted={userTopicProgress.completedExercises?.includes(
              resource.id
            )}
          />
        ))}
        {topic?.topicQuizId && (
          <CustomButtom
            text="Responder Quiz"
            color={Colors.light.primary[500]}
            onPress={onGoToQuizPressed}
          />
        )}
      </View>
    </ScrollView>
  );
};

export default TopicScreen;
