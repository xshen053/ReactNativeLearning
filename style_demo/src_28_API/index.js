import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {getThreeDays} from './api';

export default class index extends Component {
  getData = () => {
    const coords = {
      longitude: 112.222,
      latitude: 39.444,
    };
    getThreeDays(coords)
      .then(res => {
        console.log(res);
        alert('succeed', 'request successfully');
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
