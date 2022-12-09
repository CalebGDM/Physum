import { View, Text, Image, StyleSheet, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import CustomButtom from "../../components/CustomButtom";
import { NormalText, Title } from "../../constants/Texts";
// @ts-expect-error
import bgImage from "../../../assets/images/BgImage.png";
import FormInput from "../../components/FormInput";

const ResetPasswordCodeScreen = () => {
  return (
    <View style={styles.container} >
      <Image style={styles.image} source={bgImage} />
      
      <View style={styles.form}>
        <Text style={[Title.Principal, styles.section]} numberOfLines={2}>Restablecer Contraseña</Text>
        <FormInput placeholder="Nombre" icon="user" />
        
       
        <CustomButtom text="Confirmar" color={Colors.light.primary[500]} />
        <View style={styles.btnContainer}>
        <TouchableOpacity>
            <Text style={[NormalText.Regular, styles.texto]}>Iniciar Seción</Text>
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
    left: 0
  },
  form: {
    width: "100%",
    height: "100%",
    backgroundColor: Colors.light.base.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 30,
    alignItems: "center",
    marginTop: 100
  },
  title: {
    fontSize: 64,
    color: Colors.light.base.white,
    textAlign: 'center'
  },
  section: {
    fontSize: 48,
    color: Colors.light.primary[500],
    marginBottom: 10,
    textAlign: 'center'
  },
  text:{
    color: Colors.light.neutral[400],
    marginBottom: 10
  },
  texto:{
    color: Colors.light.primary[500],
    marginBottom: 10
  },
  btnContainer:{
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -10
  }
});

export default ResetPasswordCodeScreen;
