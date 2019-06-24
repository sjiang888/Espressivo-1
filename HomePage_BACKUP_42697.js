import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, StatusBar, ImageBackground } from 'react-native';
import { LinearGradient, BlurView } from 'expo'
import React, { Component, PureComponent } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, StatusBar, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Audio } from 'expo-av';
import Songs, { extractKey } from './dataBase/MockData';
import { HitTestResultTypes } from './node_modules/expo/build/AR';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const player = new Audio.Sound();

const styles = StyleSheet.create({
    circle: {
        width: 0.2 * screenWidth,
        height: 0.2 * screenWidth,
        borderRadius: 0.2 * screenWidth / 2,
        borderWidth: 4,
        borderColor: '#74EBD5',
        alignItems: 'center', justifyContent: 'center'
    },
    outerCircle: {
        width: 0.2 * screenWidth + 13,
        height: 0.2 * screenWidth + 13,
        borderRadius: (0.2 * screenWidth + 13) / 2,
        borderWidth: 4,
        borderColor: 'white',
        alignItems: 'center', justifyContent: 'center'
    },
    ListContainer: {
        marginHorizontal: screenWidth * 0.05,
    },
    row: {
        backgroundColor: 'transparent',
        minHeight: (90 / 812) * screenHeight,
        flexDirection: 'column',
        padding: screenHeight * 0.01,
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1,
    },

    songName: {
        color: 'white',
        marginTop: screenHeight * 0.007,
        fontSize: 22,
        fontFamily: 'Helvetica Neue',
        fontWeight: 'bold',
    },

    songAttributes: {
        color: '#CCCCCC',
        fontSize: 14,
        fontWeight: 'normal',
    },

    DeleteIcon: {
        height: screenHeight * 0.02 * 18 / 14,
        width: screenHeight * 0.02,
    },

    PlayIcon: {
        height: screenHeight * 0.03 * 25 / 20,
        width: screenHeight * 0.03,
    },
})

export default class HomePage extends Component {

    state = {
        Songs: Songs,
        selectedId: -1,
        isPlaying: false,
        playingItemId: -1,
    };

    onPressAction = (item) => {
        this.setState({
            selectedId: (item.id == this.state.selectedId) ? -1 : item.id
        });
    }

    playSong = async (item) => {
        try {
            await player.unloadAsync();
            await player.loadAsync(item.path);
            await player.playAsync();
            this.setState({
                isPlaying: true,
                playingItemId: item.id,
            });
            // Your sound is playing!
        } catch (error) {
            // An error occurred!
        }
    }

    pauseSong = async () => {
        try {
            await player.pauseAsync();
            this.setState({
                isPlaying: false
            });
        } catch (error) { }
    }

    _renderItem = ({ item }) => {

        return (
            <TouchableOpacity onPress={() => this.onPressAction(item)}>
                {(item.id == this.state.selectedId)
                    ? <View style={[styles.row, { backgroundColor: '#475364' }]}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <Text style={styles.songName}>{item.name}</Text>
                            <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                                <Image
                                    source={require('./assets/images/Delete.png')}
                                    style={[styles.DeleteIcon, { marginTop: screenHeight * 0.01, marginRight: screenHeight * 0.01 }]}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, marginBottom: screenHeight * 0.006, marginTop: screenHeight * 0.006 }}>
                            <Text style={[styles.songName, styles.songAttributes]}>{item.creationDate}</Text>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Text style={[styles.songName, styles.songAttributes]}>{item.length}</Text>
                            </View>
                        </View>
                        <View style={{ height: (35 / 812) * screenHeight, marginTop: (18 / 812) * screenHeight }}>

                        </View>
                        <View style={{ height: (38 / 812) * screenHeight, marginBottom: (12 / 812) * screenHeight, marginTop: (16 / 812) * screenHeight, justifyContent: 'center' }}>
                            {(this.state.isPlaying && this.state.playingItemId == item.id)
                                ? <TouchableOpacity onPress={this.pauseSong} style={{ alignSelf: 'center' }}>
                                    <Image
                                        source={require('./assets/images/Pause.png')}
                                        style={styles.PlayIcon}
                                    />
                                </TouchableOpacity>
                                : <TouchableOpacity onPress={() => this.playSong(item)} style={{ alignSelf: 'center' }}>
                                    <Image
                                        source={require('./assets/images/Play.png')}
                                        style={styles.PlayIcon}
                                    />
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                    : <View style={[styles.row, { backgroundColor: 'transparent' }]}>
                        <View>
                            <Text style={styles.songName}>{item.name}</Text>
                        </View>
                        <View style={{ flexDirection: 'row', flex: 1, marginBottom: screenHeight * 0.006, marginTop: screenHeight * 0.006 }}>
                            <Text style={[styles.songName, styles.songAttributes]}>{item.creationDate}</Text>
                            <View style={{ flex: 1, alignItems: 'flex-end' }}>
                                <Text style={[styles.songName, styles.songAttributes]}>{item.length}</Text>
                            </View>
                        </View>
                    </View>
                }
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient colors={['#141E30', '#243B55']} style={{ flex: 1 }}>
                    <StatusBar barStyle='dark-content' />
                    <View style={{ flex: 1 }}/>
                        <View style={{ flex: 1 }}>
                        </View>
                        <View style={{ flex: 1 }} />
                        <View style={{ flex: 4 }}>
                            <FlatList
                                style={styles.ListContainer}
                                extraData={this.state}
                                data={this.state.Songs}
                                renderItem={this._renderItem}
                                keyExtractor={extractKey}
                            />
                        </View>
                        <View style={{ flex: 1.2, alignItems: 'center', justifyContent: 'top' }}>
                            <View style={{ flex: 1.2, alignItems: 'center', justifyContent: 'flex-start', marginTop: screenHeight * 0.02 }}>
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
