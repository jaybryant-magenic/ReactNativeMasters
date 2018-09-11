import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

export default class Anime extends Component {
    render() {
        let image = this.props.anime.thumbnail;
        let title = this.props.anime.title;
        let description = this.props.anime.description;
        return (
            <TouchableOpacity onPress={this._onItemPress}>
                <View style={styles.itemStyle}>
                    <View style={{flexDirection: "row", alignItems:"center"}}>
                        <Image style={{height:80, width:60, marginRight: 5,}}
                            defaultSource={require('../assets/icons/profile.png')}
                            source={{uri: image}} />
                        <View style={{flexDirection: "column"}}>
                            <Text style={{fontSize:15, fontWeight: 'bold', }}>{title}</Text>
                            <Text numberOfLines={4} ellipsizeMode={'tail'} style={{width:300,}}>{description}</Text>
                        </View>
                    </View>

                    <Image source={require('../assets/icons/forward.png')} style={{height:15, width:15,}} />
                </View>
            </TouchableOpacity>
        );
    }

    _onItemPress = () => {
        this.props.navigation.navigate('AnimeDetail', this.props.anime);
    }
}

const styles = StyleSheet.create({
    itemStyle: {
        flexDirection:"row",
        justifyContent: "space-between",
        alignItems: 'center',
        height: 90,
        backgroundColor: '#fff',
        padding: 5,
    },
});