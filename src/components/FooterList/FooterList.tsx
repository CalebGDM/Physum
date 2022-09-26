import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '../../constants/Colors'
import { getTheme } from '../Themed'
import { NormalText } from '../../constants/Texts'

const FooterList = () => {
    const [isCliked, setIsClicked] = useState(false) 
    const theme = getTheme()

  return (
    <Pressable style={[styles.container, {borderColor: Colors[theme].primary[400]},isCliked ?{backgroundColor: Colors[theme].primary[400]} : null]} onPressIn={() => setIsClicked(true)} onPressOut={() => setIsClicked(false)}>
      <Text style={[isCliked ? {color: Colors[theme].primary[900]} : {color: Colors[theme].primary[400]}, NormalText.Regular]}>Ver más...</Text>
    </Pressable>
  )
}

export default FooterList

const styles = StyleSheet.create({
    container: {
        width: 120,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        marginTop: 100,
        borderWidth: 2,
        marginRight: 20
    }
})