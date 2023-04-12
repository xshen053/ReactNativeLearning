import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import ListContent from '../lists/content';
import {Header} from '../../components/header';
export default class index extends Component {
  render() {
    return (
      <View>
        <Header title="Lists" view="listitem" />
        <ListContent />
      </View>
    );
  }
}

const styles = StyleSheet.create({});
