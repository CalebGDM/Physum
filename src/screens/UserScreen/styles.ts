import { StyleSheet } from "react-native"
import Colors from "../../constants/Colors"

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 30
    },
    image: {
        width: 110,
        aspectRatio: 1,
        borderRadius: 50,
        marginLeft: 20,
    },
    userName:{
        color: Colors.light.primary[500],
        marginLeft: 40
    }
})