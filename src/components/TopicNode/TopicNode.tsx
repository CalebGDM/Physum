import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./TopicStyles";
import { getTheme } from "../Themed";
import Colors from "../../constants/Colors";
import { Title } from "../../constants/Texts";
import { Svg, Circle } from "react-native-svg";
import CircularProgress from "../CircularProgress";
import { useNavigation } from "@react-navigation/native";
import { S3Image } from "aws-amplify-react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Auth, DataStore } from "aws-amplify";
import { UserTopicProgress } from "../../models";

interface TopicProps {
  topic: Topic;
  isDisabled?: boolean;
}

const TopicNode = ({ topic, isDisabled = false }: TopicProps) => {
  const { width } = useWindowDimensions();
  const itemWidth = width / 3 - 10;
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    (async () => {
      const userData = await Auth.currentAuthenticatedUser();
      const userTopicProgresses = await DataStore.query(UserTopicProgress)
      const userProgress = userTopicProgresses.find(
        (tp) => tp.topicID == topic.id && tp.sub == userData?.attributes.sub
      );
      console.log(userTopicProgresses)
      if(userProgress){

        setProgress(userProgress.progress || 0)
      }
    })();
  }, [topic]);

  const onPress = () => {
    navigation.navigate("Topic", { id: topic.id });
  };
  
  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={[styles.container, { width: itemWidth }]}
    >
      <View
        style={[
          styles.progress,
          { backgroundColor: Colors.light.neutral[400] },
        ]}
      >
        <CircularProgress
          size={itemWidth}
          strokeWidth={10}
          progress={progress}
        />
        <View
          style={[
            styles.circle,
            {
              backgroundColor: isDisabled
                ? Colors.light.neutral[300]
                : Colors.light.primary[200],
              borderColor: Colors.light.background,
            },
          ]}
        ></View>
      </View>
      <Text
        style={[Title.Item, { color: Colors.light.neutral[900] }, styles.text]}
      >
        {topic.title}
      </Text>

      {topic.icon ? (
        <S3Image
          imgKey={topic.icon}
          level={"public"}
          style={styles.image}
          resizeMode={"contain"}
        />
      ) : (
        <FontAwesome
          name="question"
          size={80}
          color="black"
          style={styles.image}
        />
      )}
    </Pressable>
  );
};

export default TopicNode;
