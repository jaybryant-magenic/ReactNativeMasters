/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import {
  createStackNavigator
} from 'react-navigation';
import Home from './app/screens/Home';
import Detail from './app/screens/Detail';

const RootStack = createStackNavigator(
  {
    Home: Home,
    Detail: Detail,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}