import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {connect} from 'react-redux';
import {increment, decrement} from '../../redux/reducers/Counter';

const mapStateToProps = state => {
  return {
    num: state.Counter.num,
  };
};

class Counter extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Button title={'-'} onPress={() => this.props.decrement(1)} />
        <Text> {this.props.num} </Text>
        <Button title={'-'} onPress={() => this.props.increment(1)} />
      </View>
    );
  }
}

export default connect(mapStateToProps, {increment, decrement})(Counter);

const styles = StyleSheet.create({});
