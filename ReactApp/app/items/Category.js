/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class Category extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let category = this.props.category.name;
        return (
            <TouchableOpacity onPress={this._categoryPress}>
                <View style={styles.item}>
                    <Text>{category}</Text>
                    <Image source={require('../assets/icons/forward.png')} style={{height:15, width:15,}} />
                </View>
            </TouchableOpacity>
        );
    }

    _categoryPress = () => {
        this.props.navigation.navigate('Animes', this.props.category);
        console.log(`Navigated to Animes - ${this.props.category.name}.`);
    }

}

const styles = StyleSheet.create({
    item : {
        flex: 1,
        flexDirection: 'row', //primary axis (column -vertical is default, row - horizontal)
        justifyContent: 'space-between', //distribution of children along primary axis
        alignItems: 'center', //alignment of children along secondary axis
        backgroundColor: '#ffffff',
        height: 50,
        padding: 10,
    }
});
