import React, {Component, useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Button from '../../src/components/Button';
import AppHeader from '../comman/AppHeader';
const APIContainer = ({route, navigation}) => {
  const [axiosData, setAxiosData] = useState([]);
  const [user, setuser] = useState([]);
  const goForAxios = async () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log('getting data from axios', response.data);
        setAxiosData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const userData = async () => {
    axios
      .get('https://reqres.in/api/users')
      .then(response => {
        console.log('getting data from axios', response.data);
        // setuser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  const renderItem = ({item}) => {
    return (
      <TouchableOpacity style={styles.list}>
        <Text style={styles.lightText}>{item.name}</Text>
        <Text style={styles.lightText}>{item.email}</Text>
        <Text style={styles.lightText}>{item.company.name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.parentContainer}>
      <AppHeader
        back
        onPressBack={() => navigation.goBack()}
        title={route.name}
        right="more-vertical"
        onRightPress={() => console.log('right')}
      />
      <Button
        title="show Time Picker"
        onPress={() => {
          goForAxios();
        }}
      />
      <Button
        title="show Time Picker"
        onPress={() => {
          userData();
        }}
      />
      <FlatList
        data={axiosData}
        // ItemSeparatorComponent={FlatListSeparator}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default APIContainer;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  parentContainer: {
    height: deviceHeight,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 18,
    textAlign: 'center',
    paddingTop: 32,
  },
  container: {
    backgroundColor: '#fff',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: '#fff',
  },
});
