import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Main from './src/app/Main';
import Home from './src/app/Home';
import Repo from './src/app/Repo';

const Stack = createStackNavigator();

class MainScreen extends Component {
  render() {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          options={{headerShown: false}}
          component={Main}
        />
      </Stack.Navigator>
    );
  }
}
export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Repo" component={Repo} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
