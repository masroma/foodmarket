import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconArrowBack, IconBackWhite, pic, pic_food1, pic_food2 } from '../../assets'
import { Button, Counter, Rating } from '../../components'
const FoodDetail = ({navigation}) => {
  return (
    <View style={styles.page}>
      <ImageBackground
        source={pic}
        style={styles.cover}
      >
        <TouchableOpacity style={styles.back}>
          <IconBackWhite />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.productContainer}>
          <View>
            <Text style={styles.title}>Cherry JS</Text>
            <Rating />
          </View>
          <Counter/>
        </View>
        <Text style={styles.desc}>Makanan khas Bandung yang cukup sering
          dipesan oleh anak muda dengan pola makan
          yang cukup tinggi dengan mengutamakan
          diet yang sehat dan teratur.</Text>
        <Text style={styles.label}>Ingerdient</Text>
        <Text style={styles.desc}>Seledri, telur, blueberry, madu.</Text>
      </View>
      <View style={styles.footer}>
        <View style={{ flex:1 }}>
          <Text style={styles.labelTotal}>Total Price</Text>
          <Text style={styles.priceTotal}>IDR 1.023.000</Text>
        </View>
        <View style={styles.button}>
          <Button text="Order Now" onPress={() => navigation.navigate('OrderSummary')} />
        </View>
      </View>
    </View>
  )
}

export default FoodDetail

const styles = StyleSheet.create({
  cover: { height: 300, paddingTop: 26, paddingLeft: 20 },
  back: { width: 35, height: 35, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFC700', borderRadius: 30, },
  page:{flex:1},
  content:{
    backgroundColor:'white',
    borderTopLeftRadius:40,
    borderTopRightRadius:40,
    marginTop:-30,
    paddingTop:26,
    paddingHorizontal:16,
    flex:1
  },
  productContainer:{
    flexDirection:'row', justifyContent:'space-between',alignContent:'center', marginBottom:15
  },
  title:{
    fontFamily:'Poppins-Regular',
    fontSize:16,
    color:'#020202'
  },
  desc:{
    fontFamily:'Poppins-Regular',
    fontSize:14,
    color:'#8D92A3',
    marginBottom:15
  },
  label:{
    fontFamily:'Poppins-Regular',
    fontSize:14,
    color:'#020202'
  },
  footer:{
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor:'white',
    paddingVertical:16, paddingHorizontal:16
  },
  button:{
    width:165
  },
  labelTotal:{
    fontFamily:'Poppins-Regular',
    fontSize:13,
    color:'#8D92A3'
  },
  priceTotal:{
    fontFamily:'Poppins-Regular',
    fontSize:18,
    color:'#020202'
  }
})