import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, ItemValue } from '../../components'
import ItemListFood from '../../components/molecules/ItemListFood'
import { pic_food1 } from '../../assets'

const OrderSummary = ({navigation}) => {
  return (
    <View>
      <Header title="Payment" subtitle="You deserve better meal" onBack={() => {}}/>
        <View style={styles.content}>
          <Text style={styles.label}>Item Order</Text>
          <Gap height={8}/>
          <ItemListFood image={pic_food1} items={14}/>
          <Text  style={styles.label}>Details Transaction</Text>
          <Gap height={8}/>
          <ItemValue label="Cherry Healt" value="IDR 10.000.000"/>
          <ItemValue label="Driver" value="IDR 45.000"/>
          <ItemValue label="Tax 10%" value="IDR 1000.000"/>
          <ItemValue label="Total Price" value="IDR 11.045.000"/>
        </View>
        <Gap height={25}/>
        <View style={styles.content}>  
          <Text  style={styles.label}>Delivered to</Text>
          <Gap height={8}/>
          <ItemValue label="Name" value="Mas Roma"/>
          <ItemValue label="Hp" value="082299995502"/>
          <ItemValue label="Address" value="Jl Sangego Raya"/>
          <ItemValue label="No " value="17"/>
          <ItemValue label="City" value="Jakarta Timur"/>
        </View>
        <Gap height={25}/>
        <View style={styles.button}>
          <Button text="Checkout Now" onPress={() => navigation.replace('OrderSuccess')}/>
        </View>
    </View>
  )
}

export default OrderSummary

const styles = StyleSheet.create({
  content:{
    backgroundColor:'white',
    paddingHorizontal:24,
    paddingVertical:16
  },
  label:{
    fontFamily:'Poppins-regular',
    fontSize:14,
    color:'#020202'
  },
  button:{
    paddingHorizontal:24
  }
})