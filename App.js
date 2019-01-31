/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Modal, Button, StyleSheet, View, Alert } from 'react-native';
import Video from 'react-native-video';

export default class App extends Component {
    state = {
        isModalVisible: false
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={() => {
                        this.setState({
                            isModalVisible: true
                        })
                    }}
                    title="Visibility"
                    color="#841584"
                />
                <Video
                    source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}
                    controls={true}
                    paused={true}
                    style={styles.backgroundVideo}
                />
                {/* <Modal
                    animationType="slide"
                    transparent={false}
                    supportedOrientations={['portrait', 'landscape']}
                    visible={this.state.isModalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                    }}>
                    <Video
                        source={{ uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" }}
                        controls={true}
                        style={styles.backgroundVideo}
                    />
                </Modal> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
});
