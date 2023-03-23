// import React, { useEffect } from 'react';
// import { View, Text, StyleSheet, StatusBar, Image } from 'react-native';
// import { Colors, Images, Fonts } from '../contants';
// import { Display } from '../utils';

// const SplashScreen = ({ navigation }) => {
//   useEffect(() => {
//      setTimeout(() => {
//       navigation.navigate('Welcome')
//     }, 1500)
//   }, [])

//   return (
//     <View style={styles.container}>
//       <StatusBar
//         barStyle="light-content"
//         backgroundColor={Colors.DEFAULT_GREEN}
//         // translucent
//       />
//       <Image source={Images.PLATE} resizeMode="contain" style={styles.image} />
//       <Text style={styles.titleText}>FooDelivery</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: Colors.DEFAULT_GREEN,
//   },
//   image: {
//     height: Display.setHeight(30),
//     width: Display.setWidth(60),
//   },
//   titleText: {
//     color: Colors.DEFAULT_WHITE,
//     fontSize: 32,
//     fontFamily: Fonts.POPPINS_LIGHT,
//   },
// });

// export default SplashScreen;

import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useTheme} from '@react-navigation/native';
import {Colors, Images} from '../contants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({navigation}) => {
  const {colors} = useTheme();
  useEffect(() => {
    setTimeout(() => {
      nextPage();
    }, 3000);
  }, []);
  const nextPage = async () => {
    const email = await AsyncStorage.getItem('EMAIL');
    console.log(email);
    if (email !== null) {
      navigation.navigate('DrawerStack');
    } else {
      navigation.navigate('LoginScreen');
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={Colors.DEFAULT_GREEN}
      />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={Images.PLATE}
          style={styles.logo}
          resizeMode="stretch"
        />
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
        animation="fadeInUpBig">
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
            },
          ]}>
          Find best food in your locality!
        </Text>
        <Text style={styles.text}>Sign in with account</Text>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate('Registration')}>
            <LinearGradient
              colors={['#0A8791', '#0A8791']}
              style={styles.signIn}>
              <Text style={styles.textSign}>Get Started</Text>
              <MaterialIcons
                name="navigate-next"
                color="#fff"
                size={20}
                style={{marginTop: 3, marginStart: 10}}
              />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};

export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.DEFAULT_GREEN,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
});
