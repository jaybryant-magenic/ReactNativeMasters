import React, {Component} from 'react';
import {
    View,
    ScrollView,
    Image,
    Text,
    Animated,
    Easing,
} from 'react-native';

export default class AnimeDetail extends Component {

    static navigationOptions = ({navigation}) => {
        let {title} = navigation.state.params;
        return {
            title: title,
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            fadeOut: new Animated.Value(1),
            leftPostion: new Animated.Value(1000)
        };
    }

    componentDidMount() {
        Animated.sequence(
            [
                Animated.timing(this.state.leftPostion, {
                    toValue: 0,
                    duration: 1000,
                    easing: Easing.out(Easing.back())
                }).start()
            ],
        );    
    }

    componentWillUnmount() {
        Animated.sequence(
            [
                Animated.timing(this.state.fadeOut, {
                    toValue: 0,
                    duration: 3000
                }).start()
            ]
        );
    }

    render() {
        const { fadeOut, leftPostion } = this.state;
        let { thumbnail, title, description } = this.props.navigation.state.params;
        return(
            <Animated.ScrollView style={{opacity: fadeOut, left: leftPostion,}}>
                <View style={{flex:1, flexDirection: "column", alignItems:"center", padding:10}}>
                    <Image source={{uri:thumbnail}} style={{width:400, height:500, marginBottom: 15}}/>
                    <Text style={{fontSize:20, fontWeight: 'bold', marginBottom:15}}>{title}</Text>
                    <Text style={{fontSize: 15, fontWeight: '300', marginBottom: 50,}}>{description}</Text>
                </View>
            </Animated.ScrollView>
        );
    }
}