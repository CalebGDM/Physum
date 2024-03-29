import { View, Text, Image } from 'react-native'
import React from 'react'
import { GStyles } from '../../constants/GeneralStyles'
import Colors from '../../constants/Colors'
import { styles } from './styles'
import { Title } from '../../constants/Texts'
import SectionSign from '../../components/SectionSign'
import CustomButtom from '../../components/CustomButtom'
import { Auth } from 'aws-amplify'

const UserScreen = () => {
  const onLogOutPressed =  () => {
    Auth.signOut()
  }
  return (
    <View style={[GStyles.screen, {backgroundColor: Colors.light.background}]}>
        <View style={styles.container}>
            <Image style={styles.image} source={{uri: 'https://i0.wp.com/satelitenorte.com.mx/wp-content/uploads/2020/07/personalidad.jpg?fit=1200%2C930&ssl=1'}}/>
            <Text style={[Title.Principal,styles.userName]}>Juanito</Text>
        </View>
        <CustomButtom text='Cerrar Sesión' color={Colors.light.primary[500]} onPress={onLogOutPressed}/>
        <SectionSign label='Estadísticas'/>
      
    </View>
  )
}

export default UserScreen