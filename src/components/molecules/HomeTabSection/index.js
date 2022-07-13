import React from 'react'
import { StyleSheet, Text, View,  useWindowDimensions } from 'react-native'
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';


const FirstRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#ff4081' }} />
  );
  
  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
  );
  
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    three: SecondRoute,
  });
  
  const renderTabBar = props => (

    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: '#020202', height:3}}
      style={{ backgroundColor: 'white' }}
      tabStyle={{ width:'auto'}}
      renderLabel={({ route, focused, color }) => (
        <Text style={{ fontFamily:'Poppins-Medium', color: focused  ? '#020202' : '#8D92A3'}}>
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
              initialLayout={{ width: layout.width }}
            />
   
  )
}

export default HomeTabSection

const styles = StyleSheet.create({
   
})