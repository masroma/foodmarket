/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import { SafeAreaView, StatusBar, Text} from 'react-native';
import { SplashScreen, SignIn } from './pages';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router';



const App = ()  => {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  );
};


export default App;