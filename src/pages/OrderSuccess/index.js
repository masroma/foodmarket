import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IlustrationSuccessOrder } from '../../assets/Ilustration'
import { Button, Gap } from '../../components'

const OrderSuccess = ({navigation}) => {
  return (
    <View style={styles.page}>
      
    <IlustrationSuccessOrder />
         <Gap height={12}/>
         <Text style={styles.title}>Yeay Complate</Text>
         <Text style={styles.subTitle}>Now you are able to order</Text>
         <Text style={styles.subTitle}>Some food as a self rewards</Text>
         <Gap height={12}/>
         <View style={styles.buttonContainer}>
             <Button text="Order Other Food" onPress={() => navigation.replace('MainApp')}/>
         </View>
         <Gap height={10}/>
         <View style={styles.buttonContainer}>
            <Button text="View My Order" bgcolor="#8D92A3" textcolor="white" onPress={() => navigation.navigate('Order')}/>
         </View>
        
 </View>
  )
}

export default OrderSuccess

const styles = StyleSheet.create({
    page:{flex:1, justifyContent:'center',alignItems:'center', backgroundColor:'#FFFFFF'},
    title:{fontSize:20,fontFamily:'Poppins-Regular', color:'#020202'},
    subTitle:{fontSize:14, fontFamily:'Poppins-Light',color:'#8D92A4'},
    buttonContainer:{width:'100%', paddingHorizontal:80,}
})