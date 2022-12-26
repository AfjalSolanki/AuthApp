import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Button,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,Image
} from 'react-native';
import Loader from '../components/Loader';
import Constant_Api from '../api/Constant_Api';

const Get_Data = () => {
  const [loading, setLoading] = useState(false);
  const [Data, setData] = useState([]);
  const [Listdata, setListdata] = useState([]);

  useEffect(() => {
    NextPage();
    Get_Data();
  }, []);

  const Get_Data = async () => {
    setLoading(true);
    await axios
      .get(Constant_Api.api_linkphoto + 'photos')
      .then(response => {
        console.log(
          'getting data ==================================from=====================',
          response.data,
        );
        setLoading(false);
        setListdata(response.data);
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
  };

  const NextPage = async () => {
    setLoading(true);
    await axios
      .get(Constant_Api.api_link + 'users')
      .then(response => {
        console.log(
          'getting data ===============from axios',
          response.data,
        );
        setLoading(false);
        setData(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const renderItem = data => {
    return (
      <TouchableOpacity style={styles.list}>
        <Text style={styles.lightText}>{data.item.id}</Text>
        <Text style={styles.lightText}>{data.item.name}</Text>
        <Text style={styles.lightText}>{data.item.username}</Text>
        <Text style={styles.lightText}>{data.item.email}</Text>
        <Text style={styles.lightText}>{data.item.phone}</Text>
        <Text style={styles.lightText}>{data.item.website}</Text>
        <Text style={styles.lightText}>{data.item.address.street}</Text>
        <Text style={styles.lightText}>{data.item.address.suite}</Text>
        <Text style={styles.lightText}>{data.item.address.city}</Text>
        <Text style={styles.lightText}>{data.item.address.zipcode}</Text>
        <Text style={styles.lightText}>{data.item.address.geo.lat}</Text>
        <Text style={styles.lightText}>{data.item.address.geo.lng}</Text>
        <Text style={styles.lightText}>{data.item.company.name}</Text>
        <Text style={styles.lightText}>{data.item.company.catchPhrase}</Text>
        <Text style={styles.lightText}>{data.item.company.bs}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Loader visible={loading} />
      <FlatList
        data={Data}
        renderItem={item => renderItem(item)}
        keyExtractor={item => item.id.toString()}
      />
      <FlatList
        data={Listdata}
        keyExtractor={({id}, index) => id}
        // numColumns={2}
        renderItem={({item}) => (
          <View>
            <View style={{}}>
              <Image
                style={{width: '30%', height: 200, resizeMode: 'contain'}}
                source={{uri: item.url}}
              />
              <Image
                style={{width: '30%', height: 200, resizeMode: 'contain'}}
                source={{uri: item.thumbnailUrl}}
              />
            </View>
            <Text numberOfLines={1} style={{color: 'red', fontSize: 20,marginHorizontal:10}}>
              {item.title}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default Get_Data;
const deviceHeight = Dimensions.get('screen').height;

const styles = StyleSheet.create({
  parentContainer: {
    height: deviceHeight,
    justifyContent: 'center',
  },
  lightText: {
    fontSize: 17,
    paddingTop: 5,
  },
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  list: {
    // marginHorizontal: 10,
    margin: 10,
    paddingHorizontal:10,
    backgroundColor: '#fff',
    marginTop:10,elevation:3
  },
});
