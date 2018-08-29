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

export default class Home extends Component {

    static navigationOptions  = {
        header : null
    }

    constructor(props) {
        super(props);
        this.state = {
            text : "",
        };
    }

    render() {
        return (
            <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                <Text>Enter your name : </Text>
                <TextInput style={{width:300,}} 
                    onChangeText= { text => {
                        this.setState({ text })
                    }} 
                    value={ this.state.text } />
                {this.state.text.length > 0 && (
                    <Button title="Enter" 
                        //in order to use this, need to bind this because there is an issue with JSX
                        onPress={ this.onButtonPress.bind(this) } />
                )}
            </View>
        ); 
    }

    onButtonPress() {
        this.props.navigation.navigate('Detail', {
            name: this.state.text });
    }

}
