import React, { Component } from 'react';
import {
  View,
  FlatList,
  Button,
  Text,
} from 'react-native';
import NewsService from '../data/NewsService';
import Article from '../items/Article';

export default class News extends Component {
    static navigationOptions  = {
      header: null,
    }

    constructor(props) {
        super(props);
        this.state = {
          refreshing: false,
          list: [],
        }
    }

    componentDidMount() {
        this.loadData();
    }

    loadData() {
        this.setState({refreshing:true,});

        NewsService.GetNews((response) => {
          this.setState({list: response,}, () => {
            this.setState({refreshing: false});
          });
        });
    }

    render() {
      if (this.state.list.length > 0 || this.state.refreshing) {
        return (<FlatList 
            data={this.state.list}
            refreshing={this.state.refreshing}
            onRefresh={this.loadData}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
          />)
      }

      return (
        <View style={{flex:1, flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
              <Text style={{fontSize:25, fontWeight:'bold',}}>No News available.</Text>
              <Button onPress={this.loadData.bind(this)} title="Reload" />
        </View>
      );
    }

    _keyExtractor = (item, index) => `${index}`;

    _renderItem = ({item}) => (
      <Article article={item}/>
    );
}
