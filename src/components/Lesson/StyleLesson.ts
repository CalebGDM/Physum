import {Dimensions, StyleSheet} from 'react-native'
const width = Dimensions.get('window').width
export const styles = StyleSheet.create({
    container: {
        
        maxWidth: width/2,
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