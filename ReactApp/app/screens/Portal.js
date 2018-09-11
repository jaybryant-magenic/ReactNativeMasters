/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Alert,
  BackHandler,
} from 'react-native';
import {PortalTab} from '../navigators/PortalTab';

export default class Portal extends Component {

    static navigationOptions = ({navigation}) => {
        let {username} = navigation.state.params;
        return {
            title: `Anime Portal - Hi, ${username}!`
        }
    }

    render() {
        console.log(this.props.navigation.state.params);
        return (
            <PortalTab screenProps={this.props.navigation} />
        );
    }

    componentDidMount() {
       BackHandler.addEventListener("hardwareBackPress", this._handleBackPress);
    }

    componentWillUnmount() {
       BackHandler.removeEventListener("hardwareBackPress", this._handleBackPress);
    }

    _handleBackPress = () => {
        console.log("Back is pressed.");
        Alert.alert(
            'Log Out',
            'Are you sure?',
            [
                {text: 'Yes', onPress: () => this.props.navigation.replace('Login')},
                {text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            ],
            { cancelable: false }
          )
        return true;
    }

}
