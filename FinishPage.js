import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, StatusBar, ImageBackground, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { styles } from './_StyleSheet';


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default class FinishPage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient colors={['#1C1A40', '#171430']} style={{ flex: 1 }}>
                    <StatusBar barStyle='light-content' />
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, justifyContent: 'flex-end', paddingLeft: 0.05 * screenWidth, paddingBottom: 0.01 * screenHeight }}>
                            <Text style={styles.Title}>
                                Song Name
                        </Text>
                        </View>
                        <View style={{ flex: 4, alignItems: 'center' }}>
                            <BlurView tint="light" intensity={50} style={styles.Album}>
                                <Image source={require('./assets/images/Music.png')}
                                    style={styles.MusicNote}
                                />
                            </BlurView>
                            <View style={{ height: (38 / 812) * screenHeight, width: screenWidth, paddingLeft: 0.05 * screenHeight, paddingRight: 0.05 * screenHeight, marginTop: (18 / 812) * screenHeight, marginBottom: (30 / 812) * screenHeight }}>
                                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 14, color: '#A8F5FF' }}>
                                        00:03
                            </Text>
                                    <Text style={{ fontSize: 14, color: '#ACB6E5' }}>
                                        00:10
                            </Text>
                                </View>

                                <View style={{ height: 2, backgroundColor: '#D3D3D3', }}>
                                    <LinearGradient colors={['#74EBD5', '#ACB6E5']} start={[0, 1]} end={[1, 0]} style={{ height: 2, width: 100 }}>


                                    </LinearGradient>
                                </View>
                                <View style={{ justifyContent: 'flex-end', height: 6 }}>
                                    <View style={[styles.ProgressCircle]}>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: 0.6 * screenWidth, }}>
                                <Image source={require('./assets/images/etc.png')}
                                    style={styles.etcIcon} />
                                <Image source={require('./assets/images/Play.png')}
                                    style={styles.PlayIcon} />
                                <Image source={require('./assets/images/Export.png')}
                                    style={styles.ExportIcon} />
                            </View>
                        </View>
                        <View style={{ flex: 1.2, alignItems: 'center', justifyContent: 'top' }}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('HomePage')}>
                                <View style={[styles.NextStep, { borderColor:'#74EBD5' }]}>
                                    <Text style={[styles.NextFont, { color:'#74EBD5' }]}>Finish</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}