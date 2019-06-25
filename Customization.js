import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, StatusBar, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo'


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    Title:{
        fontSize:36,
        fontWeight:'bold',
        fontFamily:'Helvetica Neue',
        color:'white'

    },
    NextStep: {
        width: (293/375)*screenWidth,
        //height: (91/812)*screenHeight,
        height:91,
        borderRadius: 91/2,
        borderWidth: 1,
        borderColor: '#74EBD5',
        alignItems:'center',justifyContent:'center'       
    },
    NextFont:{
        fontSize:32,
        fontWeight:'bold',
        fontFamily:'Helvetica Neue',
        color:'#74EBD5'
    }
})

export default class HomePage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient colors={['#141E30', '#243B55']} style={{ flex: 1 }}>
                    <StatusBar barStyle='light-content' />
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1 ,justifyContent:'flex-end',paddingLeft:0.05*screenWidth,paddingBottom:0.01*screenHeight}}>
                        <Text style={styles.Title}>
                            Customization
                        </Text>
                        </View>
                        <View style={{ flex: 4 }}>
                        </View>
                        <View style={{ flex: 1.2, alignItems: 'center', justifyContent: 'top' }}>
                            <View style={styles.NextStep}>
                            <Text style={styles.NextFont}>
                                Next
                            </Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}