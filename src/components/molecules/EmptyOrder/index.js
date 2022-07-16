import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap } from '../../atoms'
import { IlustrationOrderEmpty } from '../../../assets'
import { useNavigation } from '@react-navigation/native'

const EmptyOrder = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.page}>
    <IlustrationOrderEmpty />
         <Gap height={12}/>
         <Text style={styles.title}>Ouch! Hungry</Text>
         <Text style={styles.subTitle}>Seems like you have not</Text>
         <Text style={styles.subTitle}>ordered any food yet</Text>
         <Gap height={12}/>
         <View style={styles.buttonContainer}>
             <Button text="Find Food" onPress={() => navigation.replace('MainApp')}/>
         </View>
        
 </View>
  )
}

export default EmptyOrder

const styles = StyleSheet.create({
    page:{flex:1, justifyContent:'center',alignItems:'center', backgroundColor:'#FFFFFF'},
    title:{fontSize:20,fontFamily:'Poppins-Regular', color:'#020202'},
    subTitle:{fontSize:14, fontFamily:'Poppins-Light',color:'#8D92A4'},
    buttonContainer:{width:'100%', paddingHorizontal:80,}
})