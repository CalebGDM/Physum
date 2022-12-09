import { View, Text, Image, StyleSheet, Platform } from "react-native";
import React from "react";
import { GStyles } from "../../constants/GeneralStyles";
import Colors from "../../constants/Colors";
import bgImage from "../../../assets/images/BgImage.png";
import { NormalText, Title } from "../../constants/Texts";
import CustomButtom from "../../components/CustomButtom";

const StartScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={bgImage} />
      <View style={styles.titleContainer}>
        <Text style={[Title.Principal, styles.title]}>PHYSUM</Text>
        <Text
          style={[
            NormalText.Bold,
            { color: Colors.light.base.white, textAlign: "center" },
          ]}
        >
          Aprender física nunca fué tan fácil
        </Text>
      </View>
      <CustomButtom text="Empezemos" color={Colors.light.base.white} textColor={Colors.light.primary[500]}/>
      <CustomButtom text="Ya tengo una cuenta" color={Colors.light.base.white} outline/>
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
    marginBottom: Platform.OS == 'ios' ? 350 : 250
  },
  image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  title: {
    fontSize: 64,
    color: Colors.light.base.white,
  },
});
export default StartScreen;
