import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default class FlexDirection extends Component {
  render() {
    return (
      <View>
        <Text> </Text>
        <Text style={[styles.h2]}> main axis </Text>
        <View>
          <Text style={[styles.h3]}>flexDirection: 'column'(default)</Text>
          <View style={[styles.container]}>
            <Text style={[styles.itemBase]}>Bei Liu</Text>
            <Text style={[styles.itemBase]}>Yu Guan</Text>
            <Text style={[styles.itemBase]}>Fei Zhang</Text>
          </View>
          <Text style={[styles.h3]}>flexDirection: 'column_reverse'</Text>
          <View style={[styles.container, styles.flexColumnReverse]}>
            <Text style={[styles.itemBase]}>Bei Liu</Text>
            <Text style={[styles.itemBase]}>Yu Guan</Text>
            <Text style={[styles.itemBase]}>Fei Zhang</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 150,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  h3: {
    fontSize: 20,
    marginHorizontal: 10,
  },
  h2: {
    fontSize: 40,
    marginHorizontal: 10,
  },
  itemBase: {
    height: 30,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#dfb',
    padding: 4,
    textAlign: 'center',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexColumnReverse: {
    flexDirection: 'column-reverse',
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexRowReverse: {
    flexDirection: 'row-reverse',
  },
});
