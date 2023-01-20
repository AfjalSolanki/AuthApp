// import {StyleSheet, Text, View} from 'react-native';
// import React, {useEffect} from 'react';
// import messaging from '@react-native-firebase/messaging';
// const GetToken = () => {
//   useEffect(() => {
//     gettokendata();
//   }, []);
//   const gettokendata = async () => {
//     let fcmToken = await messaging().getToken();
//     console.warn('======fcmToken======', fcmToken());
//   };
//   return (
//     <View>
//       <Text>GetToken</Text>
//     </View>
//   );
// };

// export default GetToken;

// const styles = StyleSheet.create({});

// import React, {Component} from 'react';
// import {
//   View,
//   Text,
//   KeyboardAvoidingView,
//   TouchableOpacity,
//   Alert,
//   StyleSheet,
//   TextInput,
// } from 'react-native';
// import axios from 'axios';

// class Register extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       loading: false,
//     };
//   }

//   onChangeHandle(state, value) {
//     this.setState({
//       [state]: value,
//     });
//   }

//   doRegister() {
//     const {email, password} = this.state;
//     if (email && password) {
//       const req = {
//         email: email,
//         password: password,
//       };

//       this.setState({
//         loading: true,
//       });

//       axios.post('https://reqres.in/api/register', req).then(
//         response => {
//           this.setState({
//             loading: false,
//           });

//           if (response.status === 200) {
//             Alert.alert('Registration successful', response.message);
//             //do something
//           } else {
//             alert('An error occurred. Please try again later.');
//           }
//         },

//         err => {
//           this.setState({
//             loading: false,
//           });

//           Alert.alert('Could not establish connection', err.message);
//         },
//       );
//     } else {
//       alert('Please complete registration');
//     }
//   }

//   render() {
//     const {email, password, loading} = this.state;
//     return (
//       <View>
//         <KeyboardAvoidingView style={styles.wrapper}>
//           <TextInput
//             autoCapitalize="none"
//             autoCorrect={false}
//             returnKeyType="next"
//             onChangeText={value => this.onChangeHandle('username', value)}
//           />

//           <TextInput
//             secureTextEntry={this.state.hidePassword}
//             autoCapitalize="none"
//             autoCorrect={false}
//             returnKeyType="next"
//             onChangeText={value => this.onChangeHandle('password', value)}
//           />

//           <TouchableOpacity
//             style={{
//               ...styles.btn,
//               backgroundColor: loading ? '#ddd' : '#A40606',
//             }}
//             onPress={() => this.doRegister()}>
//             <Text style={styles.loginText}>
//               {loading ? 'Loading ...' : 'Click Here to Register'}
//             </Text>
//           </TouchableOpacity>
//         </KeyboardAvoidingView>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   btn: {
//     alignSelf: 'stretch',
//     alignItems: 'center',
//     padding: 20,
//     marginTop: 20,
//     borderRadius: 25,
//     backgroundColor: '#A40606',
//   },
//   loginText: {
//     color: '#333',
//     fontSize: 17,
//     fontWeight: 'bold',
//     textTransform: 'uppercase',
//   },
// });

// export default Register;

// React Native Axios – To Make HTTP API call in React Native
// https://aboutreact.com/react-native-axios/

import React from 'react';
//import React in our code.
import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
//import all the components we are going to use.
import axios from 'axios';

const GetToken = () => {
  const getDataUsingSimpleGetCall = () => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/1')
      .then(function (response) {
        // handle success
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      })
      .finally(function () {
        // always executed
        alert('Finally called');
      });
  };

  const getDataUsingAsyncAwaitGetCall = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1',
      );
      console.log(JSON.stringify(response.data));
    } catch (error) {
      // handle error
      alert(error.message);
    }
  };

  const postDataUsingSimplePostCall = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
      .then(function (response) {
        // handle success
        console.log(JSON.stringify('=======', response.data));
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  };

  const multipleRequestsInSingleCall = () => {
    axios
      .all([
        axios
          .get('https://jsonplaceholder.typicode.com/posts/1')
          .then(function (response) {
            // handle success
            console.log('Post 1 : ' + JSON.stringify(response.data));
          }),
        axios
          .get('https://jsonplaceholder.typicode.com/posts/2')
          .then(function (response) {
            // handle success
            console.log('Post 2 : ' + JSON.stringify(response.data));
          }),
      ])
      .then(
        axios.spread(function (acct, perms) {
          // Both requests are now complete
          alert('Both requests are now complete');
        }),
      );
  };

  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, textAlign: 'center'}}>
        Example of Axios Networking in React Native
      </Text>
      {/*Running GET Request*/}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingSimpleGetCall}>
        <Text>Simple Get Call</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={getDataUsingAsyncAwaitGetCall}>
        <Text>Get Data Using Async Await GET</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={postDataUsingSimplePostCall}>
        <Text>Post Data Using POST</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={multipleRequestsInSingleCall}>
        <Text>Multiple Concurrent Requests In Single Call</Text>
      </TouchableOpacity>

      <Text style={{textAlign: 'center', marginTop: 18}}>
        www.aboutreact.com
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    padding: 16,
  },
  buttonStyle: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: '100%',
    marginTop: 16,
  },
});

export default GetToken;
