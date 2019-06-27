import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, StatusBar, ImageBackground } from 'react-native';
import { LinearGradient } from 'expo';
import {BlurView} from 'expo-blur';


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
    },
    Album:{
        height:(286/812)*screenHeight,
        width:(286/812)*screenHeight,
        borderRadius:33,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        marginTop:0.05*screenHeight
    },
    MusicNote:{
        height:(105.11/812)*screenHeight,
        width: (85.33/105.11)*(105.11/812)*screenHeight,
    },
    ProgressCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#A8F5FF',

    },
    PlayIcon: {
        height: screenHeight * 0.03 * 25 / 20,
        width: screenHeight * 0.03,
    },
    etcIcon: {
        height: screenHeight * 0.03 * 5 / 20,
        width: screenHeight * 0.03,
    },
    ExportIcon: {
        height: screenHeight * 0.03 * 20 / 20,
        width: screenHeight * 0.03,
    },
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
                            Song Name
                        </Text>
                        </View>
                        <View style={{ flex: 4, alignItems:'center'}}>
                            <BlurView tint="light" intensity={50} style={styles.Album}>
                                <Image source={require('./assets/images/Music.png')}
                                style={styles.MusicNote}
                                />
                            </BlurView>
                            <View style={{ height: (38 / 812) * screenHeight, width:screenWidth, paddingLeft:0.05*screenHeight,paddingRight:0.05*screenHeight,marginTop: (18 / 812) * screenHeight, marginBottom: (30 / 812) * screenHeight}}>
                        <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
                            <Text style={{fontSize:14,color:'#A8F5FF'}}>
                                00:03
                            </Text>
                            <Text style={{fontSize:14,color:'#ACB6E5'}}>
                                00:10
                            </Text>
                        </View>

                            <View style={{ height: 2, backgroundColor: '#D3D3D3',}}>
                                <LinearGradient colors={['#74EBD5', '#ACB6E5']} start={[0, 1]} end={[1, 0]} style={{ height: 2, width: 100 }}>
                                

                                </LinearGradient>
                            </View>
                            <View style={{ justifyContent: 'flex-end',height:6}}>
                                <View style={[styles.ProgressCircle]}>
                                </View>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:0.6*screenWidth,}}>
                        <Image source={require('./assets/images/etc.png')}
                                style={styles.etcIcon}/>
                                <Image source={require('./assets/images/Play.png')}
                                style={styles.PlayIcon}/>
                                <Image source={require('./assets/images/Export.png')}
                                style={styles.ExportIcon}/>
                        </View>
                        </View>
                        <View style={{ flex: 1.2, alignItems: 'center', justifyContent: 'top' }}>
                            <View style={styles.NextStep}>
                            <Text style={styles.NextFont}>
                                Finish
                            </Text>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}