import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import CustomButtom from "../../components/CustomButtom";
import { Forms, NormalText, Title } from "../../constants/Texts";
// @ts-expect-error
import bgImage from "../../../assets/images/BgImage.png";
import FormInput from "../../components/FormInput";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const navigation = useNavigation()
  const onSignUpPressed = () => {
    // REGISTRAR
    navigation.navigate('ConfirmAccount')
  }


  const onSignUpWidthGooglePressed= () => {

  }
  
  const onSignUpWidthFacebookPressed = () => {

  }


  const onSignUpWidthApplePressed = () => {

  }

  const onLogInPressed = () => {
    navigation.navigate('LogIn')
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={bgImage} />

        <View style={styles.form}>
          <Text style={[Forms.Title, styles.section]}>Crear Cuenta</Text>
          <FormInput placeholder="Nombre" icon="user" />
          <FormInput placeholder="Correo electrónico" icon="envelope" />
          <FormInput placeholder="Contraseña" icon="lock" />
          <FormInput placeholder="Confirmar Contraseña" icon="lock" />

          <CustomButtom text="Registrar" color={Colors.light.primary[500]} onPress={onSignUpPressed}/>

          <Text style={[NormalText.Regular, styles.text]}>
            Puedes intentar con...
          </Text>

          <CustomButtom
            text="Google"
            color={"#FF5530"}
            textColor={Colors.light.base.white}
            // @ts-expect-error
            style={{ marginBottom: 10 }}
            onPress={onSignUpWidthGooglePressed}
          />

          <CustomButtom
            text="Facebook"
            color={"#3076FF"}
            textColor={Colors.light.base.white}
            // @ts-expect-error
            style={{ marginBottom: 10 }}
            onPress={onSignUpWidthFacebookPressed}
          />
          {Platform.OS == "ios" ? (
            <CustomButtom
              text="Apple"
              color={"#2C2924"}
              textColor={Colors.light.base.white}
              // @ts-expect-error
              style={{ marginBottom: 15 }}
              onPress={onSignUpWidthApplePressed}
            />
          ) : null}

          <TouchableOpacity onPress={onLogInPressed}>
            <Text style={[NormalText.Regular, styles.text]}>
              ¿Ya tienes cuenta?{" "}
              <Text
                style={[NormalText.Light, { color: Colors.light.primary[500] }]}
              >
                Inicia Sesion
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.primary[500],
  },
  titleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    marginBottom: 30,
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  form: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.light.base.white,
    borderRadius: 50,
    paddingTop: 30,
    alignItems: "center",
    marginTop: 100,
    paddingBottom: 60,
  },
  section: {
    color: Colors.light.primary[500],
    marginBottom: 10,
  },
  text: {
    color: Colors.light.neutral[400],
    marginBottom: 10,
  },
});

export default SignInScreen;
