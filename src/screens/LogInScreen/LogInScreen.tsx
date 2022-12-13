import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import CustomButtom from "../../components/CustomButtom";
import { Forms, NormalText, Title } from "../../constants/Texts";
// @ts-expect-error
import bgImage from "../../../assets/images/BgImage.png";
import FormInput from "../../components/FormInput";
import { useNavigation } from "@react-navigation/native";

const LogInScreen = () => {
  const navigation = useNavigation();
  const onSingUpPressed = () => {
    // SIGNUP
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate('ResetPasswordCode')
  };
  const onSignUpWidthGooglePressed = () => {};
  const onSignUpWidthFacebookPressed = () => {};
  const onSignUpWidthApplePressed = () => {};
  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={bgImage} />
        <View style={styles.titleContainer}>
          <Text style={[Title.MegaTitle, styles.title]}>PHYSUM</Text>
        </View>

        <View style={styles.form}>
          <Text style={[Forms.Title, styles.section]}>Iniciar Sesión</Text>
          <FormInput placeholder="Nombre o correo" icon="user" />
          <FormInput placeholder="Contraseña" icon="lock" isPassword />
          <TouchableOpacity onPress={onForgotPasswordPressed}>
            <Text style={[NormalText.Regular, styles.text]}>
              Olvidé mi contraseña
            </Text>
          </TouchableOpacity>
          <CustomButtom
            text="Iniciar Sesión"
            color={Colors.light.primary[500]}
            onPress={onSingUpPressed}
          />

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

          <TouchableOpacity onPress={onSignInPressed}>
            <Text style={[NormalText.Regular, styles.text]} numberOfLines={2}>
              ¿No tienes cuenta?{" "}
              <Text
                style={[NormalText.Light, { color: Colors.light.primary[500] }]}
              >
                Crea una
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
    left: 0,
    top: 0,
  },
  form: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.light.base.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 30,
    alignItems: "center",
    paddingBottom: 50,
  },
  title: {

    color: Colors.light.base.white,
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

export default LogInScreen;
