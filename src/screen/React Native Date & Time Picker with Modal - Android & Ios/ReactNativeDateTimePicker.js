import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import Button from '../../components/Button';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import axios from 'axios';
const ReactNativeDateTimePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [selectdDate, setSelectdDate] = useState('selact Date');
  const [selectdTime, setSelectdTime] = useState('selact Time');
  const [Listdata, setListdata] = useState([]);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = date => {
    console.log('A date has been picked: ', date);
    const dt = new Date(date);
    const x = dt.toISOString().split('T');
    const x1 = x[0].split('-');
    console.log(x1[2] + '/' + x1[1] + '/' + x1[0]);
    setSelectdDate(x1[2] + '/' + x1[1] + '/' + x1[0]);
    hideDatePicker();
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };
  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };
  const handleTimeConfirm = date => {
    console.log('A time has been picked: ', date);
    const dt = new Date(date);
    const time = dt.toLocaleTimeString();
    console.log(time);
    setSelectdTime(time);
    hideTimePicker();
  };
  useEffect(() => {
    GetData();
  }, []);

  const GetData = () => {
    // var axios = require('axios');
    var data = '';

    var config = {
      method: 'get',
      url: 'https://fakestoreapi.com/products',
      headers: {},
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify('========', response));
        // setListdata(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
      }}>
      <Button
        title="show Date Picker"
        onPress={() => {
          showDatePicker();
        }}
      />
      <Text>showDate {selectdDate}</Text>
      <Button
        title="show Time Picker"
        onPress={() => {
          showTimePicker();
        }}
      />
      <Text>showTime {selectdTime}</Text>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
      />
    </View>
  );
};

export default ReactNativeDateTimePicker;

const styles = StyleSheet.create({});
