import { View, Text, Image, StyleSheet, Platform } from "react-native";
import React from "react";
import { GStyles } from "../../constants/GeneralStyles";
import Colors from "../../constants/Colors";
// @ts-expect-error
import bgImage from "../../../assets/images/BgImage.png";
import { NormalText, Title } from "../../constants/Texts";
import CustomButtom from "../../components/CustomButtom";
import { useNavigation } from "@react-navigation/native";

const StartScreen = () => {
  const navigation = useNavigation()
  const onStartPressed = () => {
    navigation.navigate('SignIn')
  }
  const onIHaveAccountPressed = () => {
    navigation.navigate('LogIn')
  }
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={bgImage} />
      <View style={styles.titleContainer}>
        <Text style={[Title.MegaTitle, styles.title]}>PHYSUM</Text>
        <Text
          style={[
            Title.Item,
            { color: Colors.light.base.white, textAlign: "center" },
          ]}
        >
          Aprender física y matemáticas nunca fué tan fácil
        </Text>
      </View>
      <CustomButtom text="Empezemos" color={Colors.light.base.white} textColor={Colors.light.primary[500]} onPress={onStartPressed}/>
      <CustomButtom text="Ya tengo una cuenta" color={Colors.light.base.white} outline onPress={onIHaveAccountPressed}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.primary[500],
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer:{
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: Platform.OS == 'ios' ? 350 : 200,

  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.5,
    
  },
  title: {
    color: Colors.light.base.white,
  },
});
export default StartScreen;
