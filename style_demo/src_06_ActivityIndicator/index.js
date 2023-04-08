import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  Platform,
} from 'react-native';

export default function index() {
  if (Platform.OS === 'android') {
    alert('android application');
  } else if (Platform.OS === 'ios') {
    alert('ios application');
  }
  return (
    <View style={[styles.container]}>
      <ActivityIndicator color="blue" size={'large'} />
      <ActivityIndicator color="green" size={'small'} />
      <ActivityIndicator color="#00d0ff" size={70} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
  },
});
