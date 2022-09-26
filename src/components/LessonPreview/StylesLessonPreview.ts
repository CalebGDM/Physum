import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: 230,
        aspectRatio: 8/10,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginRight: 30,
        justifyContent: 'space-between'
    },
    text: {
        color: 'white',
        textAlign: 'center'
    },
    image: {
        height: '40%',
        aspectRatio: 1/1,
        resizeMode: 'contain',
        marginBottom: 10,

    }
})