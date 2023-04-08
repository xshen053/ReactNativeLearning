import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, Dimensions} from 'react-native';

export default class index extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Image style={[styles.itemImage]} source={require('./images/1.png')} />
        <Image
          style={[styles.logo]}
          source={{
            uri: 'https://frenchitalian.washington.edu/sites/frenchitalian/files/styles/large/public/images/quad-drone-humanities-first_0.jpg?itok=vfO0duli',
          }}
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
  itemImage: {
    height: 200,
    width: Dimensions.get('window').width,
    marginVertical: 20,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    marginVertical: 20,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
