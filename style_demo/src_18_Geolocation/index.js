import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '../src_17_AsyncStorage/storage';

export default class index extends Component {
  componentDidMount() {
    const location = storage.get('coords');
    // if local storage doesn't have that cordinate
    if (location === undefined || location == '') {
      // get location
      Geolocation.getCurrentPosition(
        info => console.log(info),
        // store location after get it successfully
        AsyncStorage.setItem('coords', JSON.stringify(info.coords)),
        error => alert('error', JSON.stringify(error)),
        {
          timeout: 20000,
        },
      );
    }
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
