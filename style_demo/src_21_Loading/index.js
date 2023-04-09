import React, {Component} from 'react';
import {Text, StyleSheet, View, ActivityIndicator} from 'react-native';

export default class index extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.loading]}>
          <ActivityIndicator color={'white'} />
          <Text style={[styles.loadingTitle]}>loading......</Text>
        </View>
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
  loading: {
    backgroundColor: '#999',
    height: 100,
    width: 130,
    borderRadius: 20,
    padding: 20,
  },
  loadingTitle: {
    textAlign: 'center',
    color: 'white',
    marginTop: 20,
  },
});
