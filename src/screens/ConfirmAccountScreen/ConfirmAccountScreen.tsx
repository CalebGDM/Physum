import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import CustomButtom from "../../components/CustomButtom";
import { Forms, NormalText, Title } from "../../constants/Texts";
// @ts-ignore
import bgImage from "../../../assets/images/BgImage.png";
import FormInput from "../../components/FormInput";
import { useNavigation } from "@react-navigation/native";

const ConfirmAccountScreen = () => {
  const navigation = useNavigation()
  const onConfirmAccountPressed = () => {
    // CONFIRM
    navigation.navigate('Root')
  }

  const onReSendCodePressed = () => {
    
  }
  
  const onLogInPressed = () => {
    navigation.navigate('LogIn')
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={bgImage} />

        <View style={styles.form}>
          <Text style={[Forms.Title, styles.section]} numberOfLines={2}>
            Confirma tu Cuenta
          </Text>
          <FormInput placeholder="Código de verificación" icon="lock" />

          <CustomButtom text="Confirmar" color={Colors.light.primary[500]} onPress={onConfirmAccountPressed}/>
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={onReSendCodePressed}>
              <Text style={[NormalText.Regular, styles.text]}>
                Reenviar código
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onLogInPressed}>
              <Text style={[NormalText.Regular, styles.texto]}>
                Iniciar Seción
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.primary[500],
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  form: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.light.base.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 30,
    alignItems: "center",
    marginTop: 100,
  },
  section: {
    color: Colors.light.primary[500],
    marginBottom: 10,
    textAlign: "center",
  },
  text: {
    color: Colors.light.neutral[400],
    marginBottom: 10,
  },
  texto: {
    color: Colors.light.primary[500],
    marginBottom: 10,
  },
  btnContainer: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -10,
  },
});

export default ConfirmAccountScreen;
