// import {StyleSheet, Text, View} from 'react-native';
// import React from 'react';
// import AppNavigation from './src/Navigation/AppNavigation';
// import {Provider} from 'react-redux';
// import store from './src/redux/store';
// export default function App() {
//   return (
//     <Provider store={store}>
//       <AppNavigation />
//     </Provider>
//   );
// }
// const styles = StyleSheet.create({});
//////ssss///
// import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import Ionic from 'react-native-vector-icons/Ionicons';
// import Home from './App/components/screens/Home';
// import Search from './App/components/screens/Search';
// import Reels from './App/components/screens/Reels';
// import Activity from './App/components/screens/Activity';
// import Profile from './App/components/screens/Profile';
// import Status from './App/components/screenComponents/Status';
// import FriendProfile from './App/components/screenComponents/FriendProfile';
// import EditProfile from './App/components/screenComponents/EditProfile';
// const App = () => {
//   const Stack = createNativeStackNavigator();
//   const Tab = createBottomTabNavigator();
//   const bottomTabScreen = () => {
//     return (
//       <Tab.Navigator
//         screenOptions={({route}) => ({
//           tabBarHideOnKeyboard: true,
//           tabBarShowLabel: false,
//           headerShown: false,
//           tabBarStyle: {
//             height: 50,
//           },

//           tabBarIcon: ({focused, size, colour}) => {
//             let iconName;
//             if (route.name === 'Home') {
//               iconName = focused ? 'home-sharp' : 'home-outline';
//               size = focused ? size + 8 : size + 2;
//             } else if (route.name === 'Search') {
//               iconName = focused ? 'search' : 'ios-search-outline';
//             } else if (route.name === 'Reels') {
//               iconName = focused
//                 ? 'caret-forward-circle'
//                 : 'caret-forward-circle-outline';
//             } else if (route.name === 'Activity') {
//               iconName = focused ? 'ios-heart' : 'ios-heart-outline';
//             } else if (route.name === 'Profile') {
//               iconName = focused ? 'ios-person-circle' : 'ios-person-outline';
//             }

//             return <Ionic name={iconName} size={size} color={colour} />;
//           },
//         })}>
//         <Tab.Screen name="Home" component={Home} />
//         <Tab.Screen name="Search" component={Search} />
//         <Tab.Screen name="Reels" component={Reels} />
//         <Tab.Screen name="Activity" component={Activity} />
//         <Tab.Screen name="Profile" component={Profile} />
//       </Tab.Navigator>
//     );
//   };

//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         screenOptions={{
//           headerShown: false,
//         }}>
//         <Stack.Screen name="Bottom" component={bottomTabScreen} />
//         <Stack.Screen name="Status" component={Status} />
//         <Stack.Screen name="FriendProfile" component={FriendProfile} />
//         <Stack.Screen name="EditProfile" component={EditProfile} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


import * as React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {   NavigationContainer} from '@react-navigation/native';
// import AuthNavigator from '../AuthApp/src/sideandbottomnaviagtion-master/navigations/AuthNavigator'
import AuthNavigator from './src/sideandbottomnaviagtion-master/navigations/AuthNavigator'
export default function App() {
  // isAuthenticated = is...
  return (
    <NavigationContainer>
      {/* {isAuthenticated ? AuthNavigator : DrawerNavigator } */}
      <AuthNavigator />
    </NavigationContainer>
  );
}
