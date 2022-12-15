import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import React from 'react'
import { GStyles } from '../../constants/GeneralStyles'
import { Title } from '../../constants/Texts'
import Colors from '../../constants/Colors'

const LoadingScreen = () => {
  return (
    <View style={[GStyles.screen, styles.container]}>
        <View style={styles.bar}> 
            <Text style={Title.Secondary}>Cargando</Text>
            <ActivityIndicator size={'large'} color={Colors.light.primary[800]}/>
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.light.primary[500]
    },
    bar: {
        width: '55%',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 100
    }
})

export default LoadingScreen