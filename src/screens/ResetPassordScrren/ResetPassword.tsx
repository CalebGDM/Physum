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
import { useNavigation } from "@react-navigation/native";
import { useForm } from "react-hook-form";
import { validatePwd } from "../../utils/ValidatePwd";

const ConfirmAccountScreen = () => {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();
  const pwd = watch('newPassword')
  const onReSetPasswordPressed = () => {
    // Reestablecer contraseña
    Alert.alert(
      "Se reestableció correctamente tu contraseña",
      "Se ha reestablecido correctamente tu nueva contraseña, intta iniciar sesión",
      [
        {
          text: "Tal vez luego",
          style: "destructive",
        },
        {
          text: "Iniciar Sesión",
          onPress: () => navigation.navigate('LogIn'),
          style: "default",
        },
      ]
    );
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
          name="newPassword"
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
              value === pwd || "Tu contraseña no coincidea",
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
