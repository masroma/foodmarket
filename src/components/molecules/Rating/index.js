import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StarOff, StarOn } from '../../../assets'

const Rating = () => {
  return (
    <View>
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
  )
}

export default Rating

const styles = StyleSheet.create({
    rating:{flexDirection:'row', justifyContent:'space-between'},
    star:{flexDirection:'row'}
})