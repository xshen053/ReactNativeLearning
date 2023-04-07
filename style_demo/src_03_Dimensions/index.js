import React, {Component} from 'react';
import {Text, StyleSheet, View, Dimensions} from 'react-native';

export default class index extends Component {
  render() {
    return (
      <View>
        <Text> scan </Text>
        <View style={[styles.container]}>
          <View style={[styles.itemBase]}>
            <Text style={[styles.h3]}> scan </Text>
          </View>
          <View style={[styles.itemBase]}>
            <Text style={[styles.h3]}> pay </Text>
          </View>
          <View style={[styles.itemBase]}>
            <Text style={[styles.h3]}> wallet </Text>
          </View>
          <View style={[styles.itemBase]}>
            <Text style={[styles.h3]}> commute </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // 控制Component是否换行
    flexWrap: 'wrap',
  },
  itemBase: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00b38a',
    // 响应式布局
    width: Dimensions.get('window').width / 3,
    height: 90,
    borderWidth: 1,
    borderColor: 'yellow',
  },
  h3: {
    fontSize: 20,
  },
});
