import React, { Component } from 'react';
import { View, TouchableWithoutFeedback, Dimensions } from 'react-native';
import { styles } from './_StyleSheet';
import { LinearGradient } from 'expo-linear-gradient';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default class RecordingPage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient colors={['#141E30', '#243B55']} style={{ flex: 1 }}>
                    <View style={{flex:2}}>
                        <View style={{ height: 0.4 * screenHeight, backgroundColor: 'green' }}>

                        </View>
                        <View style={{ height: (38 / 812) * screenHeight, marginVertical: (18 / 812) * screenHeight, backgroundColor: 'blue' }}>

                        </View>
                        <View style={{ height: (60 / 812) * screenHeight, marginVertical: (18 / 812) * screenHeight, backgroundColor: 'red' }}>

                        </View>
                    </View>
                    <View style={{ flex: 1, backgroundColor: 'yellow' }}>

                    </View>
                </LinearGradient>
            </View>
        );
    }
}