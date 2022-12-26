import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screen/HomeScreen';
import BookmarkScreen from '../screen/BookmarkScreen';
import CartScreen from '../screen/CartScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Display} from '../utils';
import {Colors} from '../contants';
import AccountScreen from '../screen/AccountScreen';
// import BottomButton from '../components/BottomButton';
const BottomTabs = createBottomTabNavigator();
export default () => (
  <BottomTabs.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        position: 'absolute',
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        height: Display.setHeight(8),
        backgroundColor: Colors.DEFAULT_WHITE,
        borderTopWidth: 0,
        marginBottom: 20,
        marginHorizontal: 20,
      },
      tabBarShowLabel: false,
      tabBarActiveTintColor: Colors.DEFAULT_GREEN,
      tabBarInactiveTintColor: Colors.INACTIVE_GREY,
    }}
    op>
    <BottomTabs.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarIcon: ({color}) => (
          <Ionicons name="home-outline" size={23} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Bookmark"
      component={BookmarkScreen}
      options={{
        tabBarIcon: ({color}) => (
          <Ionicons name="bookmark-outline" size={23} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Cart"
      component={CartScreen}
      options={{
        tabBarIcon: ({color}) => (
          <Ionicons name="cart-outline" size={23} color={color} />
        ),
      }}
    />
    <BottomTabs.Screen
      name="Account"
      component={AccountScreen}
      options={{
        tabBarIcon: ({color}) => (
          <Ionicons name="person-outline" size={23} color={color} />
        ),
      }}
    />
  </BottomTabs.Navigator>
);
