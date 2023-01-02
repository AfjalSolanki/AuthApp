import React, { useState, useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import strings from '../../../contants/lang'
import styles from './styles';
import TextinputWithLable from '../../../components/TextinputWithLable';
import colors from '../../../styles/colors';
import BtnComp from '../../../components/BtnComp'
const Login = () => {
    const [state, setState] = useState({
        isLoading: false,
        email: '',
        password: '',
        isSecure: true,
        isEnable: false
    })
    const { isLoading, email, password, isSecure, isEnable } = state

    const updateState = (data) => setState((state) => ({ ...state, ...data }))

    useEffect(() => {
        if (email !== '' && password !== '') {
            updateState({ isEnable: true })
            return;
        }
        updateState({ isEnable: false })
    }, [email, password])

    const onLogin = () => {
        // actions.login(true)
        alert("Login Success!!!")
    }

    return (
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View style={{margin:20}}>

                    <Text style={styles.headingText}>{strings.LOGIN}</Text>
                    <TextinputWithLable
                        label={strings.USERNAME_OR_EMAIL}
                        value={email}
                        placeholder={strings.PLEASE_ENTER_YOUR_EMAIL}
                        onChangeText={(email) => updateState({ email })}
                    />
                    <TextinputWithLable
                        label={strings.PASSWORD}
                        value={password}
                        placeholder={strings.PLEASE_ENTER_YOUR_PASSWORD}
                        onChangeText={(password) => updateState({ password })}
                        secureTextEntry={isSecure}
                        isSecure={isSecure}
                        onPressSecure={() => updateState({ isSecure: !isSecure })}
                    />
                    <TouchableOpacity style={{ alignSelf: 'center' }}>
                        <Text style={styles.forgotTextStyle}>{strings.FORGOT_YOUR_PASSWORD}</Text>
                    </TouchableOpacity>
                </View>
                <BtnComp
                    isDisable={!isEnable}
                    btnStyle={{ ...styles.btnStyle, backgroundColor: isEnable ? colors.blue : colors.blackOpacity20 }}
                    btnText={strings.LOGIN}
                    textStyle={styles.textStyle}
                    onPress={onLogin}
                />
            </View>
    );
};
export default Login;
