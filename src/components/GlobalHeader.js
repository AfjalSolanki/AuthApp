import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ImageStyle,
} from 'react-native';
// import {COLORS, SIZE, Font} from './theme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { COLORS, Fonts } from '../contants';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
// } from 'react-native-responsive-screen';

const GlobalHeader = ({
  title,
  rightIcon,
  rightImage,
  onPressLeft,
  onPresright,
  rightIconStyle,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={{flex: 0.2}}>
        <TouchableOpacity onPress={onPressLeft}>
          <Ionicons name="arrow-back" size={20} color={'gray'} />
        </TouchableOpacity>
      </View>
      <Text style={styles.titles}>{title}</Text>
      <View style={{flex: 0.2}}>
        {rightImage && (
          <TouchableOpacity
            onPress={onPresright}
            style={{alignSelf: 'flex-end'}}>
            <Image source={rightIcon} style={rightIconStyle} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default GlobalHeader;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    // backgroundColor:'red'
  },
  titles: {
    color: COLORS.gray,
    fontSize: 16,
    fontFamily: Fonts.POPPINS_MEDIUM,
    textAlign: 'center',
    flex: 1,
  },
});
