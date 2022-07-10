import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { IconArrowBack } from '../../../assets'

const Header = ({title, subtitle, onBack}) => {
  return (
    <View style={styles.container}>
      {
        onBack && (
          <TouchableOpacity style={styles.back}>
            <IconArrowBack/>
          </TouchableOpacity>
        )
      }
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subtitle}</Text>
      </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  container:{backgroundColor:'white', paddingHorizontal:24,paddingTop:30,paddingBottom:24, flexDirection:'row', alignItems:'center'},
  back:{padding:16, marginRight:16, marginLeft:-10},
  title:{fontFamily:'Poppins-Medium', fontSize:22,color:'#020202'},
  subTitle:{fontSize:14, fontFamily:'Poppins-Light',color:'#8D92A4'},
})