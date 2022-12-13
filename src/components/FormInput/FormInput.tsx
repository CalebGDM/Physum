import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { Forms, Title } from "../../constants/Texts";
import { FontAwesome } from "@expo/vector-icons";

interface FormInputProps {
    placeholder: string,
    icon: string,
    isPassword?: boolean,
}


const FormInput = ({placeholder, icon, isPassword}: FormInputProps) => {
  return (
    <View style={styles.input}>
      <FontAwesome 
      style={{marginRight: 20}}
      name={icon} 
      size={24} 
      color={Colors.light.neutral[400]} />
      <TextInput
        style={[Forms.Input, { color: Colors.light.neutral[400],  width: '85%' }]}
        placeholderTextColor={Colors.light.neutral[400]}
        placeholder={placeholder}
        secureTextEntry={isPassword}
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
