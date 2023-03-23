import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import plus from '../assets/images/plus.png';
import {useRef} from 'react';
import {Colors} from '../contants';
// import COLORS from '../conts/colors';
import COLORS from '../conts/colors';
import {Display} from '../utils';
const Tab = createBottomTabNavigator();
const Tabe = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            position: 'absolute',
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            height: Display.setHeight(8),
            backgroundColor: Colors.DEFAULT_WHITE,
            borderTopWidth: 0,
            marginBottom: 0,
            marginHorizontal: 0,
          },
          tabBarShowLabel: false,
          tabBarActiveTintColor: Colors.DEFAULT_GREEN,
          tabBarInactiveTintColor: Colors.INACTIVE_GREY,
        }}>
        <Tab.Screen
          name={'Home'}
          component={HomeScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  position: 'absolute',
                  top: 20,
                }}>
                <Ionicons
                  name="home"
                  size={23}
                  color={focused ? Colors.DEFAULT_GREEN : 'gray'}
                />
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name={'Search'}
          component={SearchScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  position: 'absolute',
                  top: 20,
                }}>
                <Ionicons
                  name="search"
                  size={23}
                  color={focused ? Colors.DEFAULT_GREEN : 'gray'}
                />
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name={'ActionButton'}
          component={EmptyScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <TouchableOpacity
                onPress={() => {
                  alert('89898989');
                }}>
                <View
                  style={{
                    width: 55,
                    height: 55,
                    backgroundColor: Colors.DEFAULT_GREEN,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginBottom: Platform.OS == 'android' ? 50 : 30,
                  }}>
                  <Image
                    source={plus}
                    style={{
                      width: 22,
                      height: 22,
                      tintColor: 'white',
                    }}
                  />
                </View>
              </TouchableOpacity>
            ),
          }}
        />
        <Tab.Screen
          name={'Notifications'}
          component={NotificationScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  position: 'absolute',
                  top: 20,
                }}>
                <Ionicons
                  name="home-outline"
                  size={23}
                  color={focused ? Colors.DEFAULT_GREEN : 'gray'}
                />
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Tab.Screen
          name={'Settings'}
          component={SettingsScreen}
          options={{
            tabBarIcon: ({focused}) => (
              <View
                style={{
                  position: 'absolute',
                  top: 20,
                }}>
                <Ionicons
                  name="bookmark-outline"
                  size={23}
                  color={focused ? Colors.DEFAULT_GREEN : 'gray'}
                />
              </View>
            ),
          }}
          listeners={({navigation, route}) => ({
            tabPress: e => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
      </Tab.Navigator>
      <Animated.View
        style={{
          width: getWidth() - 27,
          height: 5,
          backgroundColor: Colors.DEFAULT_GREEN,
          position: 'absolute',
          bottom: 64,
          left: 20,
          borderRadius: 10,
          transform: [{translateX: tabOffsetValue}],
        }}></Animated.View>
    </NavigationContainer>
  );
};

function getWidth() {
  let width = Dimensions.get('window').width;
  // Horizontal Padding = 20...
  width = width - 0;
  return width / 5;
}
function EmptyScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/* <Text>dfsdfsdf</Text> */}
    </View>
  );
}
function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}
function NotificationScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Notifications!</Text>
    </View>
  );
}
function SearchScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Search!</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Tabe;

// const styles = StyleSheet.create({})
