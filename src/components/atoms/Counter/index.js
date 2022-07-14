import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BtnAdd, BtnMin } from '../../../assets'

const Counter = () => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <BtnMin />
            </TouchableOpacity>
            <Text style={styles.text}>14</Text>
            <TouchableOpacity>
                <BtnAdd />
            </TouchableOpacity>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    text:{
        fontSize:16,
        fontFamily:'Poppins-Regular',
        color:'#020202',
        marginHorizontal:10
    }
})