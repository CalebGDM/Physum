import { StyleSheet } from "react-native"
import Colors from "../../constants/Colors"

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        margin: 10,
        maxWidth: 150
    },
    progress: {
        padding: 10,
        borderRadius: 999,
        width: '100%',
        aspectRatio: 1
    },
    progressBar:{
        position: 'absolute',
        top: 0,
        left: 100,
    },
    circle: {
        width: '100%',
        aspectRatio: 1,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
    },
    image: {
        width: '60%',
        aspectRatio: 1,
        position: 'absolute',
     
    },
    text: {
        marginTop: 10
    },
    percentage: {
        position: 'absolute',
        borderColor: Colors.light.base.white,
        borderWidth: 3,
        bottom: -7,
        right: -20,
        padding: 7,
        borderRadius: 50
    }
})