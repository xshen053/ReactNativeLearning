import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
// import {getThreeDays} from './api';
import fetchData from './api_test';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drugData: null,
    };
  }

  componentDidMount() {
    this.fetchDataFromAPI();
  }

  async fetchDataFromAPI() {
    const json = await fetchData();
    this.setState({drugData: json});
  }

  render() {
    const {drugData} = this.state;
    return (
      <View style={styles.container}>
        {/* <Text>fkdj</Text> */}
        {drugData ? (
          <Text>Drug name: {drugData.id}</Text>
        ) : (
          <Text>Loading...</Text>
        )}
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
});
