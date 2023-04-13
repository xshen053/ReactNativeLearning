import React, {Component} from 'react';
import {Text, StyleSheet, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {TouchEventType} from 'react-native-gesture-handler/lib/typescript/TouchEventType';

const Prescription = props => {
  return (
    <View>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <Text>{props.text}</Text>
          <Text>{props.text}</Text>
          <Text>{props.text}</Text>
          <Text>{props.text}</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 25,
  },
  itemLeft: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

export default Prescription;
