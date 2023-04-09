import React, {Component} from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
function HomeScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>Home Screen</Text>
      <Button
        title={'jump to news'}
        onPress={() => prop.navigation.navigate('News')}
      />
    </View>
  );
}

function NewsScreen(prop) {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.text]}>News Screen</Text>
      <Button
        title={'jump to home'}
        onPress={() => prop.navigation.navigate('home')}
      />
    </View>
  );
}
const Stack = createStackNavigator();

export default class index extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="News"
        // headerMode={'none '}
      >
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            title: 'homepage',
            headerStyle: {
              backgroundColor: 'red',
            },
            headerRight: () => (
              <TouchableOpacity onPress={() => alert('Hello')}>
                <Text>Hello</Text>
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen name="News" component={NewsScreen} />
      </Stack.Navigator>
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
