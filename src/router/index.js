import React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Order, Profile, SignIn, SignUp, SignUpAddress, SignUpSuccess, SplashScreen } from "../pages";
import { BottomNavigator } from "../components";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const MainApp = () => {
    return (
        <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
            <Tab.Screen name="Home" component={Home}  options={{ headerShown: false }}/>
            <Tab.Screen name="Order" component={Order}  options={{ headerShown: false }}/>
            <Tab.Screen name="Profile" component={Profile}   options={{ headerShown: false }}/>
        </Tab.Navigator>
    )
}

const Router = () => {
   return (
        <Stack.Navigator>
            <Stack.Screen name="Splashscreen" component={SplashScreen}  options={{ headerShown: false }}/>
            <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
            <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }}/>
            <Stack.Screen name="SignUpAddress" component={SignUpAddress} options={{ headerShown: false }}/>
            <Stack.Screen name="SignUpSuccess" component={SignUpSuccess} options={{ headerShown: false }}/>
           
            <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false }}/>
        </Stack.Navigator>
   );
};

export default Router;