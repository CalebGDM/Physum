import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { NormalText } from "../constants/Texts";
import useColorScheme from "../../hooks/useColorScheme";

const TabBarIcon = (props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
  focused: boolean;
  title: string;
}) => {
    const colorScheme = useColorScheme()
  return props.focused ? (
    <>
    <View style={{width:60, height:3, backgroundColor: props.color, marginTop: -10, marginBottom: 10}}></View>
      <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
      </>
   
  ) : (
    <Text style={[NormalText.Bold, {color: Colors[colorScheme].neutral[400]}]}>{props.title}</Text>
  );
};


export default TabBarIcon;
