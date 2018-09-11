/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
} from 'react-native';
import Category from '../items/Category';
import {FullData} from '../data/AnimeRepository';

export default class Categories extends Component {
    static navigationOptions  = {
        header: null,
    }

    render() {
      console.log(FullData);
      return (
        <View>
          <FlatList
            data={FullData}
            renderItem={this._renderItem} />
        </View>
        
      );
    }

    _renderItem = ({item}) => (
      <Category 
        id={item.id}
        navigation={this.props.screenProps}
        category={item} />
    );

    _keyExtractor = (item, index) => item.id;

}

const styles = StyleSheet.create({
});
