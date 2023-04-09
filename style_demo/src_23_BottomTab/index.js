import React, {Component} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
function HomeScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Home Screen</Text>
    </View>
  );
}

function NewsScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>News Screen</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
export default class index extends Component {
  render() {
    return (
      <Tab.Navigator
      // screenOptions={route => ({
      //   tabBarIcon: ({focused, color, size}) => {
      //     let iconName;

      //     if (route.name === 'Home') {
      //       iconName = 'Home';
      //     } else if (route.name === 'News') {
      //       iconName = 'News';
      //     }
      //     return <Button title="Hello" size={size} color={color} />;
      //   },
      // })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
  },
});