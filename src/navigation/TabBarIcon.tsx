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
    const theme = getTheme()
  return props.focused ? (
    <>
    <View style={{width:60, height:3, backgroundColor: props.color, marginBottom: 15, marginTop: -2}}></View>
      <FontAwesome size={40} style={{ marginBottom: -3, marginTop: -9 }} {...props} />
      </>
   
  ) : (
    <Text style={[NormalText.Bold, {color: Colors[theme].neutral[400], marginTop: 15}]}>{props.title}</Text>
  );
};


export default TabBarIcon;
