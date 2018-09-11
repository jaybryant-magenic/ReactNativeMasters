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
import { RootStack } from './app/navigators/Main';


export default class App extends Component {
  render() {
    return <RootStack />;
  }
}
