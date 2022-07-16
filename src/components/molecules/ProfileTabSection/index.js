import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions, Dimensions } from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { pic_food1, pic_food2, pic_food3, pic_food4 } from '../../../assets';
import ItemListFood from '../ItemListFood';
import { useNavigation } from '@react-navigation/native';



const Account = () => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingTop: 10, flex:1, paddingHorizontal:24}}>
      <ItemListFood name="Edit Profile"  type="profile" onPress={() => navigation.navigate('OrderDetail')}/>
      <ItemListFood name="Address"  type="profile" onPress={() => navigation.navigate('OrderDetail')}/>
      <ItemListFood name="Security"  type="profile" onPress={() => navigation.navigate('OrderDetail')}/>
      <ItemListFood name="Payment"  type="profile" onPress={() => navigation.navigate('OrderDetail')}/>
    </View>
  );
};

const FoodMarket= () => {
  const navigation = useNavigation();
  return (
    <View style={{ paddingTop: 10, flex:1,  paddingHorizontal:24}}>
      <ItemListFood  name="Rate App" type="profile"  onPress={() => navigation.navigate('OrderDetail')}/>
      <ItemListFood  name="Help Center" type="profile"  onPress={() => navigation.navigate('OrderDetail')}/>
      <ItemListFood  name="Privacy and Policy" type="profile"  onPress={() => navigation.navigate('OrderDetail')}/>
      <ItemListFood  name="Terms and Condition" type="profile"  onPress={() => navigation.navigate('OrderDetail')}/>
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const renderScene = SceneMap({
  first: Account,
  second: FoodMarket,
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


const ProfileTabSection = () => {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Account' },
    { key: 'second', title: 'Food Market' },
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

export default ProfileTabSection

const styles = StyleSheet.create({
   tabs:{backgroundColor:'white'}
})