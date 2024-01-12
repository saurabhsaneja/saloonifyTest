//import : react components
import React, {useEffect} from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  Alert,
  Platform,
  Text,
  LogBox,
  Linking,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
//import : notification
//import : third parties
//import : globals
import {Colors} from 'global/Index';
//import : stack
import MainStack from 'navigation/MainStack/MainStack';

const App = () => {

  return (
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor={Colors.THEME_VIOLET} />
        <MainStack />
      </SafeAreaView>
    </NavigationContainer>
  );
};
export default App;
