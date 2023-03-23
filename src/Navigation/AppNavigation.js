import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import SplashScreen from '../screen/SplashScreen';
import LoginScreen from '../screen/LoginScreen';
import RegistrationScreen from '../screen/RegistrationScreen';
import Tabe from '../screen/Tabe';
import OnboardingScreen from '../screen/OnboardingScreen';
import WelcomeScreen from '../screen/WelcomeScreen';
import Dropdown from '../screen/Dropdown';
import DummyApi from '../screen/DummyApi';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Sliderbar from '../screen/Sliderbar';
import Get_Data from '../screen/Get_Data';
import ListData from '../screen/ListData';
import ReduxScreen from '../screen/ReduxScreen';
import ApiDummy from '../screen/ApiDummy';
import Maps from '../screen/Maps';
import DetailsScreen from '../screen/petAdoptionApp/DetailsScreen';
import HomeScreen from '../screen/petAdoptionApp/HomeScreen';
import DrawerNavigator from '../Navigation/DrawerNavigator';
import Api from '../screen/Api';
import Login from '../screen/SnapDesign/Login/Login';
import Signup from '../screen/SnapDesign/Signup/Signup';
import ReactNativeDateTimePicker from '../screen/React Native Date & Time Picker with Modal - Android & Ios/ReactNativeDateTimePicker';
import APIContainer from '../screen/APIContainer';
import GetToken from '../screen/GetToken';

const AppNavigation = () => {
  ///////DrawerStack//////
  const Drawer = createDrawerNavigator();
  const DrawerStack = () => (
    <Drawer.Navigator
      drawerType={'slide'}
      drawerStyle={{width: '90%'}}
      drawerContent={props => <Sliderbar {...props} />}>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
  ///////Stack//////
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{headerShown: false}}>
                  <Stack.Screen name="HomeScreen" component={BottomTabs} />

        <Stack.Screen name="ReduxScreen" component={ReduxScreen} />

        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Tabe" component={Tabe} />

        <Stack.Screen name="Api" component={Api} />

        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />

        <Stack.Screen name="Dropdown" component={Dropdown} />

        <Stack.Screen name="GetToken" component={GetToken} />
        <Stack.Screen
          name="ReactNativeDateTimePicker"
          component={ReactNativeDateTimePicker}
        />
        <Stack.Screen name="APIContainer" component={APIContainer} />
        <Stack.Screen name="Dashboard" component={DrawerStack} />
        <Stack.Screen name="Signups" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ApiDummy" component={ApiDummy} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="ListData" component={ListData} />
        <Stack.Screen name="Get_Data" component={Get_Data} />
        <Stack.Screen name="DummyApi" component={DummyApi} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Signup" component={Signup} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigation;
