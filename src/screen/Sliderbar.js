import {
  StyleSheet,
  Image,
  Dimensions,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Images} from '../contants';

const Sliderbar = ({navigation}) => {
  return (
    <View>
      <ImageBackground source={Images.bgPattern} style={{height: 140}}>
        <Image source={Images.user} style={styles.userImg} />
      </ImageBackground>
      <TouchableOpacity
        onPress={() =>          
          navigation.closeDrawer()
        }
        
        style={styles.drawerListWrapper}>
        <Text>sssss</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Sliderbar;
const {width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  userImg: {
    width: 110,
    height: 110,
    borderRadius: 110 / 2,
    position: 'absolute',
    left: width / 2 - 110,
    bottom: -110 / 2,
    borderWidth: 4,
    borderColor: 'white',
  },
  drawerListWrapper: {
    marginTop: 65,
  },
});
