import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import BackHeaderComp from '../components/BackHeaderComp';

const Api = ({navigation, route}) => {
  const [first, setfirst] = useState(route.params.items);
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <BackHeaderComp title={'Go_Back'} />
      {console.log('------first---------', first)}
      <Text style={styles.description}>{first.description}</Text>
      <Text style={styles.description}>{first.title}</Text>
      <Image
        style={{width: '100%', height: 300, resizeMode: 'contain'}}
        source={{uri: first.image}}
      />
    </View>
  );
};

export default Api;

const styles = StyleSheet.create({
  title: {
    color: '#00000',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 5,
    marginLeft: 20,
  },
  topview: {
    width: '100%',
    height: 100,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    color: '#00000',
    fontWeight: '100',
    fontSize: 16,
    marginLeft: 20,
    marginTop: 20,

    // marginVertical:10
  },
});
