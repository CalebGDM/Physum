import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Title } from "../../constants/Texts";
import Colors from "../../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { getTheme } from "../Themed";
import { useNavigation } from "@react-navigation/native";

interface SectionSignPops {
  label: string;
  screen?: string;
}

const SectionSign = (props: SectionSignPops) => {
  const theme = getTheme();
  const navigation = useNavigation();
  
  const onMoreButtonPressed = () => {
    navigation.navigate(props.screen)
  }
  
  return (
    <View style={[styles.container, {marginBottom: 20}]}>
      <Text style={[Title.Secondary, { color: Colors[theme].neutral[900] }]}>
        {props.label}
      </Text>
      {props.screen ? (
        <>
          <TouchableOpacity style={styles.container} onPress={onMoreButtonPressed}>
            
            <FontAwesome
              style={styles.icon}
              name="chevron-right"
              size={18}
              color={Colors[theme].neutral[500]}
            />
          </TouchableOpacity>
        </>
      ) : null}
    </View>
  );
};

export default SectionSign;

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

  },
  icon: {
    marginTop: 5,
    marginLeft: 10,
  },
});
