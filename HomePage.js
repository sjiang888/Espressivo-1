import React, { Component, PureComponent } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, StatusBar, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Audio } from 'expo-av';
import Songs, { extractKey } from './dataBase/MockDataSong';
import { HitTestResultTypes } from './node_modules/expo/build/AR';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { BlurView } from 'expo-blur';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    Title: {
        fontSize: 36,
        fontWeight: 'bold',
        fontFamily: 'Helvetica Neue',
        color: 'white'

    },
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
    ProgressCircle: {
        width: 14,
        height: 14,
        borderRadius: 7,
        backgroundColor: 'white',
        borderWidth: 2,
        borderColor: '#A8F5FF',

    }
})

export default class HomePage extends Component {

    constructor(props) {
        super(props)
        this.sound = null;
        this.state = {
            Songs: Songs,
            selectedId: -1,
            isPlaying: false,
            playingItemId: -1,
            isPausing: false,
            isPlaybackAllowed: false,
            soundPosition: null,
            soundDuration: null,
            shouldPlay: false,
            isPlaying: false,
        };
    }



    onPressAction = (item) => {
        this.setState({
            selectedId: (item.id == this.state.selectedId) ? -1 : item.id
        });
    }

    playSong = async (item) => {
        try {
            if (this.sound != null) {
                await this.sound.unloadAsync();
            }
            const { sound } = await Audio.Sound.createAsync(
                item.path,
                {
                    shouldPlay: true,
                },
                this._updateScreenForSoundStatus,
            );
            this.sound = sound;
            this.setState({
                playingItemId: item.id,
            });
            // Your sound is playing!
        } catch (error) {
            // An error occurred!
        }
    }

    pauseSong = async () => {
        try {
            await this.sound.pauseAsync();
            this.setState({
                isPausing: true
            });
        } catch (error) { }
    }

    unpauseSong = async () => {
        try {
            await this.sound.playAsync();
            this.setState({
                isPausing: false,
            });
        } catch (error) { }
    }

    _updateScreenForSoundStatus = (status) => {
        if (status.isLoaded) {
            this.setState({
                soundDuration: status.durationMillis,
                soundPosition: status.positionMillis,
                shouldPlay: status.shouldPlay,
                isPlaying: status.isPlaying,
                isPlaybackAllowed: true,
            });
        } else {
            this.setState({
                soundDuration: null,
                soundPosition: null,
                isPlaybackAllowed: false,
            });
            if (status.error) {
                Alert(`FATAL PLAYER ERROR: ${status.error}`);
            }
        }
    };

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
                        <View style={{ height: (38 / 812) * screenHeight, marginTop: (18 / 812) * screenHeight }}>
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
                        <View style={{ height: (38 / 812) * screenHeight, marginBottom: (12 / 812) * screenHeight, marginTop: (16 / 812) * screenHeight, justifyContent: 'center' }}>
                            {(this.state.isPlaying && this.state.playingItemId == item.id)
                                ? <TouchableOpacity onPress={this.pauseSong} style={{ alignSelf: 'center' }}>
                                    <Image
                                        source={require('./assets/images/Pause.png')}
                                        style={styles.PlayIcon}
                                    />
                                </TouchableOpacity>
                                : <TouchableOpacity onPress={(this.state.isPausing && this.state.playingItemId == item.id) ? (this.unpauseSong) : (() => this.playSong(item))} style={{ alignSelf: 'center' }}>
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
                    <StatusBar barStyle='light-content' />
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, justifyContent: 'flex-end', paddingLeft: 0.05 * screenWidth, paddingBottom: 0.01 * screenHeight }}>
                            <Text style={styles.Title}>
                                Songs
                        </Text>
                        </View>
                        <View style={{ flex: 4 }}>
                            <FlatList
                                style={styles.ListContainer}
                                extraData={this.state}
                                data={this.state.Songs}
                                renderItem={this._renderItem}
                                keyExtractor={extractKey}
                            />
                        </View>
                        <View style={{ flex: 1.2, alignItems: 'center', justifyContent: 'flex-start', marginTop: screenHeight * 0.02 }} onPress={() => this.props.navigation.navigate('Customization')}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Customization')}>
                                <View style={styles.outerCircle}>
                                    <View style={styles.circle}>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}