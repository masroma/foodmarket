import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions, Dimensions } from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import { pic_food1, pic_food2, pic_food3, pic_food4 } from '../../../assets';
import ItemListFood from '../ItemListFood';



const NewTaste = () => {
  return (
    <View style={{ paddingTop: 10, flex:1}}>
      <ItemListFood image={pic_food1}/>
      <ItemListFood image={pic_food2}/>
      <ItemListFood image={pic_food3}/>
      <ItemListFood image={pic_food4}/>
    </View>
  );
};

const SecondRoute= () => {
  return (
    <View style={{ paddingTop: 10, flex:1}}>
      <ItemListFood image={pic_food1}/>
      <ItemListFood image={pic_food2}/>
      <ItemListFood image={pic_food3}/>
      <ItemListFood image={pic_food4}/>
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const renderScene = SceneMap({
  first: NewTaste,
  second: SecondRoute,
  three: SecondRoute,
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