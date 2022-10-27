import { Dimensions, StyleSheet, useWindowDimensions } from "react-native";
import { getTheme } from "../components/Themed";
import Colors from "./Colors";
const height = Dimensions.get('screen').height
export const GStyles = StyleSheet.create({
    screen:{
        flex: 1,
        paddingHorizontal: 5, 
        paddingTop: 10,
    }
})