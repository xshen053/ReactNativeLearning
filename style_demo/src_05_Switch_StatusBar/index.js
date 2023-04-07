import React, {Component} from 'react';
import {Text, StyleSheet, View, StatusBar, Switch} from 'react-native';

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      hideStatusBar: false,
    };
  }
  toggleStatusBar = () => {
    this.setState({
      hideStatusBar: !this.state.hideStatusBar,
    });
  };
  render() {
    return (
      <View style={[styles.container]}>
        <StatusBar hidden={this.state.hideStatusBar} />
        <Switch
          trackColor={{false: 'green', true: 'red'}}
          thumbColor={'blue'}
          value={this.state.hideStatusBar}
          onValueChange={this.toggleStatusBar}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
