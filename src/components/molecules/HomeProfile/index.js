import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { pic_profile } from '../../../assets'

const HomeProfile = () => {
  return (
    <View>
      <View style={styles.profilecontainer}>
        <View>
          <Text style={styles.appName}>FoodMarket</Text>
          <Text style={styles.appDesc}>let's get some foods</Text>
        </View>
        <Image style={styles.profile} source={pic_profile} />
      </View>
    </View>
  )
}

export default HomeProfile

const styles = StyleSheet.create({
    profilecontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 24,
        backgroundColor: 'white'
      },
      appName: { fontSize: 22, fontFamily: 'Poppins-Medium', color: '#020202' },
      appDesc: { fontSize: 14, fontFamily: 'Poppins-Light', color: '#8D92A3' },
      profile: { width: 50, height: 50, borderRadius: 8 },
})