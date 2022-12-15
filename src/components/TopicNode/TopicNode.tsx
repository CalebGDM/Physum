import {
  View,
  Text,
  Image,
  useWindowDimensions,
  Pressable,
} from "react-native";
import React from "react";
import { styles } from "./TopicStyles";
import { getTheme } from "../Themed";
import Colors from "../../constants/Colors";
import { Title } from "../../constants/Texts";
import { Svg, Circle } from "react-native-svg";
import CircularProgress from "../CircularProgress";
import { useNavigation } from "@react-navigation/native";

interface TopicProps {
  topic: Topic;
  isDisabled?: boolean;
}

const TopicNode = ({ topic, isDisabled = true }: TopicProps) => {
  const { width } = useWindowDimensions();
  const itemWidth = width / 3 - 10;
  const theme = getTheme();
  const navigation = useNavigation();

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
          { backgroundColor: Colors[theme].neutral[400] },
        ]}
      >
        <CircularProgress
          size={itemWidth}
          strokeWidth={10}
          progress={topic.progress}
        />
        <View
          style={[
            styles.circle,
            {
              backgroundColor: isDisabled
                ? Colors[theme].neutral[300]
                : Colors[theme].primary[200],
              borderColor: Colors[theme].background,
            },
          ]}
        >
          
        </View>
      </View>
      <Text
        style={[Title.Item, { color: Colors[theme].neutral[900] }, styles.text]}
      >
        {topic.title}
      </Text>
      <Image source={{ uri: topic.imageUri }} style={styles.image} resizeMode={'contain'}/>
    </Pressable>
  );
};

export default TopicNode;
