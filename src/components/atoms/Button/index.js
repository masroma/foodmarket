import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({text, bgcolor = '#FFC700', textcolor = '#020202', onPress}) => {
  return (
   <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
     <View style={styles.container(bgcolor)}>
      <Text style={styles.text(textcolor)}>{text}</Text>
    </View>
   </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    container: (bgcolor) => ({backgroundColor: bgcolor,padding:12, borderRadius:8}),
    text:(textcolor) => ({fontSize:14, fontFamily:'Poppins-Medium', color:textcolor, textAlign:'center'})
})