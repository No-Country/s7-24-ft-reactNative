import { View, Image, Text, StyleSheet } from 'react-native'
import React from 'react'

export const LogoProfile = () => {
  return (
    <View style={{display:'flex', flexDirection:'row', marginVertical: 25, paddingLeft:25 }}>
        <Image style={styles.icon} source={require('../assets/icons/Ellipse.svg')}/>
      <Text style={{paddingHorizontal:10, fontSize:16, display: 'flex', alignItems:'center'}}>Hola, Lucas!</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    icon: {
     width: 30,
     height: 30,
   },
 });