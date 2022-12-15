import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { Forms, NormalText, Title } from "../../constants/Texts";
import { FontAwesome } from "@expo/vector-icons";
import { onChange } from "react-native-reanimated";
import { Controller } from "react-hook-form";
import { valuesEqual } from "@aws-amplify/datastore/lib-esm/util";

interface FormInputProps {
  placeholder: string;
  icon: string;
  isPassword?: boolean;
  name: string;
  control: any;
  rules?: {};
  isEmail?: boolean;
}

const FormInput = ({
  placeholder,
  icon,
  isPassword,
  name,
  control,
  rules = {},
  isEmail,
}: FormInputProps) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onBlur, onChange },
        fieldState: { error },
      }) => (
        <>
          <View style={[styles.input, error && {borderBottomColor: Colors.light.error}]}>
            <FontAwesome
              style={{ marginRight: 20 }}
              name={icon}
              size={24}
              color={error ? Colors.light.error : Colors.light.neutral[400]}
            />
            <TextInput
              style={[
                Forms.Input,
                { color: Colors.light.neutral[400], width: "85%" },
              ]}
              placeholderTextColor={Colors.light.neutral[400]}
              placeholder={placeholder}
              secureTextEntry={isPassword}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              autoCapitalize={isEmail ? 'none': 'sentences'}
            />
          </View>
          {
            error && <Text style={[NormalText.Bold, styles.error]}>{error.message || 'Error'}</Text>
          }
        </>
      )}
    />
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
    alignItems: "center",
    marginBottom: 20,
  },
  error:{
    color: Colors.light.error, 
    textAlign: 'left',
    width: '75%',
    marginBottom: 10,
    marginTop: -10
  }

});
