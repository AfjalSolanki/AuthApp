import messaging from '@react-native-firebase/messaging';
import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import strings from '../../../contants/lang';
import styles from './styles';
import TextinputWithLable from '../../../components/TextinputWithLable';
import colors from '../../../styles/colors';
import BtnComp from '../../../components/BtnComp';
const Signup = () => {
  const [state, setState] = useState({
    isLoading: false,
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    isSecure: true,
  });
  const {isLoading, email, password, firstName, lastName, userName, isSecure} =
    state;

  const updateState = data => setState(state => ({...state, ...data}));

  const onSignup = () => {
    alert('Signup');
  };

  useEffect(() => {
    gettokendata();
  }, []);
  const gettokendata = async () => {
    console.log('======fcmToken======', messaging());
    console.log("jjjj")
  };
  return (
    <View style={{flex: 1, justifyContent: 'space-between'}}>
      <View style={{margin: 20}}>
        <Text style={styles.headingText}>{strings.CREATE_YOUR_ACCOUNT}</Text>
        <TextinputWithLable
          label={strings.FIRST_NAME}
          value={firstName}
          placeholder={strings.ENTER_YOUR_FIRST_NAME}
          onChangeText={firstName => updateState({firstName})}
        />
        <TextinputWithLable
          label={strings.LAST_NAME}
          value={lastName}
          placeholder={strings.ENTER_YOUR_LAST_NAME}
          onChangeText={lastName => updateState({lastName})}
        />
        <TextinputWithLable
          label={strings.USER_NAME}
          value={userName}
          placeholder={strings.ENTER_YOUR_USER_NAME}
          onChangeText={userName => updateState({userName})}
        />
        <TextinputWithLable
          label={strings.USERNAME_OR_EMAIL}
          value={email}
          placeholder={strings.PLEASE_ENTER_YOUR_EMAIL}
          onChangeText={email => updateState({email})}
        />
        <TextinputWithLable
          label={strings.PASSWORD}
          value={password}
          placeholder={strings.PLEASE_ENTER_YOUR_PASSWORD}
          onChangeText={password => updateState({password})}
          secureTextEntry={isSecure}
          isSecure={isSecure}
          onPressSecure={() => updateState({isSecure: !isSecure})}
        />
        <TouchableOpacity style={{alignSelf: 'center'}}>
          <Text style={styles.forgotTextStyle}>
            {strings.FORGOT_YOUR_PASSWORD}
          </Text>
        </TouchableOpacity>
      </View>
      <BtnComp
        btnStyle={styles.btnStyle}
        btnText={strings.SIGNUP_AND_ACCEPT}
        textStyle={styles.textStyle}
        onPress={onSignup}
      />
    </View>
  );
};
export default Signup;
