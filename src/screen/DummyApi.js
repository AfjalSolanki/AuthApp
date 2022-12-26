
// import React, { useState, useEffect } from 'react';
// import { ImageSlider } from "react-native-image-slider-banner";
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
// import Loader from '../components/Loader';
// import { SliderBox } from "react-native-image-slider-box";

// const Test = ({ navigation }) => {
//   const [email, setemail] = useState('')
//   const [password, setpassword] = useState('')
//   const [isLoading, setisLoading] = useState(false)

//   const doRegister = () => {
//     const req = {
//       email: email,
//       password: password,
//     };
//     axios.post('https://reqres.in/api/register', req)
//       .then((response) => response.json())
//       .then((json) => {
//         console.log(JSON.stringify(response.data));
//       })
//       .catch((error) => {
//         console.error(error);
//       });

//   }

//   useEffect(() => {
//     gatapi()
//   }, [])
//   const gatapi = () => {

//   }
//   return (
//     <View style={styles.wrapper}>
//       <KeyboardAvoidingView >
//         <Loader visible={isLoading} />
//         <View style={styles.input}>
//           <TextInput
//             autoCapitalize="none"
//             autoCorrect={false}
//             returnKeyType="next"
//             value={email}
//             onChangeText={(value) => { setemail(value) }} />
//         </View>
//         <View style={styles.input}>
//           <TextInput
//             autoCapitalize="none"
//             autoCorrect={false}
//             returnKeyType="next"
//             value={password}
//             onChangeText={(value) => { setpassword(value) }}
//           />
//         </View>

//         <TouchableOpacity
//           style={{
//             ...styles.btn,
//             backgroundColor: '#fff'
//           }}
//           onPress={() => { doRegister() }} >
//           <Text style={styles.loginText}>
//             login
//           </Text>
//         </TouchableOpacity>

//       </KeyboardAvoidingView>
//     </View>
//   )

// }

// export default Test

// const styles = StyleSheet.create({

//   btn: {
//     width: '100%',
//     alignSelf: 'stretch',
//     alignItems: 'center',
//     padding: 15,
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
//   wrapper: {
//     // alignItems: 'center',
//     justifyContent: 'center',
//     margin: 10,
//     flex: 1
//   },
//   input: {
//     backgroundColor: '#ffff',
//     height: 45,
//     marginVertical: 10,
//     borderWidth: 1, borderColor: 'red'
//   }

// })
import {
    View,
    Text,
    KeyboardAvoidingView,
    TouchableOpacity,
    Alert,
    StyleSheet,
    TextInput,
    FlatList, Modal, Dimensions
  } from 'react-native';
  import axios from 'axios';
  import Loader from '../components/Loader';
  import React, { useState, useEffect } from 'react';
  import ButtomComman from '../components/ButtomComman';
  const baseURL = 'https://jsonplaceholder.typicode.com';
  const deviceWidth = Dimensions.get('window').width;
  
  const Api_baseURL = 'https://user6.kustom.io/Coach-up/api/';
  
  const DummyApi = () => {
    const [showModal, setShowModal] = useState(true);
    const [notes, setNotes] = useState([]);
    const [note, setNote] = useState();
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(false)
    const GetApi = () => {
      setloading(true);
      axios({
        method: 'GET',
        url: `${baseURL}/posts`,
      })
        .then(res => setData(res.data),
          console.log('=======GetApi=======', data))
  
        .catch(err => console.log(err));
      setloading(false);
  
    };
    const GetApi_by_id = () => {
      axios({
        method: 'GET',
        url: `${baseURL}/posts/11`,
      })
        .then(res => console.log("======GET=====", res.data))
        .catch(err => console.log(err));
    }
    const Post_Api = () => {
  
      axios({
        method: 'POST',
        url: `${baseURL}/posts`,
        body: JSON.stringify({
          id: 101,
          title: 'New Title',
          boldy: 'New Body for the data.'
        })
      }).then(res => console.log("======POST=====", res))
        .catch(err => console.log(err))
    }
    const Patch_Api = () => {
      axios({
        method: "PATCH",
        url: `${baseURL}/posts/11`,
        body: JSON.stringify({
          title: 'Updated Title',
        })
      }).then(res => console.log("=======PATCH=PATCH=====", res))
        .catch(err => console.log(err))
    }
    const Dlete_Api = () => {
      axios({
        method: "DELETE",
        url: `${baseURL}/posts/11`
      }).then(res => console.log("====DELETE=====", res))
        .catch(err => console.log(err))
    }
  
    const addNote = () => {
      if (note.length !== 0) {
        var notesCpy = notes;
        notesCpy.push(note);
        setNotes(notesCpy);
  
        setNote('');
      }
    };
  
  
    const PostApi = () => {
      axios({
        method: 'POST',
        url: `https://user6.kustom.io/Coach-up/api/login`,
        body: JSON.stringify({
          email: 'test007@test.com',
          password: 1234567,
        })
      }).then(res => console.log("======loginPOST====", res))
        .catch(err => console.log(err))
    }
    const Signup = () => {
      var formdata = new FormData();
      formdata.append("first_name", "dummy07");
      formdata.append("email\n", "tdummy900@gmail.com");
      formdata.append("password", "123456");
      formdata.append("confirm_password\n", "123456");
      formdata.append("phone_number\n", "123456789");
  
      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
      };
  
      fetch("https://user6.kustom.io/Coach-up/api/register", requestOptions)
        .then(response => response.text())
        .then(result => console.log('=============',result))
        .catch(error => console.log('error', error));
  
    }
    const SingUp = () => {
      // console.log(email, pass, name, phoneNumber)
      axios
        .post("https://user6.kustom.io/Coach-up/api/register", {
          first_name: 'afjal07',
          email: 'text900@gmail.com ',
          password: 123456,
          confirm_password: 123456,
          phone_number: 123456789999
  
        })
        .then((response) => {
          console.log("345345345", response);
        })
        .catch((err) => {
          throw err;
        });
    };
    // const registerUser = async () => {
    //   const data = {
    //     first_name: 'afjal07',
    //     email: 'text900@gmail.com ',
    //     password: 123456,
    //     confirm_password: 123456,
    //     phone_number: 123456789999
    //   };
  
    //   const config = {
    //     method: 'post',
    //     data: data,
    //     url: 'https://user6.kustom.io/Coach-up/api/register',
    //   };
    //   axios(config)
    //     .then(async (response) => {
    //       console.log('response', response);
    //       //you can use here a state to set your data response
    //     })
    //     .catch((error) => {
    //       console.log(`error`, error.response);
    //     });
    // };
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <Loader visible={loading} />
  
        <View style={{ margin: 10 }}>
          <Text>Test</Text>
          <ButtomComman
            Title='GetApi'
            onPress={() => GetApi()}
          />
          <ButtomComman
            Title='GetApi_by_id'
            onPress={() => GetApi_by_id()}
          />
          <ButtomComman
            Title='Post_Api'
            onPress={() => Post_Api()}
          />
          <ButtomComman
            Title='Patch_Api'
            onPress={() => Patch_Api()}
          />
          <ButtomComman
            Title='Dlete_Api'
            onPress={() => Dlete_Api()}
          />
          <ButtomComman
            Title='PostApi'
            onPress={() => PostApi()}
          />
          <ButtomComman
            Title='Signup'
            onPress={() => Signup()}
          />
          {/* <View style={styles.form}>
            <TextInput
              value={note}
              onChangeText={setNote}
              placeholder="Enter the task"
              style={styles.field}
            />
            <View>
              <TouchableOpacity onPress={addNote}>
                <Text style={styles.btn}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
          {notes.length === 0 ? (
            <Text style={{ fontSize: 28, marginTop: 20, textAlign: 'center' }}>
              No Task added..
            </Text>
          ) : (
            <View>
              {notes.map((note, index) => (
                <Text key={index} style={{ margin: 16, borderRadius: 40, padding: 10, fontSize: 22, elevation: 4, backgroundColor: 'white' }}>
                  {note}
                </Text>
              ))}
            </View>
          )} */}
          <FlatList
            data={data}
            ListEmptyComponent={() => (
              <Text
                style={{
                  fontSize: 40,
                  color: 'black',
                  textAlign: 'center',
                }}>
                No Data
              </Text>
            )}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <View style={{ paddingHorizontal: 10 }}>
                <Text style={{ fontSize: 22, color: 'black' }}>Id: {item.id}</Text>
                <Text style={{ fontSize: 22, color: 'black' }} numberOfLines={1}>Title: {item.title}</Text>
                <Text style={{ fontSize: 22, color: 'black' }} numberOfLines={1}>Body: {item.body}</Text>
              </View>
            )}
          />
        </View>
      </View>
    )
  }
  
  export default DummyApi
  
  const styles = StyleSheet.create({
    heading: {
      fontSize: 28,
      marginVertical: 40,
      width: deviceWidth,
      textAlign: 'center',
      color: 'blue',
      fontWeight: 'bold',
      textShadowColor: 'blue',
      textShadowRadius: 2,
    },
    field: {
      borderColor: 'black',
      borderWidth: 1,
      width: 3 * (deviceWidth / 4),
      borderRadius: 40,
      paddingLeft: 20,
    },
    form: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 20
    },
    btn: {
      fontSize: 28,
      height: 50,
      width: 50,
      textAlign: 'center',
      backgroundColor: 'gray',
      borderRadius: 50,
      paddingTop: 4,
    },
  
  })
  