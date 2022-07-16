import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions, Dimensions } from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { pic_food1, pic_food2, pic_food3, pic_food4 } from '../../../assets';
import ItemListFood from '../ItemListFood';
import { useNavigation } from '@react-navigation/native';



const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingTop: 10, flex:1, paddingHorizontal:24}}>
      <ItemListFood name="nasi padang" orderItems={2} price={20000} items={1} type="in-progress" image={pic_food1} onPress={() => navigation.navigate('OrderDetail')}/>
      <ItemListFood name="nasi warteg" orderItems={2} price={20000} items={1} type="in-progress" image={pic_food2} onPress={() => navigation.navigate('OrderDetail')}/>
      <ItemListFood name="nasi ambon" orderItems={2} price={20000} items={1} type="in-progress" image={pic_food3} onPress={() => navigation.navigate('OrderDetail')}/>
      <ItemListFood name="nasi kebuli" orderItems={2} price={20000} items={1} type="in-progress" image={pic_food4} onPress={() => navigation.navigate('OrderDetail')}/>
    </View>
  );
};

const PasOrder= () => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingTop: 10, flex:1,  paddingHorizontal:24}}>
      <ItemListFood tanggal="23 Jan 2022" status="cancel" name="nasi liwet" orderItems={2} price={20000} items={1} date="" type="pas-order" image={pic_food1} onPress={() => navigation.navigate('OrderDetail')}/>
      <ItemListFood tanggal="23 Jan 2022" status="" name="nasi uduk" orderItems={2} price={20000} items={1} date="" type="pas-order" image={pic_food2} onPress={() => navigation.navigate('OrderDetail')}/>
      <ItemListFood tanggal="23 Jan 2022" status="cancel" name="nasi goreng" orderItems={2} price={20000} items={1} date="" type="pas-order" image={pic_food3} onPress={() => navigation.navigate('OrderDetail')}/>
      <ItemListFood tanggal="23 Jan 2022" status="" name="nasi ulam" orderItems={2} price={20000} items={1} date="" type="pas-order" image={pic_food4} onPress={() => navigation.navigate('OrderDetail')}/>
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const renderScene = SceneMap({
  first: InProgress,
  second: PasOrder,
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


const OrderTabSection = () => {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'In Progress' },
    { key: 'second', title: 'Past Order' },
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

export default OrderTabSection

const styles = StyleSheet.create({
   tabs:{backgroundColor:'white'}
})