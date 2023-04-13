import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Title from './title';

export default class Task extends Component {
  render() {
    return (
      <View style={styles.items}>
        <Title text={'MORNING'} />
        {/* <Title text={'AFTERNOON'} />
        <Title text={'EVENING'} />
        <Title text={'NIGHT'} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    // textAlign: 'center',
    justifyContent: 'center',

    marginBottom: 20,
  },
  date: {
    fontSize: 30,
  },
  items: {
    marginTop: 20,
  },
});
