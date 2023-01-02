import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from '../sideandbottomnaviagtion-master/navigations/AuthNavigator';

const SideandbottomNaviagtion = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default SideandbottomNaviagtion;

const styles = StyleSheet.create({});
