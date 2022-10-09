import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {
        width: width/1.7,
        aspectRatio: 8/10,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 20,
        alignItems: 'center',
        marginRight: 30,
        justifyContent: 'space-between',
        marginBottom: -100
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