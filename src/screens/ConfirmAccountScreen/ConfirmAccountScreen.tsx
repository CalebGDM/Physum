import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import CustomButtom from "../../components/CustomButtom";
import { Forms, NormalText, Title } from "../../constants/Texts";
// @ts-ignore
import bgImage from "../../../assets/images/BgImage.png";
import FormInput from "../../components/FormInput";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const ConfirmAccountScreen = () => {
  const navigation = useNavigation();
  const route = useRoute()

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({defaultValues: {username: route?.params?.username }});
  const username = watch('username')
  const onConfirmAccountPressed = async (data) => {
    try {
      await Auth.confirmSignUp(data.username, data.code)
      navigation.navigate('LogIn')
      
    } catch (e) {
      Alert.alert('Error al confirmar cuenta', e.message)
    }
  };

  const onReSendCodePressed = async () => {
    try {
      await Auth.resendSignUp(username)
      Alert.alert('Código reenviado', 'El código de verificación fué reenviado a tu correo electrónico.')
    } catch (e) {
      Alert.alert('Error al reenviar código de verificación', e.message)
    }
  };

  const onLogInPressed = () => {
    navigation.navigate("LogIn");
  };
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
          <FormInput
            placeholder="Nombre de usuario"
            icon="user"
            name="username"
            control={control}
            rules={{
              required:
                "Sin un nombre de usuario no podemos confirmar tu cuenta",
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
            placeholder="Código de verificación"
            icon="lock"
            name="code"
            control={control}
            rules={{ required: "Necesitas tu códgio para confirmar tu cuenta" }}
          />

          <CustomButtom
            text="Confirmar"
            color={Colors.light.primary[500]}
            onPress={handleSubmit(onConfirmAccountPressed)}
          />
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
