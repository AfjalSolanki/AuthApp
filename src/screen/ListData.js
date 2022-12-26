import {
  FlatList,
  Modal,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import Constant_Api from '../api/Constant_Api';
const ListData = () => {
  const [List, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    // Fatch_Data();
    api();
  }, []);

  const api = () => {
    setLoading(true);
    fetch('https://api.instantwebtools.net/v1/airlines', {
      method: 'GET',
      // headers: {
      //   Accept: 'application/json',
      //   'Content-Type': 'application/json',
      // },
      // body: JSON.stringify({
      //   firstParam: 'yourValue',
      //   secondParam: 'yourOtherValue',
      // }),
    })
      .then(response => response.json())
      .then(json => {
        console.log('=============json===========', json);
        setLoading(false);

        setList(json);
        // return json.movies;
      })
      .catch(error => {
        setLoading(false);
        console.error(error);
      });
  };

  // const Fatch_Data = async () => {
  //   await axios
  //     .get(Constant_Api.api_linkairlines + 'airlines')
  //     // .then(response => response.json())
  //     .then(response => {
  //       console.log('========responseresponse=======', response);
  //       setList(response);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };
  return (
    <View style={styles.container}>
    
      <Loader visible={loading} />
      <FlatList
        data={List}
        renderItem={({item}) => (
          <View style={styles.backgroundColorview}>
            <Text style={styles.lightText}>{item.id}</Text>
            <Text style={styles.lightText}>{item.name}</Text>
            <Text style={styles.lightText}>{item.country}</Text>
            <Text style={styles.lightText}>{item.slogan}</Text>
            <Text style={styles.lightText}>{item.head_quaters}</Text>
            <Text style={styles.lightText}>{item.website}</Text>
            <Text style={styles.lightText}>{item.established}</Text>
            <Image style={styles.image} source={{uri: item.logo}} />
          </View>
        )}
      />
     
    </View>
  );
};

export default ListData;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundColorview: {
    backgroundColor: '#ffcccc',
    margin: 10,
    elevation: 3,
    // height: 200,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    // flexDirection:'row'
  },
  image: {
    width: 100,
    height: 55,
    resizeMode: 'contain',
    // marginEnd:20,
    // backgroundColor: 'red',
  },
  lightText: {
    fontSize: 17,
    color: '#fff',
    fontWeight: '300',
    // paddingTop: 5,
  },

  
});

// import React, {Component} from 'react';
// import {View, Text, Button, StyleSheet} from 'react-native';
// const getMoviesFromApi = () => {
//   console.log('Fetch API Call');

//   const requestOptions = {
//     method: 'GET',
//     headers: {'Content-Type': 'application/json'},
//     body: JSON.stringify({
//       name: 'Abhi',
//       OS: 'Android',
//     }),
//   };

//   fetch('https://reactnative.dev/movies.json', requestOptions)
//     .then(response => response.json())
//     .then(json => {
//       console.log('Fetch API Response', json.movies);
//       console.log('Fetch API Response', json.title);
//       console.log('Fetch API Response', json.description);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// };
// const postUser = () => {
//   const requestOptions = {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       Authorization:
//         'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408',
//     },
//     body: JSON.stringify({
//       email: 'abh125aad@gmail.com',
//       name: 'Abhi',
//       gender: 'male',
//       status: 'active',
//     }),
//   };

//   fetch('https://gorest.co.in/public/v1/users', requestOptions)
//     .then(response => response.json())
//     .then(json => {
//       console.log('Fetch API Response ===postUser', json.data);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// };
// const getUsers = () => {
//   const requestOptions = {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       Authorization:
//         'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408',
//     },
//   };

//   fetch('https://gorest.co.in/public/v1/users', requestOptions)
//     .then(response => response.json())
//     .then(json => {
//       console.log('Fetch API Response', json.data);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// };
// const UpdateUser = () => {
//   const requestOptions = {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       Authorization:
//         'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408',
//     },
//     body: JSON.stringify({
//       email: 'cody3@gmail.com',
//       name: 'Abhi Rai',
//       gender: 'male',
//       status: 'inactive',
//     }),
//   };

//   fetch('https://gorest.co.in/public/v1/users/8969', requestOptions)
//     .then(response => response.json())
//     .then(json => {
//       console.log('Fetch API Response', json.data);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// };
// const deleteUser = () => {
//   const requestOptions = {
//     method: 'DELETE',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//       Authorization:
//         'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408',
//     },
//   };

//   fetch('https://gorest.co.in/public/v1/users/8986', requestOptions)
//     .then(response => response.ok)
//     .catch(error => {
//       console.error(error);
//     });
// };
// export default class FetchAPIExample extends Component {
//   render() {
//     return (
//       <View>
//         <Text
//           style={{fontWeight: 'bold', fontSize: 20, padding: 10, margin: 10}}>
//           Fetch API for your networking Data. API Credit: GoRest
//           https://gorest.co.in
//         </Text>
//         <View
//           style={{
//             margin: 10,
//             marginTop: 50,
//             padding: 20,
//             marginHorizontal: 16,
//           }}>
//           <Button title="POST: Create User" onPress={() => postUser()} />
//         </View>

//         <View
//           style={{
//             margin: 10,
//             marginTop: 20,
//             padding: 20,
//             marginHorizontal: 16,
//           }}>
//           <Button title="Get: Get UserList" onPress={() => getUsers()} />
//         </View>

//         <View
//           style={{
//             margin: 10,
//             marginTop: 20,
//             padding: 20,
//             marginHorizontal: 16,
//           }}>
//           <Button
//             title="PUT / PATCH: Update user"
//             onPress={() => UpdateUser()}
//           />
//         </View>

//         <View
//           style={{
//             margin: 10,
//             marginTop: 20,
//             padding: 20,
//             marginHorizontal: 16,
//           }}>
//           <Button title="Delete: Delete user" onPress={() => deleteUser()} />
//         </View>
//       </View>
//     );
//   }
// }
