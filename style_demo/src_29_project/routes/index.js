import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './HomeStack';
import NewsScreen from './NewsStack';
import UserScreen from './UserStack';
const Tab = createBottomTabNavigator();

export default class index extends Component {
  render() {
    return (
      <Tab.Navigator
        // ({route}) != route
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'News') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'User') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="News" component={NewsScreen} />
        <Tab.Screen name="User" component={UserScreen} />
      </Tab.Navigator>
    );
  }
}

const styles = StyleSheet.create({});
