import React from 'react'
import { ScrollView, StyleSheet,useWindowDimensions, View, Dimensions} from 'react-native'
import { pic_food1, pic_food2, pic_food3, pic_food4 } from '../../assets'
import { FoodCard, Gap, HomeProfile, HomeTabSection } from '../../components'
import { TabView, SceneMap } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ff4081', height:200 }} />
);

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7', height:200  }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});


const Home = () => {

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);


  return (
  
   
      <View style={styles.page}>
       <ScrollView  >
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
       
       </ScrollView>
      </View>
    
  
  );
}

export default Home

const styles = StyleSheet.create({
  page:{flex:1 },
  foodcardContainer: { flexDirection: 'row' },
  tabContainer:{flex:1, minHeight:420}
})