import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { pic_food1, StarOff, StarOn } from '../../../assets'

const FoodCard = ({image, title}) => {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={image} />
        <View style={styles.content}>
        <Text style={styles.titleFood}>{title}</Text>
            <View style={styles.rating}>
                <View style={styles.star}>
                    <StarOn/>
                    <StarOn/>
                    <StarOn/>
                    <StarOn/>
                    <StarOff/>
                </View>
                <Text>4.5</Text>
            </View>
        </View>
    </View>
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