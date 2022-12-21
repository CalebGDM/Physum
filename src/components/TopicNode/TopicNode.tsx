import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "./TopicStyles";
import Colors from "../../constants/Colors";
import { Title } from "../../constants/Texts";
import CircularProgress from "../CircularProgress";
import { useNavigation } from "@react-navigation/native";
// @ts-expect-error
import { S3Image } from "aws-amplify-react-native";
import { FontAwesome } from "@expo/vector-icons";
import { TopicWithResult } from "../../types/models";
import { useModule } from "../../context/ModuleContext";

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
          progress={topic.progress?.progress || 0}
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
