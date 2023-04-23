import React, { Component } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import store from "../../store/index";
import { sendAction } from "../../action";

export default class Home extends Component {
  handleClick = () => {
    const action = sendAction();
    store.dispatch(action);
  };

  render() {
    return (
      <View>
        <Button title="Click me!" onPress={this.handleClick} />;
      </View>
    );
  }
}

const styles = StyleSheet.create({});
