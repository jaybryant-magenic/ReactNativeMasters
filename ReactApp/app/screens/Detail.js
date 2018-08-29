/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

export default class Detail extends Component {
    static navigationOptions  = {
        title : 'Detail'
    }

    render() {
      const { navigation } = this.props;
      name = navigation.getParam('name', null);
      return (
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
          <Text>Welcome to React Native, { navigation.getParam('name',null) }!</Text>
        </View>
      );
    }
}
