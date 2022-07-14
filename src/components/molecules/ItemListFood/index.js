import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { pic_food1 } from '../../../assets';
import Rating from '../Rating';

const ItemListFood = ({image}) => {
  return (
    <View>
       <View style={{
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 15,
        alignItems:'center',
      }}>
        <Image source={image} style={{ width: 60, height: 60, overflow: 'hidden', borderRadius: 8, marginRight: 12 }} />
        <View style={{ flex:1 }}>
          <Text style={{ fontFamily:'Poppins-regular', fontSize:16, color:'#020202' }}>Soup Djanda</Text>
          <Text  style={{ fontFamily:'Poppins-Light', fontSize:13, color:'#8D92A3' }}>IDR 289.000</Text>
        </View>
        <Rating />
      </View>
    </View>
  )
}

export default ItemListFood

const styles = StyleSheet.create({})