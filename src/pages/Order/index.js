import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { EmptyOrder, Header, OrderTabSection } from '../../components'

const Order = () => {
  const [isEmpty] = useState(false);
  return (
    <View style={styles.page}>
      <Header title ="Your Order" subtitle="wait for the best meal"/>
      {isEmpty ?  <EmptyOrder/> : <OrderTabSection/>}
     
    </View>
  )
}

export default Order

const styles = StyleSheet.create({
  page:{
    flex:1,
    backgroundColor:'white'
  }
})