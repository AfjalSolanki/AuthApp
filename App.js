import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigation from './src/Navigation/AppNavigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';
// import InstagramNavigation from './App/InstagramNavigation';
// import SideandbottomNaviagtion from './src/sideandbottomnaviagtion-master/SideandbottomNaviagtion';
export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
      {/* <InstagramNavigation /> */}
      {/* <SideandbottomNaviagtion /> */}
    </Provider>
  );
}
const styles = StyleSheet.create({});
