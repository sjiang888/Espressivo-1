import React, { Component, PureComponent } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, StatusBar, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Audio } from 'expo-av';
import Songs, { extractKey } from './dataBase/MockDataSong';
import { HitTestResultTypes } from './node_modules/expo/build/AR';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { BlurView } from "expo-blur";
import Slider from "react-native-slider";
import { styles } from './_StyleSheet';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

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
            didJustFinish: false,
            isSliding: false,
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
                this.setState({
                    playingItemId: -1,
                });
                await this.sound.unloadAsync();
            }
            const { sound } = await Audio.Sound.createAsync(
                item.path,
                {
                    shouldPlay: true,
                    durationMillis: 0,
                    //isLooping: true,
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
            await this.sound.setPositionAsync(this.state.soundPosition);
            await this.sound.playAsync();
            this.setState({
                isSliding: false,
                isPausing: false,
            });
        } catch (error) { }
    }

    _updateScreenForSoundStatus = (status) => {
        if (status.isLoaded) {
            this.setState({
                soundDuration: status.durationMillis,
                shouldPlay: status.shouldPlay,
                isPlaying: status.isPlaying,
                didJustFinish: status.didJustFinish,
                isPlaybackAllowed: true,
            });
            if (!this.state.isSliding) {
                this.setState({ soundPosition: status.positionMillis })
            };
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

    soundPositionIntoMinSecForm = (soundPosition) => {
        let soundLength = Math.trunc(soundPosition / 1000);
        let minutes = Math.trunc(soundLength / 60);
        let seconds = soundLength % 60;
        let minutesText = "";
        let secondsText = "";
        if (minutes >= 10) {
            minutesText = minutes + "";
        } else {
            minutesText = "0" + minutes;
        }
        if (seconds >= 10) {
            secondsText = seconds + "";
        } else {
            secondsText = "0" + seconds;
        }
        return (minutesText + ":" + secondsText);
    };

    _onSlidingComplete = () => {
        if (this.state.isPlaying) {
            this.unpauseSong();
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
                        <View style={{ height: (38 / 812) * screenHeight, marginVertical: (18 / 812) * screenHeight }}>
                            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                                {(this.state.soundPosition == null || this.state.playingItemId != item.id)
                                    ? <Text style={{ fontSize: 14, color: '#A8F5FF' }}>
                                        00:00
                                    </Text>
                                    : <Text style={{ fontSize: 14, color: '#A8F5FF' }}>
                                        {this.soundPositionIntoMinSecForm(this.state.soundPosition)}
                                    </Text>
                                }
                                {(this.state.soundDuration == null || this.state.playingItemId != item.id)
                                    ? <Text style={{ fontSize: 14, color: '#ACB6E5' }}>
                                        {item.length}
                                    </Text>
                                    : <Text style={{ fontSize: 14, color: '#ACB6E5' }}>
                                        {this.soundPositionIntoMinSecForm(this.state.soundDuration)}
                                    </Text>
                                }
                            </View>
                            {(this.state.playingItemId == item.id)
                                ? <Slider
                                    style={styles.slider}
                                    thumbStyle={styles.ProgressCircle}
                                    minimumValue={0}
                                    maximumValue={this.state.soundDuration}
                                    disabled={false}
                                    maximumTrackTintColor='#D3D3D3'
                                    minimumTrackTintColor='#ACB6E5'
                                    onValueChange={soundPosition => this.setState({ soundPosition })}
                                    onSlidingStart={() => { this.setState({ isSliding: true }) }}
                                    onSlidingComplete={this._onSlidingComplete}
                                    value={this.state.soundPosition}
                                />
                                : <Slider
                                    style={styles.slider}
                                    thumbStyle={styles.ProgressCircle}
                                    minimumValue={0}
                                    maximumValue={1}
                                    disabled={true}
                                    maximumTrackTintColor='#D3D3D3'
                                    minimumTrackTintColor='#ACB6E5'
                                />
                            }
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
                <LinearGradient colors={['#1C1A40', '#171430']} style={{ flex: 1 }}>
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
                        <View style={{ flex: 1.2,backgroundColor:'transparent',alignItems: 'center', justifyContent: 'flex-start', marginTop: screenHeight * 0.02 }} onPress={() => this.props.navigation.navigate('Customization')}>
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('RecordingPage')}>
                                {/* <View style={styles.outerCircle}>
                                    <View style={styles.circle}>
                                    </View>
                                </View> */}
                                <View style={{flex:1,alignItems:'center',justifyContent:'flex-end',marginBottom:0.03*screenHeight}}>
                                    <ImageBackground source={require('./assets/images/Blur.png')} style={[styles.BlurIcon,{alignItems:'center',justifyContent:'center'}]}>
                                        <View style={[styles.circle]}>
                                        </View>
                                    </ImageBackground>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}