import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { styles } from './_StyleSheet';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default class ConvertingPage extends Component {
    render() {
        return (
            <LinearGradient colors={['#1C1A40', '#171430']} style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'flex-end', paddingLeft: 0.05 * screenWidth, paddingBottom: 0.01 * screenHeight }}>
                            <Text style={styles.Title}>
                                Converting
                        </Text>
                        </View>
                <View style={{ flex: 4, alignItems: 'center',backgroundColor:'red',justifyContent:'start'}}>
                    <Image source={require('./assets/images/Converting.png')} style={[styles.Converting,{marginTop:0.1*screenHeight}]}/>

                </View>
                <View style={{ flex: 1.2}}>

                </View>
            </LinearGradient>
        )
    }
}