import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  Platform,
} from "react-native";
import React from "react";
import { Title } from "../../constants/Texts";
import Colors from "../../constants/Colors";

interface QuizAnswerProps extends TouchableOpacityProps {
  answer: string;
  isSelected?: boolean;
  onPress?: (argo0: string) => void;
}

const QuizAnswer = ({
  answer,
  isSelected = false,
  onPress = () => {},
  ...otherProps
}: QuizAnswerProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        isSelected
          ? { borderColor: Colors.light.secondary[500], borderWidth: 10 }
          : {},
      ]}
      onPress={() => onPress(answer)}
      {...otherProps}
    >
      <Text style={[Title.Section, { textAlign: "center" }]}>{answer}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Platform.OS === 'ios' ? '43%' : '40%',
    aspectRatio: Platform.OS === 'ios' ? 9/10 : 1,
    backgroundColor: Colors.light.background,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 30,
    marginTop: 30,
    padding: 10,
  },
});

export default QuizAnswer;
