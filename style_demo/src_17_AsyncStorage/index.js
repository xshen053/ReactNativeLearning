import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Storage from './storage';

export default class index extends Component {
  storeData = async value => {
    try {
      await AsyncStorage.setItem('mytestt', value);
      alert('store succressfully');
    } catch (e) {
      // saving error
      alert('error');
    }
  };

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('mytestt');
      if (value !== null) {
        alert(value);
      }
    } catch (e) {
      // error reading value
    }
  };

  render() {
    return (
      <View style={[styles.container]}>
        <Button title="store" onPress={() => this.storeData("hey what's up")} />
        <Button title="fetch" onPress={this.getData} />
        <Button title="clear" onPress={Storage.clear} />
        {/* counterpart: */}
        {/* <Button title="clear" onPress={() => Storage.clear()} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
