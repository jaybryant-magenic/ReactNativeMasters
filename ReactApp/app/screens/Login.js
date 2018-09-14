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
  Image,
  TextInput,
  StyleSheet,
  Alert,
  AsyncStorage,
} from 'react-native';

export default class Login extends Component {

    static navigationOptions  = {
        header : null
    }

    constructor(props) {
        super(props);
        this.state = {
            username : "",
            password : ""
        };
    }

    render() {
        return (
            <View style={{flex:1, alignItems:'center',}}>
                <Image source={{uri: 'https://www.funimationfilms.com/wp-content/uploads/2018/06/FunFilms_MHA_bkgd.jpg'}} 
                    loadingIndicatorSource={require('../assets/icons/home.png')}
                    style={{width: 350, height: 200, marginTop: 50, marginBottom: 20,}}
                />
                <View style={styles.field_container}>
                    <Text>Username : </Text>
                    <TextInput style={{width:200,}} 
                        onChangeText= { username => {
                            this.setState({ username })
                        }} 
                        value={ this.state.username }
                        clearButtonMode={'always'} />
                </View>
                <View style={styles.field_container}>
                    <Text>Password : </Text>
                    <TextInput style={{width:200,}} 
                        onChangeText= { password => {
                            this.setState({ password })
                        }} 
                        value={ this.state.password }
                        secureTextEntry={true}
                        clearTextOnFocus={true} />
                </View>
                <View style={styles.login_button}>
                    <Button title="Login" 
                            onPress={ this._onButtonPress } />
                </View>
                
            </View>
        ); 
    }

    _onButtonPress = async () =>  {
        let validated = this.state.username.length > 0 && this.state.password.length > 0;
        if (validated) {
            await this.saveUsername(this.state.username);
            await this.props.navigation.replace('Portal', {
                username: await this.getUsername()
            });
        } else {
            Alert.alert('Error!',
            'Please enter username/password.',
            [
                {
                    text: 'Ok'
                }
            ],
            {
                cancelable: true
            });
        }
        
    }

    async saveUsername(username) {
        try {
            await AsyncStorage.setItem("username", username);
        } catch(error) {
            console.error(error);
        }
    }

    async getUsername() {
        try {
            let username = await AsyncStorage.getItem("username");
            if (username != null) {
                console.log("async " + username);
            }
            return username;
        } catch(error) {
            console.error(error);
        }
    }

}

const styles = StyleSheet.create({
    field_container : {
        flexDirection: "row",
        alignItems: "center",
    },
    login_button: {
        width: 250,
        marginTop:10,
    }
});
