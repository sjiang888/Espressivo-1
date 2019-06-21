import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, StatusBar, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo'


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    circle: {
        width: 0.2*screenWidth,
        height: 0.2*screenWidth,
        borderRadius: 0.2*screenWidth/2,
        borderWidth:'4',
        borderColor: '#74EBD5',
        alignItems:'center',justifyContent:'center'       
    },
    outerCircle:{
        width: 0.2*screenWidth+13,
        height: 0.2*screenWidth+13,
        borderRadius: (0.2*screenWidth+13)/2,
        borderWidth:'4',
        borderColor: 'white',
        alignItems:'center',justifyContent:'center' 
    }
})

export default class HomePage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient colors={['#141E30', '#243B55']} style={{ flex: 1 }}>
                    <StatusBar barStyle='light-content' />
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1 }}>
                        </View>
                        <View style={{ flex: 4 }}>
                        </View>
                        <View style={{ flex: 1.2, alignItems: 'center', justifyContent: 'top' }}>
                            <View style={styles.outerCircle}>
                                <View style={styles.circle}>
                                </View>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}