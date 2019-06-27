import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions, Image, StatusBar, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Options, { extractKey } from './dataBase/CustomOptions';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    Title: {
        fontSize: 36,
        fontWeight: 'bold',
        fontFamily: 'Helvetica Neue',
        color: 'white'

    },
    NextStep: {
        width: (293 / 375) * screenWidth,
        //height: (91/812)*screenHeight,
        height: 91,
        borderRadius: 91 / 2,
        borderWidth: 1,
        borderColor: '#70727D',
        alignItems: 'center', justifyContent: 'center'
    },
    NextFont: {
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'Helvetica Neue',
        color: '#7A7A83'
    },
    ListContainer: {
        marginHorizontal: screenWidth * 0.05,
    },
    row: {
        minHeight: (115 / 812) * screenHeight,
        flexDirection: 'column',
        padding: screenHeight * 0.01,
        borderBottomColor: '#707070',
        borderBottomWidth: 1,
    },
    Options: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Helvetica Neue',
        color: '#C7C6D5',
        alignSelf: 'center',
        marginVertical: screenHeight * 0.028,
    },
    choices: {
        height: (42 / 812) * screenHeight,
        width: screenWidth * 0.35,
        borderColor: '#74EBD5',
        borderWidth: 1,
        borderRadius: 91 / 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    choicesText: {
        fontSize: 22,
        color: 'white',
    },
})

export default class HomePage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Options: Options,
            highlightedItemId: -1,
            highlightedChoiceId: -1,
            selectedId: -1,
            selectedMood1: 'Mood1',
            selectedMood2: 'Mood2',
            selectedGenre: 'Genre',
            selectedLength: 'Length',
            selectedFreedom:'Robotic Freedom',
        };
    }

    onPressAction = (item) => {
        this.setState({
            selectedId: (item.id == this.state.selectedId) ? -1 : item.id
        });
    }

    onPressChoice = (item, index) => {
        if (item.name == 'Mood1') {
            this.setState({
                selectedMood1: item.choices[index]
            });
        } else if (item.name == 'Mood2') {
            this.setState({
                selectedMood2: item.choices[index]
            });
        } else if (item.name == 'Genre') {
            this.setState({
                selectedGenre: item.choices[index]
            });
        } else if (item.name == 'Length') {
            this.setState({
                selectedLength: item.choices[index]
            });
        } else if (item.name == 'Robotic Freedom') {
            this.setState({
                selectedFreedom: item.choices[index]
            });
        }
        this.setState({
            selectedId:-1
        });
    }

    _renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => this.onPressAction(item)}>
                {(item.id == this.state.selectedId)
                    ? <View style={[styles.row, { backgroundColor: '#475364' }]}>
                        <Text style={[styles.Options, { color: '#74EBD5' }]}>{item.name}</Text>
                        <View style={{ flexDirection: 'row', marginVertical: screenHeight * 0.055 }}>
                            {(this.state.highlightedItemId == item.id && this.state.highlightedChoiceId == 0)
                                ? <TouchableOpacity onPress={() => this.onPressChoice(item, 0)}>
                                    <View style={[styles.choices, { marginLeft: screenWidth * 0.02, backgroundColor: '#74EBD5' }]}>
                                        <Text style={[styles.choicesText, { color: '#243B55' }]}>{item.choices[0]}</Text>
                                    </View>
                                </TouchableOpacity>
                                : <TouchableOpacity onPress={() => this.setState({ highlightedItemId: item.id, highlightedChoiceId: 0 })}>
                                    <View style={[styles.choices, { marginLeft: screenWidth * 0.02 }]}>
                                        <Text style={styles.choicesText}>{item.choices[0]}</Text>
                                    </View>
                                </TouchableOpacity>
                            }
                            {(this.state.highlightedItemId == item.id && this.state.highlightedChoiceId == 1)
                                ? <TouchableOpacity onPress={() => this.onPressChoice(item, 1)}>
                                    <View style={[styles.choices, { marginLeft: screenWidth * 0.12, backgroundColor: '#74EBD5' }]}>
                                        <Text style={[styles.choicesText, { color: '#243B55' }]}>{item.choices[1]}</Text>
                                    </View>
                                </TouchableOpacity>
                                : <TouchableOpacity onPress={() => this.setState({ highlightedItemId: item.id, highlightedChoiceId: 1 })}>
                                    <View style={[styles.choices, { marginLeft: screenWidth * 0.12 }]}>
                                        <Text style={styles.choicesText}>{item.choices[1]}</Text>
                                    </View>
                                </TouchableOpacity>
                            }
                        </View>
                        <View style={{ flexDirection: 'row', marginVertical: screenHeight * 0.055 }}>
                            {(this.state.highlightedItemId == item.id && this.state.highlightedChoiceId == 2)
                                ? <TouchableOpacity onPress={() => this.onPressChoice(item, 2)}>
                                    <View style={[styles.choices, { marginLeft: screenWidth * 0.02, backgroundColor: '#74EBD5' }]}>
                                        <Text style={[styles.choicesText, { color: '#243B55' }]}>{item.choices[2]}</Text>
                                    </View>
                                </TouchableOpacity>
                                : <TouchableOpacity onPress={() => this.setState({ highlightedItemId: item.id, highlightedChoiceId: 2 })}>
                                    <View style={[styles.choices, { marginLeft: screenWidth * 0.02 }]}>
                                        <Text style={styles.choicesText}>{item.choices[2]}</Text>
                                    </View>
                                </TouchableOpacity>
                            }
                            {(item.choices.length > 3)
                                ? (this.state.highlightedItemId == item.id && this.state.highlightedChoiceId == 3)
                                    ? <TouchableOpacity onPress={() => this.onPressChoice(item, 3)}>
                                        <View style={[styles.choices, { marginLeft: screenWidth * 0.12, backgroundColor: '#74EBD5' }]}>
                                            <Text style={[styles.choicesText, { color: '#243B55' }]}>{item.choices[3]}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    : <TouchableOpacity onPress={() => this.setState({ highlightedItemId: item.id, highlightedChoiceId: 3 })}>
                                        <View style={[styles.choices, { marginLeft: screenWidth * 0.12 }]}>
                                            <Text style={styles.choicesText}>{item.choices[3]}</Text>
                                        </View>
                                    </TouchableOpacity>
                                : <View />
                            }
                        </View>
                        {(item.choices.length > 4)
                            ? <View style={{ flexDirection: 'row', marginVertical: screenHeight * 0.055 }}>
                                {(this.state.highlightedItemId == item.id && this.state.highlightedChoiceId == 4)
                                    ? <TouchableOpacity onPress={() => this.onPressChoice(item, 4)}>
                                        <View style={[styles.choices, { marginLeft: screenWidth * 0.02, backgroundColor: '#74EBD5' }]}>
                                            <Text style={[styles.choicesText, { color: '#243B55' }]}>{item.choices[4]}</Text>
                                        </View>
                                    </TouchableOpacity>
                                    : <TouchableOpacity onPress={() => this.setState({ highlightedItemId: item.id, highlightedChoiceId: 4 })}>
                                        <View style={[styles.choices, { marginLeft: screenWidth * 0.02 }]}>
                                            <Text style={styles.choicesText}>{item.choices[4]}</Text>
                                        </View>
                                    </TouchableOpacity>
                                }
                                {(item.choices.length > 5)
                                    ? (this.state.highlightedItemId == item.id && this.state.highlightedChoiceId == 5)
                                        ? <TouchableOpacity onPress={() => this.onPressChoice(item, 5)}>
                                            <View style={[styles.choices, { marginLeft: screenWidth * 0.12, backgroundColor: '#74EBD5' }]}>
                                                <Text style={[styles.choicesText, { color: '#243B55' }]}>{item.choices[5]}</Text>
                                            </View>
                                        </TouchableOpacity>
                                        : <TouchableOpacity onPress={() => this.setState({ highlightedItemId: item.id, highlightedChoiceId: 5 })}>
                                            <View style={[styles.choices, { marginLeft: screenWidth * 0.12 }]}>
                                                <Text style={styles.choicesText}>{item.choices[5]}</Text>
                                            </View>
                                        </TouchableOpacity>
                                    : <View />
                                }
                            </View>
                            : <View />
                        }
                    </View>
                    : <View style={styles.row}>
                        {(item.id == 0)
                            ? (this.state.selectedMood1 != 'Mood1')
                                ? <Text style={[styles.Options, { color: '#74EBD5' }]}>{this.state.selectedMood1}</Text>
                                : <Text style={styles.Options}>{item.name}</Text>
                            : (item.id == 1)
                                ? (this.state.selectedMood2 != 'Mood2')
                                    ? <Text style={[styles.Options, { color: '#74EBD5' }]}>{this.state.selectedMood2}</Text>
                                    : <Text style={styles.Options}>{item.name}</Text>
                                : (item.id == 2)
                                    ? (this.state.selectedGenre != 'Genre')
                                        ? <Text style={[styles.Options, { color: '#74EBD5' }]}>{this.state.selectedGenre}</Text>
                                        : <Text style={styles.Options}>{item.name}</Text>
                                    : (item.id == 3)
                                        ? (this.state.selectedLength != 'Length')
                                            ? <Text style={[styles.Options, { color: '#74EBD5' }]}>{this.state.selectedLength}</Text>
                                            : <Text style={styles.Options}>{item.name}</Text>
                                        : (item.id == 4)
                                            ? (this.state.selectedFreedom != 'Robotic Freedom')
                                                ? <Text style={[styles.Options, { color: '#74EBD5' }]}>{this.state.selectedFreedom}</Text>
                                                : <Text style={styles.Options}>{item.name}</Text>
                                            : <Text style={styles.Options}>{item.name}</Text>
                        }
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
                                Customization
                        </Text>
                        </View>
                        <View style={{ flex: 4, marginBottom: screenHeight * 0.05 }}>
                            <FlatList
                                style={styles.ListContainer}
                                extraData={this.state}
                                data={this.state.Options}
                                renderItem={this._renderItem}
                                keyExtractor={extractKey}
                            />
                        </View>
                        <View style={{ flex: 1.2, alignItems: 'center', justifyContent: 'top' }}>
                            {(this.state.selectedMood1 != 'Mood1' && this.state.selectedMood2 != 'Mood2' && this.state.selectedGenre != 'Genre'
                                && this.state.selectedLength != 'Length' && this.state.selectedFreedom != 'Robotic Freedom')
                                ? <View style={[styles.NextStep, { borderColor: '#74EBD5' }]}>
                                    <Text style={[styles.NextFont, { color: '#74EBD5' }]}>Next</Text>
                                </View>    
                                : <View style={styles.NextStep}>
                                    <Text style={styles.NextFont}>Next</Text>
                                </View>     
                            }
                        </View>
                    </View>
                </LinearGradient>
            </View>
        );
    }
}