import React, {Component} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';

export default class JustifyContent extends Component {
  render() {
    return (
      <View>
        <Text> </Text>
        <Text style={[styles.h2]}> align </Text>
        <ScrollView>
          {/* default is column */}
          <Text style={[styles.h3]}>JustifyContent: 'flex-start'(default)</Text>
          <View style={[styles.container]}>
            <Text style={[styles.itemBase]}>Bei Liu</Text>
            <Text style={[styles.itemBase]}>Yu Guan</Text>
            <Text style={[styles.itemBase]}>Fei Zhang</Text>
          </View>
          {/* column_reverse */}
          {/* the order of text is reversed */}
          <Text style={[styles.h3]}>JustifyContent: 'center'</Text>
          <View style={[styles.container, styles.JustifyContentCenter]}>
            <Text style={[styles.itemBase]}>Bei Liu</Text>
            <Text style={[styles.itemBase]}>Yu Guan</Text>
            <Text style={[styles.itemBase]}>Fei Zhang</Text>
          </View>
          {/* row default */}
          <Text style={[styles.h3]}>JustifyContent: 'flex-end'</Text>
          <View style={[styles.container, styles.JustifyContentEnd]}>
            <Text style={[styles.itemBase]}>Bei Liu</Text>
            <Text style={[styles.itemBase]}>Yu Guan</Text>
            <Text style={[styles.itemBase]}>Fei Zhang</Text>
          </View>
          {/* row_reversed */}
          <Text style={[styles.h3]}>JustifyContent: 'space-around'</Text>
          <View
            style={[
              styles.container,
              styles.flexRow,
              styles.JustifyContentAround,
            ]}>
            <Text style={[styles.itemBase]}>Bei Liu</Text>
            <Text style={[styles.itemBase]}>Yu Guan</Text>
            <Text style={[styles.itemBase]}>Fei Zhang</Text>
          </View>
          {/* row_reversed */}
          <Text style={[styles.h3]}>JustifyContent: 'space-evenly'</Text>
          <View
            style={[
              styles.container,
              styles.flexRow,
              styles.JustifyContentEvenly,
            ]}>
            <Text style={[styles.itemBase]}>Bei Liu</Text>
            <Text style={[styles.itemBase]}>Yu Guan</Text>
            <Text style={[styles.itemBase]}>Fei Zhang</Text>
          </View>
          {/* row_reversed */}
          <Text style={[styles.h3]}>JustifyContent: 'space-between'</Text>
          <View
            style={[
              styles.container,
              styles.flexRow,
              styles.JustifyContentBetween,
            ]}>
            <Text style={[styles.itemBase]}>Bei Liu</Text>
            <Text style={[styles.itemBase]}>Yu Guan</Text>
            <Text style={[styles.itemBase]}>Fei Zhang</Text>
          </View>
        </ScrollView>
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
  JustifyContentStart: {
    justifyContent: 'flex-start',
  },
  JustifyContentCenter: {
    justifyContent: 'center',
  },
  JustifyContentEnd: {
    justifyContent: 'flex-end',
  },
  JustifyContentAround: {
    justifyContent: 'space-around',
  },
  JustifyContentEvenly: {
    justifyContent: 'space-evenly',
  },
  JustifyContentBetween: {
    justifyContent: 'space-between',
  },
});
