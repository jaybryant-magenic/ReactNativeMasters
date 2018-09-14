import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Linking,
    Alert,
    Image,
    Text,
  } from 'react-native';

export default class NewsItem extends Component {
    render() {
      let {thumbnail} = this.props.article;
      return (
        <TouchableOpacity onPress={this._onPress}>
            <View style={{flex:1, flexDirection:"row", backgroundColor: '#fff', height: 85, padding : 5, alignItems:'center'}}>
                <Image source={{uri: thumbnail}} style={{width:60, height:60,}} />
                <View style={{flexDirection:"column", marginHorizontal:10,}}>
                    <Text style={{fontWeight: 'bold', fontSize: 15, width: 300,}} numberOfLines={2} ellipsizeMode={'tail'}>{this.props.article.title}</Text>
                    <Text style={{fontSize: 8, }}>By {this.props.article.author}</Text>
                    <Text style={{fontSize: 13, width: 300,}} numberOfLines={2} ellipsizeMode={'tail'}>{this.props.article.intro}</Text>
                </View>
            </View>
        </TouchableOpacity>
      );
    }

    _onPress = () => {
        let url = this.props.article.url;
        Linking.canOpenURL(url).then(supported => {
            if (!supported) {
                Alert.alert('Error',
                `Can't open url : ${url}`,
                [{text:'Ok'}],
                {cancelable: true,});
            } else {
                return Linking.openURL(url);
            }
        }).catch(error => {
            console.error(error);
        });
        
    }
}