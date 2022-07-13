import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, TxtInput } from '../../components'

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
        <Header title="Sign In" subtitle="Find Your Beast Ever Meal"/>
        <View style={styles.container}>
            <TxtInput label="email" placeholder="type your email"/>
            <Gap height={16}/>
            <TxtInput label="password" placeholder="type your password"/>
            <Gap height={24} />
            <Button text="Sig In" bgcolor="#FFC700" textcolor="#020202"  onPress={() => navigation.navigate('MainApp')}/>
            <Gap height={12}/>
            <Button text="Create new acoount" bgcolor="#8D92A3" textcolor="white" onPress={() => navigation.navigate('SignUp')}/>
        </View>
    </View>
  )
}

export default SignIn

const styles = StyleSheet.create({
    page:{flex:1},
    container:{backgroundColor:'white', paddingHorizontal:24, paddingVertical:26, marginTop:24, flex:1, }
})