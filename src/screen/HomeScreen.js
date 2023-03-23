// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   StatusBar,
//   ScrollView,
//   FlatList,
//   TouchableOpacity,
// } from 'react-native';
// import {Colors, Fonts, Mock, Images} from '../contants';
// import {Display} from '../utils';
// import Separator from '../components/Separator';
// import Ionicons from 'react-native-vector-icons/Ionicons';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Feather from 'react-native-vector-icons/Feather';
// import CategoryMenuItem from '../components/CategoryMenuItem';
// import ButtomComman from '../components/ButtomComman';
// // import { Auth } from '../services';
// import CountryCode from '../contants/CountryCode';
// const sortStyle = isActive =>
//   isActive
//     ? styles.sortListItem
//     : {...styles.sortListItem, borderBottomColor: Colors.DEFAULT_WHITE};
// const HomeScreen = ({navigation}) => {
//   const [activeCategory, setActiveCategory] = useState();
//   const [activeSortItem, setActiveSortItem] = useState('recent');
//   const [data, setdata] = useState([1, 2, 3, 4, 5]);
//   return (
//     <View style={styles.container}>
//       <StatusBar
//         barStyle="light-content"
//         backgroundColor={Colors.DEFAULT_GREEN}
//         translucent
//       />
//       <Separator height={StatusBar.currentHeight} />
//       <View style={styles.backgroundCurvedContainer} />
//       <View style={styles.headerContainer}>
//         <View style={styles.locationContainer}>
//           <Ionicons
//             name="location-outline"
//             size={15}
//             color={Colors.DEFAULT_WHITE}
//           />
//           <Text style={styles.locationText}>Delivered to</Text>
//           <Text style={styles.selectedLocationText}>HOME</Text>
//           <MaterialIcons
//             name="keyboard-arrow-down"
//             size={16}
//             color={Colors.DEFAULT_YELLOW}
//           />
//           <Feather
//             onPress={() => {
//               navigation.openDrawer();
//             }}
//             name="bell"
//             size={24}
//             color={Colors.DEFAULT_WHITE}
//             style={{position: 'absolute', right: 0}}
//           />
//           <View style={styles.alertBadge}>
//             <Text style={styles.alertBadgeText}>12</Text>
//           </View>
//         </View>
//         <View style={styles.searchContainer}>
//           <View style={styles.searchSection}>
//             <Ionicons
//               name="search-outline"
//               size={25}
//               color={Colors.DEFAULT_GREY}
//             />
//             <Text style={styles.searchText}>Search..</Text>
//           </View>
//           <Feather
//             name="sliders"
//             size={20}
//             color={Colors.DEFAULT_YELLOW}
//             style={{marginRight: 10}}
//           />
//         </View>
//         <View style={styles.categoriesContainer}>
//           {Mock.CATEGORIES.map(({name, logo}) => (
//             <CategoryMenuItem
//               key={name}
//               name={name}
//               logo={logo}
//               activeCategory={activeCategory}
//               setActiveCategory={setActiveCategory}
//             />
//           ))}
//         </View>
//       </View>
//       <ScrollView
//         showsVerticalScrollIndicator={false}
//         style={styles.listContainer}>
//         <View style={styles.horizontalListContainer}>
//           <View style={styles.listHeader}>
//             <Text style={styles.listHeaderTitle}>Top Rated</Text>
//             <Text style={styles.listHeaderSubtitle}>See All</Text>
//           </View>
//         </View>
//         <View style={styles.sortListContainer}>
//           <TouchableOpacity
//             style={sortStyle(activeSortItem === 'recent')}
//             activeOpacity={0.8}
//             onPress={() => setActiveSortItem('recent')}>
//             <Text style={styles.sortListItemText}>Recent</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={sortStyle(activeSortItem === 'favorite')}
//             activeOpacity={0.8}
//             onPress={() => setActiveSortItem('favorite')}>
//             <Text style={styles.sortListItemText}>Favorite</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={sortStyle(activeSortItem === 'rating')}
//             activeOpacity={0.8}
//             onPress={() => setActiveSortItem('rating')}>
//             <Text style={styles.sortListItemText}>Rating</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={sortStyle(activeSortItem === 'popular')}
//             activeOpacity={0.8}
//             onPress={() => setActiveSortItem('popular')}>
//             <Text style={styles.sortListItemText}>Popular</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={sortStyle(activeSortItem === 'trending')}
//             activeOpacity={0.8}
//             onPress={() => setActiveSortItem('trending')}>
//             <Text style={styles.sortListItemText}>Trending</Text>
//           </TouchableOpacity>
//         </View>
//         <Separator height={Display.setHeight(5)} />
//         <ButtomComman Title="Sign Out" onPress={() => console.log('console')} />
//         {/* <FlatList
//           data={data}
//           renderItem={item => {
//             <TouchableOpacity style={styles.boxView}>
//               <Text style={styles.sortListItemText}>Trending</Text>
//             </TouchableOpacity>;
//           }}
//         /> */}
//         <View style={{}}>
//           <FlatList
//             data={CountryCode}
//             renderItem={({item}) => (
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-between',
//                   margin: 10,
//                 }}>
//                 <Text>{item.name}</Text>
//                 <Text>{item.dial_code}</Text>
//                 <Text>{item.code}</Text>
//               </View>
//             )}
//           />
//         </View>
//       </ScrollView>
//     </View>
//   );
// };

// export default HomeScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: Colors.SECONDARY_WHITE,
//   },
//   backgroundCurvedContainer: {
//     backgroundColor: Colors.DEFAULT_GREEN,
//     height: 2000,
//     position: 'absolute',
//     top: -1 * (2000 - 230),
//     width: 2000,
//     borderRadius: 2000,
//     alignSelf: 'center',
//     zIndex: -1,
//   },
//   headerContainer: {
//     justifyContent: 'space-evenly',
//   },
//   locationContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: 10,
//     marginHorizontal: 20,
//   },
//   locationText: {
//     color: Colors.DEFAULT_WHITE,
//     marginLeft: 5,
//     fontSize: 13,
//     lineHeight: 13 * 1.4,
//     fontFamily: Fonts.POPPINS_MEDIUM,
//   },
//   selectedLocationText: {
//     color: Colors.DEFAULT_YELLOW,
//     marginLeft: 5,
//     fontSize: 14,
//     lineHeight: 14 * 1.4,
//     fontFamily: Fonts.POPPINS_MEDIUM,
//   },
//   alertBadge: {
//     borderRadius: 32,
//     backgroundColor: Colors.DEFAULT_YELLOW,
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 16,
//     width: 16,
//     position: 'absolute',
//     right: -2,
//     top: -10,
//   },
//   alertBadgeText: {
//     color: Colors.DEFAULT_WHITE,
//     fontSize: 10,
//     lineHeight: 10 * 1.4,
//     fontFamily: Fonts.POPPINS_BOLD,
//   },
//   searchContainer: {
//     backgroundColor: Colors.DEFAULT_WHITE,
//     height: 45,
//     borderRadius: 8,
//     marginHorizontal: 20,
//     marginTop: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   searchSection: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginLeft: 10,
//   },
//   searchText: {
//     color: Colors.DEFAULT_GREY,
//     fontSize: 16,
//     lineHeight: 16 * 1.4,
//     fontFamily: Fonts.POPPINS_MEDIUM,
//     marginLeft: 10,
//   },
//   categoriesContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     marginTop: 20,
//   },
//   listContainer: {
//     paddingVertical: 5,
//     zIndex: -5,
//   },
//   horizontalListContainer: {
//     marginTop: 30,
//   },
//   listHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginHorizontal: 20,
//     marginBottom: 5,
//   },
//   listHeaderTitle: {
//     color: Colors.DEFAULT_BLACK,
//     fontSize: 16,
//     lineHeight: 16 * 1.4,
//     fontFamily: Fonts.POPPINS_MEDIUM,
//   },
//   listHeaderSubtitle: {
//     color: Colors.DEFAULT_YELLOW,
//     fontSize: 13,
//     lineHeight: 13 * 1.4,
//     fontFamily: Fonts.POPPINS_MEDIUM,
//   },
//   sortListContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//     backgroundColor: Colors.DEFAULT_WHITE,
//     marginTop: 8,
//     elevation: 1,
//   },
//   sortListItem: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: Colors.DEFAULT_YELLOW,
//     height: 40,
//   },
//   sortListItemText: {
//     color: Colors.DEFAULT_BLACK,
//     fontSize: 13,
//     lineHeight: 13 * 1.4,
//     fontFamily: Fonts.POPPINS_SEMI_BOLD,
//   },
//   boxView: {
//     marginHorizontal: 20,
//     marginTop: 10,
//     backgroundColor: Colors.DEFAULT_WHITE,
//     elevation: 3,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     paddingBottom: 20,
//     // add
//     height: Display.setWidth(80),
//     alignItems: 'center',
//     justifyContent: 'center',
//     // borderColor: 'red',
//     borderWidth: 2,
//   },
// });

//import liraries
import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text} from 'react-native';
import Container from '../components/Container';
import GlobalHeader from '../components/GlobalHeader';
// create a component
const HomeScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const handleSubmit = () => {
    if (!email) {
      setEmailError('Email is required');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email address');
    } else {
      setEmailError(null);
    }
    if (!password) {
      setPasswordError('Password is required');
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters');
    } else {
      setPasswordError(null);
    }

    if (email && password) {
      console.log('Submit form');
    }
  };
  return (
    <Container>
      <GlobalHeader
        onPressLeft={() => navigation.goBack()}
        title={'newAccount'}
        // rightIcon={require('../assest/Images/share.png')}
      />
      <GlobalHeader
        title={'newAccount'}
        onPressLeft={() => navigation.navigate('Home')}
      />
      <GlobalHeader
        title={'newAccount'}
        onPressLeft={() => navigation.goBack()}
        rightImage
        // rightIcon={require('../assest/Images/share.png')}
        rightIconStyle={styles.rightIconStyle}
        onPresright={() => alert('dddd')}
      />
      <View style={styles.container}>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: emailError ? 'red' : 'green',
              backgroundColor: emailError ? '#FFE5E5' : '#EAF3F1',
            },
          ]}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        {emailError && <Text style={styles.error}>{emailError}</Text>}
        <TextInput
          style={[
            styles.input,
            {
              borderColor: passwordError ? 'red' : 'green',
              backgroundColor: passwordError ? '#FFE5E5' : '#EAF3F1',
            },
          ]}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />
        {passwordError && <Text style={styles.error}>{passwordError}</Text>}
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </Container>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderWidth: 1,
    // borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

//make this component available to the app
export default HomeScreen;
