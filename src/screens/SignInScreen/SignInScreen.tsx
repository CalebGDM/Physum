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
import { useForm } from "react-hook-form";
import { validatePwd } from "../../utils/ValidatePwd";


const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


const SignInScreen = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const pwd = watch("password");
  
  const onSignUpPressed = () => {
    // REGISTRAR
    navigation.navigate("ConfirmAccount");
  };

  const onSignUpWidthGooglePressed = () => {};

  const onSignUpWidthFacebookPressed = () => {};

  const onSignUpWidthApplePressed = () => {};

  const onLogInPressed = () => {
    navigation.navigate("LogIn");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Image style={styles.image} source={bgImage} />

        <View style={styles.form}>
          <Text style={[Forms.Title, styles.section]}>Crear Cuenta</Text>
          <FormInput
            placeholder="Nombre"
            icon="user"
            name="userName"
            control={control}
            rules={{
              required: "Sin un nombre no podemos crear tu cuenta",
              minLength: {
                value: 3,
                message: "Tu nombre debería tener mínimo 3 letras",
              },
              maxLength: {
                value: 24,
                message: "Tu nombre no debería tener más de 24 letras",
              },
            }}
          />
          <FormInput
            placeholder="Correo electrónico"
            icon="envelope"
            name="email"
            control={control}
            rules={{
              required:
                "Es necesario un correo electrónico para hacer una cuenta",
              pattern: {
                value: EMAIL_REGEX,
                message: "Tu correo no es válidoa",
              },
            }}
          />
          <FormInput
            placeholder="Contraseña"
            icon="lock"
            name="password"
            control={control}
            rules={{
              required: "Necesitas establecer una contraseña",
              validate: (value) => validatePwd(value)
            }}
            isPassword
          />
          <FormInput
            placeholder="Confirmar Contraseña"
            icon="lock"
            name="repeatedPassword"
            control={control}
            rules={{
              required: "Necesitas confirmar tu contraseña",
              validate: (value) =>
                value === pwd || "Tu contraseña no coincidea",
            }}
            isPassword
          />

          <CustomButtom
            text="Registrar"
            color={Colors.light.primary[500]}
            onPress={handleSubmit(onSignUpPressed)}
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
    paddingBottom: 200,
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
