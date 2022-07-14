import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { pic_food1 } from '../../../assets';
import Rating from '../Rating';

const ItemListFood = ({image}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} >
       <View style={styles.container}>
        <Image source={image} style={styles.image} />
        <View style={{ flex:1 }}>
          <Text style={styles.title}>Soup Djanda</Text>
          <Text  style={styles.subtitle}>IDR 289.000</Text>
        </View>
        <Rating />
      </View>
    </TouchableOpacity>
  )
}

export default ItemListFood

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 15,
    alignItems:'center',
  },
  image:{ width: 60, height: 60, overflow: 'hidden', borderRadius: 8, marginRight: 12 },
  title:{ fontFamily:'Poppins-regular', fontSize:16, color:'#020202' },
  subtitle:{ fontFamily:'Poppins-Light', fontSize:13, color:'#8D92A3' }

})