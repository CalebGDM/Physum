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
import { validatePwd } from "../../utils/ValidatePwd";
import { Auth } from "aws-amplify";

const ConfirmAccountScreen = () => {
  const navigation = useNavigation();
  const route = useRoute()
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm({defaultValues: {username: route?.params?.username}});
  const pwd = watch('password')
  const onReSetPasswordPressed =  async ( data ) => {
    // Reestablecer contraseña
    try {
      await Auth.forgotPasswordSubmit(data.username, data.code, data.password)
      navigation.navigate('LogIn')
    } catch (e) {
      Alert.alert('Error al reestablecer contraseña', e.message)
    }
  };

  const onReSendCodePressed = () => {};

  const onLogInPressed = () => {
    navigation.navigate('LogIn')
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={bgImage} />

      <View style={styles.form}>
        <Text style={[Forms.Title, styles.section]} numberOfLines={2}>
          Reestablecer Contraseña
        </Text>
        <FormInput
            placeholder="Nombre de usuario"
            icon="user"
            name="username"
            control={control}
            rules={{
              required: "Sin un nombre de usuario no podemos crear tu cuenta",
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
          control={control}
          name="code"
          rules={{
            required: 'Necesitas tu código para reestablecer tu contraseña'
          }}
        />
        <FormInput
          placeholder="Nueva contraseña"
          icon="lock"
          name="password"
          control={control}
          rules={{
            required: 'Sin tu contraseña no puedes iniciar sesión',
            validate: (value) => validatePwd(value)
           }}
           isPassword
        />
        <FormInput
          placeholder="Confirmar contraseña"
          icon="lock"
          name="newPAsswordRepeat"
          control={control}
          rules={{
            required: "Necesitas confirmar tu contraseña",
            validate: (value) =>
              value === pwd || "Tu contraseña no coinciden",
          }}
          isPassword
        />

        <CustomButtom
          text="Reestablecer"
          color={Colors.light.primary[500]}
          onPress={handleSubmit(onReSetPasswordPressed)}
        />
        <View style={styles.btnContainer}>
          <TouchableOpacity>
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
