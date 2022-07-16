import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconNext, pic_food1 } from '../../../assets';
import Rating from '../Rating';

const ItemListFood = ({ 
  image, 
  onPress, 
  rating, 
  items,
  price,
  type,
  name,
  tanggal,
  status
}) => {


  const renderContent = () => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.subtitle}>IDR {price}</Text>
            </View>
            <Rating rating={rating}/>
          </>
        )
      case 'order-summary':
        return (
          <>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.subtitle}>IDR {price}</Text>
            </View>
            <Text style={styles.items}>{items} items</Text>
          </>
        )

      case 'in-progress':
        return (
          <>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.subtitle}>{items} item . IDR {price}</Text>
            </View>

          </>
        )
      case 'pas-order':
        return (
          <>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.subtitle}>{items} item . IDR {price}</Text>
            </View>
            <View>
              <Text style={styles.date}>{tanggal}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        )
        case 'profile':
          return (
            <>
              <View style={{ flex: 1 }}>
                <Text style={styles.title}>{name}</Text>
              </View>
              <IconNext/>
            
            </>
          )
      default:
        return (
          <>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{name}</Text>
              <Text style={styles.subtitle}>IDR {price}</Text>
            </View>
            <Rating />
          </>
        )
    }
  }
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={type != 'profile' ? styles.container : styles.containerprofile}>
        {type !='profile' ? <Image source={image} style={styles.image} /> :'' }
        { renderContent() }
      </View>
    </TouchableOpacity>
  )
}

export default ItemListFood

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    // paddingHorizontal: 24,
    paddingVertical: 15,
    alignItems: 'center',
  },
  containerprofile: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 10,
    alignItems: 'center',
  },
  image: { width: 60, height: 60, overflow: 'hidden', borderRadius: 8, marginRight: 12 },
  title: { fontFamily: 'Poppins-regular', fontSize: 16, color: '#020202' },
  subtitle: { fontFamily: 'Poppins-Light', fontSize: 13, color: '#8D92A3' },
  items: { fontSize: 13, fontFamily: 'Poppins-Regular', color: '#8D92A3' },
  date:{fontSize:10, fontFamily:'Poppins-Regular', color:'#020202'},
  status:{fontSize:10, fontFamily:'Poppins-Regular', color:'#D9435E'},
})