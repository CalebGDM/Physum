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
// @ts-expect-error
import { S3Image } from "aws-amplify-react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Auth, DataStore } from "aws-amplify";
import { UserTopicProgress } from "../../models";
import { TopicWithResult } from "../../types/models";

interface TopicProps {
  topic: TopicWithResult;
  isDisabled?: boolean;
  hasThree?: boolean;
}

const TopicNode = ({ topic, isDisabled = false, hasThree = false }: TopicProps) => {
  const { width } = useWindowDimensions();
  const itemWidth = width / 3 - 10;
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    (async () => {
      const userData = await Auth.currentAuthenticatedUser();
      const userTopicProgresses = await DataStore.query(UserTopicProgress);
      const userProgress = userTopicProgresses.find(
        (tp) => tp.topicID == topic.id && tp.sub == userData?.attributes.sub
      );
  
      if (userProgress) {
        setProgress(userProgress.progress || 0);
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
      style={[styles.container, { width: itemWidth, marginHorizontal: hasThree ? 5 : 10 }]}
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
        >
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
              size={50}
              color="black"
              style={[styles.image, {left: 30}]}
            />
          )}
          <View style={[styles.percentage, {backgroundColor: topic.isQuizPassed ? Colors.light.primary[500] : Colors.light.neutral[300]}]} >
            <FontAwesome name="trophy" size={24} color={ topic.isQuizPassed ? Colors.light.primary[700] : Colors.light.neutral[400]} />
          </View>
        </View>
      </View>
      <Text
        style={[Title.Item, { color: Colors.light.neutral[900] }, styles.text]}
      >
        {topic.title}
      </Text>
    </Pressable>
  );
};

export default TopicNode;
