import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { Title } from "../../constants/Texts";
import { FontAwesome } from "@expo/vector-icons";

interface FormInputProps {
    placeholder: string,
    icon: string,
}


const FormInput = ({placeholder, icon}: FormInputProps) => {
  return (
    <View style={styles.input}>
      <FontAwesome 
      style={{marginRight: 20}}
      name={icon} 
      size={24} 
      color={Colors.light.neutral[400]} />
      <TextInput
        style={[Title.Section, { color: Colors.light.neutral[400] }]}
        placeholderTextColor={Colors.light.neutral[400]}
        placeholder={placeholder}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  input: {
    width: "80%",
    padding: 5,
    borderBottomWidth: 3,
    borderBottomColor: Colors.light.neutral[400],
    flexDirection: "row",
    alignItems: 'center',
    marginBottom: 20
  },
});
