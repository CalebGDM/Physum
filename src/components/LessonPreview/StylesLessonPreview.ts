import { Dimensions, StyleSheet } from "react-native";

const width = Dimensions.get('window').width

export const styles = StyleSheet.create({
    container: {
        width: width/1.6,
        aspectRatio: 3/4,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 15,
        alignItems: 'center',
        marginRight: 30,
        justifyContent: 'space-between',
        marginBottom: 10,
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