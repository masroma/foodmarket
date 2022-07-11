import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { pic_food1, pic_food2, pic_food3, pic_food4, pic_profile } from '../../assets'
import { FoodCard, Gap } from '../../components'

const Home = () => {
  return (
    <View>
      <View style={styles.profilecontainer}>
        <View>
          <Text style={styles.appName}>FoodMarket</Text>
          <Text style={styles.appDesc}>let's get some foods</Text>
        </View>
        <Image style={styles.profile} source={pic_profile}/>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.foodcardContainer} >
          <Gap width={24}/>
          <FoodCard image={pic_food1}/>
          <FoodCard image={pic_food2}/>
          <FoodCard image={pic_food3}/>
          <FoodCard image={pic_food4}/>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  profilecontainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:24,
    paddingTop:32,
    paddingBottom:24,
    backgroundColor:'white'
  },
  appName:{fontSize:22, fontFamily:'Poppins-Medium', color:'#020202'},
  appDesc:{fontSize:14, fontFamily:'Poppins-Light', color:'#8D92A3'},
  profile:{width:50, height:50, borderRadius:8},
  foodcardContainer:{flexDirection:'row'}
})