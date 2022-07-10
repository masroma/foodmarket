import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, Select, TxtInput } from '../../components'

const SignUpAddress = ({navigation}) => {
  return (
    <View style={styles.page}>
    <Header title="Address" subtitle="Make sure is valid" onBack={() => {}}/>
    <View style={styles.container}>
         
          <TxtInput label="Phone No" placeholder="type your number phone"/>
          <Gap height={16}/>
          <TxtInput label="Address" placeholder="type your Address"/>
          <Gap height={16}/>
          <TxtInput label="House No" placeholder="type your number house"/>
          <Gap height={16}/>
          <Select label="Kota"/>
          <Gap height={24} />
          <Button text="Continue" bgcolor="#FFC700" textcolor="#020202" onPress={() => navigation.replace('SignUpSuccess')}/>
      </View>
  </View>
  )
}

export default SignUpAddress

const styles = StyleSheet.create({
    page:{flex:1},
    container:{backgroundColor:'white', paddingHorizontal:24, paddingVertical:26, marginTop:24, flex:1 },
})