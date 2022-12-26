import {
  SafeAreaView,
  View,
  Image,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Constant_Api from '../api/Constant_Api';
import BackHeaderComp from '../components/BackHeaderComp';
import Loader from '../comman/Loader';
const ApiDummy = ({navigation}) => {
  const [Listdata, setListdata] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    Fatch_Data();
  }, []);
  const Fatch_Data = async () => {
    setModalVisible(true);
    fetch('https://api.sampleapis.com/coffee/hot', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(json => {
        console.log('=============json===========', json);
        setListdata(json);
        setModalVisible(false);
      })
      .catch(error => {
        setModalVisible(false);
        console.error(error);
      });
    // await axios
    //   .get(Constant_Api.linkairlineshot + 'hot')
    //   .then(response => {
    //     console.log('========axios=======', response);
    //     // setListdata(response);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  };

  const FooterComponent = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>
          All rights reserved by Adhithi Ravichandran 2022.
        </Text>
      </View>
    );
  };
  return (
    <View>
      <BackHeaderComp title={'Go_Back'} />
      <Loader modalVisible={modalVisible} setModalVisible={setModalVisible} />
      {console.log('Listdata', Listdata)}
      <FlatList
        data={Listdata}
        ListFooterComponent={FooterComponent}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Api', {items: item})}
            style={styles.manview}>
            {console.log('===============image===============', item.image)}
            <View style={styles.view}>
              <Text style={styles.title}>{item.title}</Text>
              {console.log('================title==============', item.title)}
              <Text style={styles.description}>{item.description}</Text>
              {console.log(
                '================description==============',
                item.description,
              )}
            </View>
            <ImageBackground
              imageStyle={styles.imageStyle}
              style={styles.image}
              source={{uri: item.image}}>
              <View style={styles.topview}>
                <Text>asdasd</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
export default ApiDummy;
const styles = StyleSheet.create({
  manview: {
    backgroundColor: '#ffff',
    margin: 10,
    borderRadius: 10,
    paddingHorizontal: 0,
    paddingVertical: 0,
    elevation: 3,
    marginTop: 10,
  },
  image: {
    height: 250,
    width: '100%',
    borderRadius: 10,
    // zIndex: 1,
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 10,
  },
  view: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  imageStyle: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  title: {
    color: '#00000',
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 5,
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
    // marginVertical:10
  },
  sectionContainer: {
    height: 120,
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent:'center'
  },
  //   sectionTitle: {
  //     fontSize: 24,
  //     fontWeight: '600',
  //     color: 'black',
  //   },
});
