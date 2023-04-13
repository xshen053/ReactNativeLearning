import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Prescription from './Prescription';

export default class index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.tasksWrapper}>
          <Text style={styles.sectionTitle}>Prescription</Text>
          {/* <Text style={styles.date}>Apr 11, 2023</Text> */}
          <View style={styles.items}>
            <Prescription text={'Prescription1'} />
            <Prescription text={'Prescription2'} />
            <Prescription text={'Prescription3'} />
            <Prescription text={'Prescription4'} />
          </View>
        </View>
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
    marginTop: 30,
  },
});
