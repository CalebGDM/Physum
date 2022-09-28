import {StyleSheet} from 'react-native'
export const styles = StyleSheet.create({
    container: {
        minWidth: 70,
        alignSelf: 'flex-start',
        height: 230,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 15,
        alignItems: 'center',
        marginRight: 15,
        justifyContent: 'space-between',
        marginBottom: 20
    },
    text: {
        color: 'white',
        textAlign: 'center',
    },
    image: {
        height: '40%',
        aspectRatio: 1/1,
        resizeMode: 'contain',
        marginTop: -30
    }
})