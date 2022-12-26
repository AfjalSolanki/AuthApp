import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Images} from '../contants';
import {useNavigation} from '@react-navigation/native';

const BackHeaderComp = ({title}) => {
  const navigation = useNavigation();

  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image style={styles.icBack} source={Images.goicBack} />
        </TouchableOpacity>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity style={styles.mlauto}
          onPress={() => {
            console.log('icSearch');
          }}>
          <Image style={styles.icSearch} source={Images.icSearch} />
        </TouchableOpacity>
        <Image />
      </View>
    </View>
  );
};

export default BackHeaderComp;

const styles = StyleSheet.create({
  container: {
    height: 60,
    elevation: 5,
    backgroundColor: '#fff',
    alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'center',
    paddingHorizontal: 10,
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: '500',
    marginStart: 20,
  },
  icBack: {
    width: 33,
    height: 33,
    resizeMode: 'contain',
  },
  icSearch: {
    width: 25,
    height: 25,
    resizeMode: 'contain',
    // alignSelf:'flex-end'
  },
  mlauto:{
    marginLeft: 'auto',

  }
});
