import React, {Component} from 'react';
import {
    View,
    SectionList,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import Anime from '../items/Anime';

export default class Animes extends Component {
    static navigationOptions = ({navigation}) => {
        let {name} = navigation.state.params;
        return {
            title: name,
        };
    }

    constructor(props) {
        super(props);
        this.state = {
            list: this.props.navigation.state.params.contents,
        }
    }

    render() {
        if (this.state.list.length === 0) {
            return (
                <View style={{flex:1, flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
                    <Text style={{fontSize:25, fontWeight:'bold',}}>No animes available.</Text>
                </View>
            );
        } 

        return(
            <SectionList 
                sections={this.state.list}
                renderSectionHeader={this._renderSectionHeader}
                renderItem={this._renderItem}
            />
        );
        
    }

    _renderSectionHeader = ({section}) => {
        return (
            <View style={styles.itemHeaderStyle}>
                <Text style={styles.itemHeaderTextStyle}>{section.section}</Text>
            </View>
        );
    }

    _renderItem = ({item, index, section}) => {
        return (
            <Anime anime={item} navigation={this.props.navigation} />
        );
    }
}

const styles = StyleSheet.create({
    itemHeaderStyle: {
        backgroundColor: '#f0f0f0',
        padding: 5,
    },
    itemHeaderTextStyle: {
        fontSize: 15,
        fontWeight: 'bold',
    },
});

