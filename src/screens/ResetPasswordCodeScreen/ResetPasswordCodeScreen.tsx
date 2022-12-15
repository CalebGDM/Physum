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
// @ts-expect-error
import bgImage from "../../../assets/images/BgImage.png";
import FormInput from "../../components/FormInput";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { Auth } from "aws-amplify";

const ResetPasswordCodeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({defaultValues: {username:route?.params?.username }});
  const onSendCodePressed = async (data) => {
    try {
      await Auth.forgotPassword(data.username)
      navigation.navigate('ResetPassword', {username})
    } catch (e) {
      Alert.alert('Error al enviar código', e.message)
    }
    
  };
  const onLogInPressed = () => {
    navigation.navigate("LogIn");
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <Image style={styles.image} source={bgImage} />

        <View style={styles.form}>
          <Text style={[Forms.Title, styles.section]} numberOfLines={2}>
            Restablecer Contraseña
          </Text>
          <FormInput
            placeholder="Nombre"
            icon="user"
            name="username"
            control={control}
            rules={{
              required: "Sin un nombre no podemos reestablecer tu contraseña",
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

          <CustomButtom
            text="Enviar Código"
            color={Colors.light.primary[500]}
            onPress={handleSubmit(onSendCodePressed)}
          />
          <View style={styles.btnContainer}>
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
    justifyContent: "center",
    marginTop: -10,
  },
});

export default ResetPasswordCodeScreen;
