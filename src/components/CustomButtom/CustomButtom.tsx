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
import { getTheme } from "../Themed";
import { border } from "@shopify/restyle";

interface CustomButtonProps {
  text: string;
  color: string;
  onPress?: () => void;
  disabled?: boolean;
  textColor?: string;
  outline?: boolean;
}

const CustomButtom = ({
  text,
  color,
  style,
  onPress = () => {},
  disabled,
  textColor,
  outline,
}: CustomButtonProps) => {
  const theme = getTheme();
  return (
    <TouchableOpacity
      style={[
        [
          styles.button,
          outline ? {
            backgroundColor: null,
            borderColor: color,
            borderWidth: 3
          }
          :
          { backgroundColor: disabled ? Colors.light.neutral[100] : color},
          style as any,
        ],
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text
        style={[
          Title.Secondary,
          outline ?{
            color: color
          }:
          {
            color: textColor
              ? textColor
              : disabled
                ? Colors.light.neutral[300]
                : Colors[theme].primary[900],
          },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    width: "90%",
    height: 60,
    borderRadius: 50,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
});

export default CustomButtom;
