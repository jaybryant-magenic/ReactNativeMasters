/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  Button,
  View,
  TextInput
} from 'react-native';
import {
  createStackNavigator
} from 'react-navigation';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {text:''};
  }
  render() {
    return (
      <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
        <Text>Enter your name : </Text>
        <TextInput style={{width:300,}} onChangeText={(text) => this.setState({text})} value={this.state.text}/>
        <Button title="Enter" 
          onPress={ () => 
          this.props.navigation.navigate('Detail', {
            name: this.state.text
          })
          } />
      </View>
    ); 
  }
}

class DetailScreen extends Component {
  render() {
    return (
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>Welcome to React Native, {this.props.navigation.getParam('name','React')}!</Text>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Detail: DetailScreen,
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