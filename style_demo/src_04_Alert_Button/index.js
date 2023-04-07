import React, {Component} from 'react';
import {Text, StyleSheet, View, Alert, Button} from 'react-native';

export default class index extends Component {
  createTwoButtonAlert = () => {
    Alert.alert('title warning', 'content warning', [
      {
        text: 'cancel',
        onPress: () => console.log('Cancel'),
        style: 'cancel',
      },
      {
        text: 'confirm',
        onPress: () => console.log('OK'),
        style: 'default',
      },
    ]);
  };

  createThreeButtonAlert = () => {
    Alert.alert('update prompt', 'find new version, update now?', [
      {
        text: 'cancel',
        onPress: () => console.log('Cancel'),
        // style: 'cancel',
      },
      {
        text: 'confirm',
        onPress: () => console.log('OK'),
        // style: 'default',
      },
      {
        text: 'try it later',
        onPress: () => console.log('remind me later'),
        // style: 'default',
      },
    ]);
  };
  render() {
    return (
      <View style={[styles.container]}>
        <Button
          title="alert"
          onPress={() => {
            alert('I am a button');
          }}
        />

        <Button
          title="Alert.alert"
          onPress={() => {
            Alert.alert('I am a button');
          }}
          color={'red'}
        />

        <Button
          title="two buttons"
          onPress={this.createTwoButtonAlert}
          color={'green'}
        />

        <Button
          title="three buttons"
          onPress={this.createThreeButtonAlert}
          color={'tomato'}
        />
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
