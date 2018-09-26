import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    Image,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {RNCamera} from 'react-native-camera';
import Camera from './Camera';
import Gallery from './Gallery';

export default class Photos extends Component {

    static navigationOptions = {
        title: 'Photos',
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Swiper loop={true}>
                <Camera /> 
                <Gallery />
            </Swiper>
            
        );
    }
}
