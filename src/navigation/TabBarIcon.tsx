import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { NormalText } from "../constants/Texts";
import { getTheme } from "../components/Themed";

const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  focused: boolean;
  title: string;
}) => {
  const theme = getTheme();
  return (
    <FontAwesome
      size={35}
      {...props}
    />
  );
};

export default TabBarIcon;
