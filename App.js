import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AppNavigation from './src/Navigation/AppNavigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';
// import InstagramNavigation from './App/InstagramNavigation';
// import SideandbottomNaviagtion from './src/sideandbottomnaviagtion-master/SideandbottomNaviagtion';
// import ReactNativeNavigation from './ReactNativeUI/ReactNativeNavigation';
export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
      {/* <ReactNativeNavigation /> */}
      {/* <InstagramNavigation /> */}
      {/* <SideandbottomNaviagtion /> */}
    </Provider>
  );
}
const styles = StyleSheet.create({});

// import React, {Component} from 'react';
// import {StatusBar, View, Text} from 'react-native';
// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
// import {store, persistor} from './Multilanglocaliztion/src/store/';
// import Screen from './Multilanglocaliztion/src/screen';

// export default class App extends Component {
//   state = {isReduxLoaded: false};
//   onBeforeLift = () => {
//     this.setState({isReduxLoaded: true}, () => {});
//   };
//   render() {
//     return (
//       <Provider store={store}>
//         <StatusBar barStyle="dark-content" />
//         <PersistGate onBeforeLift={this.onBeforeLift} persistor={persistor}>
//           <Screen />
//         </PersistGate>
//       </Provider>
//     );
//   }
// }
