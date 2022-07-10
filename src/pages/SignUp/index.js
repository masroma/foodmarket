import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, TxtInput } from '../../components'

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Sign Up" subtitle="Register and eat" onBack={() => {}}/>
      <View style={styles.container}>
           <View style={styles.photo}>
            <View style={styles.borderPhoto}>
                    <View style={styles.photoContainer}>
                        <Text style={styles.addPhoto}>Add Photo</Text>
                    </View>
                </View>
           </View>
            <TxtInput label="Full Name" placeholder="type your full name"/>
            <Gap height={16}/>
            <TxtInput label="Email" placeholder="type your email"/>
            <Gap height={16}/>
            <TxtInput label="Password" placeholder="type your password"/>
            <Gap height={24} />
            <Button text="Continue" bgcolor="#FFC700" textcolor="#020202"  onPress={() => navigation.navigate('SignUpAddress')}/>
        </View>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    page:{flex:1},
    container:{backgroundColor:'white', paddingHorizontal:24, paddingVertical:26, marginTop:24, flex:1 },
    addPhoto:{fontSize:14, fontFamily:'Poppins-Light', color:'#8D92A3', textAlign:'center'},
    photoContainer:{width:90, height:90,borderRadius:90, backgroundColor:'#F0F0F0', padding:24},
    borderPhoto:{borderWidth:1, borderColor:'#8D92A3', width:110, height:110, borderRadius:110, borderStyle:'dashed', justifyContent:'center', alignItems:'center'},
    photo:{alignItems:'center', marginTop:26, marginBottom:16}
})