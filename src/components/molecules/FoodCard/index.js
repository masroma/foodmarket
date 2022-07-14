import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { pic_food1, StarOff, StarOn } from '../../../assets'
import Rating from '../Rating'
import { useNavigation } from '@react-navigation/native'

const FoodCard = ({image, title}) => {
const navigation = useNavigation();
  return (
    <TouchableOpacity activeOpacity={0.7}  style={styles.container} onPress={() => navigation.navigate('FoodDetail')}>
        <View>
                <Image style={styles.image} source={image} />
                <View style={styles.content}>
                <Text style={styles.titleFood}>{title}</Text>
                    <Rating/>
                </View>
            </View>
    </TouchableOpacity>
   
  )
}

export default FoodCard

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 5,
        width:200,
        borderRadius:8,
        overflow:'hidden',
        marginRight:15,
        marginVertical:24
    },
    image:{width:'100%', resizeMode:'cover', height:140,  borderTopLeftRadius:8, borderTopRightRadius:8},
    content:{padding:12},
    titleFood:{fontSize:14, fontFamily:'Poppins-Medium', color:'#020202'},
    rating:{flexDirection:'row', justifyContent:'space-between'},
    star:{flexDirection:'row'}
})