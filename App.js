/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { Component } from 'react';
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ImagePicker from 'react-native-image-picker';

const options = {
  title: 'Select image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  }
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      photo: null
    };
    this.handleAddPhotoButtonPress = this.handleAddPhotoButtonPress.bind(this);
  }

  handleAddPhotoButtonPress() {
    this.setState({ error: null });
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        this.setState({
          photo: source,
        });
      }
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Add your first event</Text>
        <Text style={styles.instructions}>Choose a photo from your phone to get started</Text>
        <Button title="Add Photo" onPress={this.handleAddPhotoButtonPress}/>
        {this.state.photo && 
          <Image
            style={{
              width: 300,
              height: 500,
            }}
            source={this.state.photo}
          />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    maxWidth: '80%'
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 32,
    paddingLeft: 32,
    textAlign: 'center',
    marginTop: 16
  }
});
