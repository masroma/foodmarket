import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const TxtInput = ({label, placeholder, ...restProps}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} {...restProps} />
    </View>
  )
}

export default TxtInput

const styles = StyleSheet.create({
  label:{fontSize:16, fontFamily:'Poppins-Regular', color:'#020202'},
  input:{borderWidth:1, borderColor:'#020202',borderRadius:8, padding:10}
})