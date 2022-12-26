import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

// git status
// git add .
// git status
// git commit -m 'any message'
// git push

const git = () => {
  return (
    <View>
      <Text>git</Text>
    </View>
  );
};

export default git;

const styles = StyleSheet.create({});



// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const CustomDrawer = () => {
//   return (
//     <View>
//       <Text>CustomDrawer</Text>
//     </View>
//   )
// }

// export default CustomDrawer

// const styles = StyleSheet.create({})


// import { StatusBar } from 'expo-status-bar';
// import React, { useRef, useState } from 'react';
// import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import profile from '../assets/images/home_fill.png';
// // Tab ICons...
// import home from '../assets/images/home_fill.png';
// import search from '../assets/images/home_fill.png';
// import notifications from '../assets/images/home_fill.png';
// import settings from '../assets/images/home_fill.png';
// import logout from '../assets/images/home_fill.png';
// // Menu
// import menu from '../assets/images/home_fill.png';
// import close from '../assets/images/home_fill.png';

// // Photo
// import photo from '../assets/images/person.jpg';

// export default function CustomDrawer() {
//   const [currentTab, setCurrentTab] = useState("Home");
//   // To get the curretn Status of menu ...
//   const [showMenu, setShowMenu] = useState(false);

//   // Animated Properties...

//   const offsetValue = useRef(new Animated.Value(0)).current;
//   // Scale Intially must be One...
//   const scaleValue = useRef(new Animated.Value(1)).current;
//   const closeButtonOffset = useRef(new Animated.Value(0)).current;

//   return (
//     <SafeAreaView style={styles.container}>

//       <View style={{ justifyContent: 'flex-start', padding: 15 }}>
//         <Image source={profile} style={{
//           width: 60,
//           height: 60,
//           borderRadius: 10,
//           marginTop: 8
//         }}></Image>

//         <Text style={{
//           fontSize: 20,
//           fontWeight: 'bold',
//           color: 'white',
//           marginTop: 20
//         }}>Jenna Ezarik</Text>

//         <TouchableOpacity>
//           <Text style={{
//             marginTop: 6,
//             color: 'white'
//           }}>View Profile</Text>
//         </TouchableOpacity>

//         <View style={{ flexGrow: 1, marginTop: 50 }}>
//           {
//             // Tab Bar Buttons....
//           }

//           {TabButton(currentTab, setCurrentTab, "Home", home)}
//           {TabButton(currentTab, setCurrentTab, "Search", search)}
//           {TabButton(currentTab, setCurrentTab, "Notifications", notifications)}
//           {TabButton(currentTab, setCurrentTab, "Settings", settings)}

//         </View>

//         <View>
//           {TabButton(currentTab, setCurrentTab, "LogOut", logout)}
//         </View>

//       </View>

//       {
//         // Over lay View...
//       }

//       <Animated.View style={{
//         flexGrow: 1,
//         backgroundColor: 'white',
//         position: 'absolute',
//         top: 0,
//         bottom: 0,
//         left: 0,
//         right: 0,
//         paddingHorizontal: 15,
//         paddingVertical: 20,
//         borderRadius: showMenu ? 15 : 0,
//         // Transforming View...
//         transform: [
//           { scale: scaleValue },
//           { translateX: offsetValue }
//         ]
//       }}>

//         {
//           // Menu Button...
//         }

//         <Animated.View style={{
//           transform: [{
//             translateY: closeButtonOffset
//           }]
//         }}>
//           <TouchableOpacity onPress={() => {
//             // Do Actions Here....
//             // Scaling the view...
//             Animated.timing(scaleValue, {
//               toValue: showMenu ? 1 : 0.88,
//               duration: 300,
//               useNativeDriver: true
//             })
//               .start()

//             Animated.timing(offsetValue, {
//               // YOur Random Value...
//               toValue: showMenu ? 0 : 230,
//               duration: 300,
//               useNativeDriver: true
//             })
//               .start()

//             Animated.timing(closeButtonOffset, {
//               // YOur Random Value...
//               toValue: !showMenu ? -30 : 0,
//               duration: 300,
//               useNativeDriver: true
//             })
//               .start()

//             setShowMenu(!showMenu);
//           }}>

//             <Image source={showMenu ? close : menu} style={{
//               width: 20,
//               height: 20,
//               tintColor: 'black',
//               marginTop: 40,

//             }}></Image>

//           </TouchableOpacity>

//           <Text style={{
//             fontSize: 30,
//             fontWeight: 'bold',
//             color: 'black',
//             paddingTop: 20
//           }}>{currentTab}</Text>

//           <Image source={photo} style={{
//             width: '100%',
//             height: 300,
//             borderRadius: 15,
//             marginTop: 25
//           }}></Image>

//           <Text style={{
//             fontSize: 20,
//             fontWeight: 'bold'
//             , paddingTop: 15,
//             paddingBottom: 5
//           }}>Jenna Ezarik</Text>

//           <Text style={{
//           }}>Techie, YouTuber, PS Lover, CustomDrawerle Sheep's Sister</Text>
//         </Animated.View>

//       </Animated.View>

//     </SafeAreaView>
//   );
// }

// // For multiple Buttons...
// const TabButton = (currentTab, setCurrentTab, title, image) => {
//   return (

//     <TouchableOpacity onPress={() => {
//       if (title == "LogOut") {
//         // Do your Stuff...
//       } else {
//         setCurrentTab(title)
//       }
//     }}>
//       <View style={{
//         flexDirection: "row",
//         alignItems: 'center',
//         paddingVertical: 8,
//         backgroundColor: currentTab == title ? 'white' : 'transparent',
//         paddingLeft: 13,
//         paddingRight: 35,
//         borderRadius: 8,
//         marginTop: 15
//       }}>

//         <Image source={image} style={{
//           width: 25, height: 25,
//           tintColor: currentTab == title ? "#5359D1" : "white"
//         }}></Image>

//         <Text style={{
//           fontSize: 15,
//           fontWeight: 'bold',
//           paddingLeft: 15,
//           color: currentTab == title ? "#5359D1" : "white"
//         }}>{title}</Text>

//       </View>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#5359D1',
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//   },
// });

