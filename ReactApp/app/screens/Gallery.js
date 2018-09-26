import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    Button,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export default class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: require('../assets/icons/photos.png'),
        }
    }

    render() {
        return (
            <View style={{flex: 1,flexDirection: 'column', alignItems:'center', marginVertical: 10,}}>
                <Text style={{color:'#000', fontSize: 25, fontWeight: 'bold',}}>
                    Using ImagePicker
                </Text>
                <Image source={this.state.image}
                    style={{width:300, height: 300,}} />
                <Button style={{margin:20,}}
                    title="Select" onPress={this.openGallery.bind(this)}/>
            </View>
        );
    }

    openGallery = () => {
        var options = {
            title: 'Select Image',
        }

        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                console.log('No photos selected.');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                this.setState({
                    image: {uri: response.uri}
                });
            }
        });
    }

}
