import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import CustomButtom from "../../components/CustomButtom";
import { NormalText, Title } from "../../constants/Texts";
import bgImage from "../../../assets/images/BgImage.png";
import FormInput from "../../components/FormInput";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={bgImage} />
      <View style={styles.titleContainer}>
        <Text style={[Title.Principal, styles.title]}>PHYSUM</Text>
      </View>
      <View style={styles.form}>
        <Text style={[Title.Principal, styles.section]}>Iniciar Seción</Text>
        <FormInput placeholder="Nombre o correo" icon="user" />
        <FormInput placeholder="Contraseña" icon="lock" />
        <TouchableOpacity>
            <Text style={[NormalText.Regular, styles.text]}>Olvidé mi contraseña</Text>
        </TouchableOpacity>
        <CustomButtom text="Empezemos" color={Colors.light.primary[500]} />
        
        <Text style={[NormalText.Regular, styles.text]}>Puedes intentar con...</Text>

        <CustomButtom
          text="Google"
          color={"#FF5530"}
          textColor={Colors.light.base.white}
          style={{ marginBottom: 10 }}
        />
       
        <CustomButtom
          text="Facebook"
          color={"#3076FF"}
          textColor={Colors.light.base.white}
          style={{ marginBottom: 10 }}
        />
        <CustomButtom
          text="Apple"
          color={"#2C2924"}
          textColor={Colors.light.base.white}
          style={{ marginBottom: 15 }}
        />

        <TouchableOpacity>
            <Text style={[NormalText.Regular, styles.text]}>¿No tienes cuenta? <Text style={[NormalText.Light, {color: Colors.light.primary[500]}]}>Crea una</Text></Text>
        </TouchableOpacity>
      </View>
    </View>
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
  },
  title: {
    fontSize: 64,
    color: Colors.light.base.white,
  },
  section: {
    fontSize: 48,
    color: Colors.light.primary[500],
    marginBottom: 10,
  },
  text:{
    color: Colors.light.neutral[400],
    marginBottom: 10
  }
});

export default SignUpScreen;
