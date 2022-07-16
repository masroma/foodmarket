import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions, Dimensions } from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { pic_food1, pic_food2, pic_food3, pic_food4 } from '../../../assets';
import ItemListFood from '../ItemListFood';
import { useNavigation } from '@react-navigation/native'



const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingTop: 10, flex:1, paddingHorizontal:24}}>
      <ItemListFood rating={4.3} name="sate padang" type="product" price={20000}  image={pic_food1} onPress={() => navigation.navigate('FoodDetail')}/>
      <ItemListFood rating={4.1} name="nasi goreng" type="product" price={20000} image={pic_food2} onPress={() => navigation.navigate('FoodDetail')}/>
      <ItemListFood rating={4.4} name="sop iga" type="product" price={20000} image={pic_food3} onPress={() => navigation.navigate('FoodDetail')}/>
      <ItemListFood rating={4.5} name="iga bakar" type="product" price={20000} image={pic_food4} onPress={() => navigation.navigate('FoodDetail')}/>
    </View>
  );
};

const Popular= () => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingTop: 10, flex:1,  paddingHorizontal:24}}>
      <ItemListFood rating={3.9} name="kopi cua" type="product" price={20000} image={pic_food1} onPress={() => navigation.navigate('FoodDetail')}/>
      <ItemListFood rating={4.0} name="jus mangga" type="product" price={20000} image={pic_food2} onPress={() => navigation.navigate('FoodDetail')}/>
      <ItemListFood rating={3.7} name="nasi liwet" type="product" price={20000} image={pic_food3} onPress={() => navigation.navigate('FoodDetail')}/>
      <ItemListFood rating={4.1} name="nasi timbel" type="product" price={20000} image={pic_food4} onPress={() => navigation.navigate('FoodDetail')}/>
    </View>
  );
};

const Recommended= () => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingTop: 10, flex:1,  paddingHorizontal:24}}>
      <ItemListFood rating={3.9} name="nasi padang" type="product" price={23000} image={pic_food1} onPress={() => navigation.navigate('FoodDetail')}/>
      <ItemListFood rating={4.0} name="nasi kebuli" type="product" price={18000} image={pic_food2} onPress={() => navigation.navigate('FoodDetail')}/>
      <ItemListFood rating={3.7} name="hamburger" type="product" price={22000} image={pic_food3} onPress={() => navigation.navigate('FoodDetail')}/>
      <ItemListFood rating={4.1} name="ayam geprek" type="product" price={24000} image={pic_food4} onPress={() => navigation.navigate('FoodDetail')}/>
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const renderScene = SceneMap({
  first: NewTaste,
  second: Popular,
  three: Recommended,
});

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#020202', height: 3 }}
    style={{ backgroundColor: 'white', elevation:0, shadowOpacity:0, borderBottomColor:'#F2F2F2', borderBottomWidth:1 }}
    tabStyle={{ width: 'auto' }}
    renderLabel={({ route, focused, color }) => (
      <Text style={{ fontFamily: 'Poppins-Medium', color: focused ? '#020202' : '#8D92A3' }}>
        {route.title}
      </Text>
    )}
  />
);


const HomeTabSection = () => {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'New Taste' },
    { key: 'second', title: 'Popular' },
    { key: 'three', title: 'Recommended' },
  ]);

  return (

    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.tabs}
    />

  )
}

export default HomeTabSection

const styles = StyleSheet.create({
   tabs:{backgroundColor:'white'}
})