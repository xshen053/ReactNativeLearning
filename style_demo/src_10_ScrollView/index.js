import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';

export default class index extends Component {
  render() {
    return (
      <ScrollView
        style={[styles.scrollView]}
        contentContainerStyle={{margin: 30}}>
        <Text style={{fontSize: 30}}>
          {' '}
          lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1=lorem1={' '}
        </Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ddd',
    marginHorizontal: 20,
  },
});
