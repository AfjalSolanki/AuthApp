import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MapView from 'react-native-maps';
import {Colors} from '../contants';

const Maps = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'red'}}>
      <View>
        <MapView
          style={{height: '100%'}}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
      <View style={styles.menuContainer}>
        <Text>jjjjjj</Text>
      </View>
    </View>
  );
};

export default Maps;

const styles = StyleSheet.create({
 
});
