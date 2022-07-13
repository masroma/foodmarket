import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { pic_food1, pic_food2, pic_food3, pic_food4 } from '../../assets'
import { FoodCard, Gap, HomeProfile, HomeTabSection } from '../../components'

const Home = () => {
  return (
    <ScrollView style={{flex: 1}}  contentContainerStyle={{flex:1}}>
        <View style={styles.page}>
        <HomeProfile />
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.foodcardContainer} >
              <Gap width={24} />
              <FoodCard image={pic_food1} title="nasi goreng ambarwa jateng sumedang " />
              <FoodCard image={pic_food2} title="nasi goreng " />
              <FoodCard image={pic_food3} title="nasi goreng ambarwa jateng" />
              <FoodCard image={pic_food4} title="nasi goreng ambarwa jateng" />
            </View>
          </ScrollView>
        </View>
        <View style={styles.tabContainer}>
          <HomeTabSection />
        </View>
      </View>
    </ScrollView>
  );
}

export default Home

const styles = StyleSheet.create({
  page:{flex:1 },
  foodcardContainer: { flexDirection: 'row',  marginVertical: 24 },
  tabContainer:{flex:1}
})