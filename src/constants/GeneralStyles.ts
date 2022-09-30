import { Dimensions, StyleSheet, useWindowDimensions } from "react-native";
import { getTheme } from "../components/Themed";
import Colors from "./Colors";
const height = Dimensions.get('screen').height
export const styles = StyleSheet.create({
    screen:{
        height: height,
        paddingHorizontal: 15, 
        paddingTop: 20,
    }
})