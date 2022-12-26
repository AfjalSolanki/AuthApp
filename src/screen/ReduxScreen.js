import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import actions from '../redux/actions';
import Loader from '../components/Loader';
import Header from '../components/Header';

const ReduxScreen = props => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    (async () => {
      try {
        let res = await actions.getPosts();
        console.log('all posts', res);
        setLoading(false);
        setData(res);
      } catch (error) {
        setLoading(false);
        console.log('error raised', error);
      }
    })();
  }, []);
  const deletePost = async id => {
    setLoading(true);
    try {
      const res = await actions.deletePost(id);
      console.log('deletePost', res);
      setLoading(false);
      let arry = [...data];
      let modifyArray = arry.filter((val, i) => {
        if (val.id !== id) {
          return val;
        }
      });
      setData(modifyArray);
    } catch (error) {
      setLoading(false);

      console.log('error raised', error);
    }
  };
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.boxView}>
        <Text style={styles.heading}>
          {item.id}. {item.title}
        </Text>
        <Text>{item.body}</Text>

        <TouchableOpacity
          onPress={() => deletePost(item.id)}
          style={styles.btnStyle}>
          <Text style={{color: 'white'}}>DELETE</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
   
      <Loader visible={loading} />
      <Header
        title={'FoodApp'}
        icon={require('../assets/images/cart.png')}
        // count={cartCount}
        onClickIcon={() => {
          console.log('--');
        }}
      />
      <SafeAreaView>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={() => <View style={{marginBottom: 16}} />}
        />
      </SafeAreaView>
    </View>
  );
};

export default ReduxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  boxView: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 8,
    marginTop: 40,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    textTransform: 'capitalize',
  },
  btnStyle: {
    marginTop: 10,
    alignSelf: 'flex-end',
    backgroundColor: 'red',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
});
