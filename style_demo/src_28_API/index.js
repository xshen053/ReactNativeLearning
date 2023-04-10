import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default class index extends Component {
  getData = () => {
    let key = '';
    let location = '112.222.39.222';
    const url = `https://devapi.qweather.com/v7/indices/3d?key=${key}&location=${location}`;
    fetch(url, {
      method: 'GET',
    })
      .then(res => {
        console.log(res);
        alert('success', 'request successfully');
      })
      .catch(err => {
        alert('error', JSON.stringify(err));
      });
  };

  render() {
    return (
      <View style={[styles.container]}>
        <Button title="get data" onPress={this.getData} />
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
