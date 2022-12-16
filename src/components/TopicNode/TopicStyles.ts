import { StyleSheet } from "react-native"

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
        width: '55%',
        aspectRatio: 1,
        position: 'absolute',
        top: 25,
        
    },
    text: {
        marginTop: 10
    }
})