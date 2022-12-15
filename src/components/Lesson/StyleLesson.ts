import {Dimensions, Platform, StyleSheet} from 'react-native'
const width = Dimensions.get('screen').width
export const styles = StyleSheet.create({
    container: {
        maxWidth: Platform.OS == 'ios' ? width / 1.8 : width/2.2,
        height: 200,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 15,
        alignItems: 'center',
        marginRight: 15,
        justifyContent: 'center',
        marginBottom: 15
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