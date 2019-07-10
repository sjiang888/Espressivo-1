import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import HomePage from './HomePage';
import DraftPage from './DraftPage';
import FinishPage from './FinishPage';
import Customization from './Customization';
import RecordingPage from './RecordingPage';
import ConvertingPage from './ConvertingPage';
import React from 'react';
import { Header } from 'react-navigation';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const CustomHeader = props => {
    return (
        <View style={{
            //backgroundColor:'transparent',
            height: 0.16 * screenHeight,
            paddingLeft: 0.05 * screenWidth,
            paddingRight: 0.05 * screenWidth,
        }}>
            <Header {...props} />
        </View>
    );
};

const HomeStack = createStackNavigator(
    {
        HomePage: {
            screen: HomePage,
            navigationOptions: ({ navigation }) => ({
                header: props => <CustomHeader {...props} />,

                headerStyle: {
                    backgroundColor: 'transparent',
                    borderBottomWidth: 0,
                },
                headerRight: (
                    <Text
                        onPress={() => navigation.navigate('DraftPage')}
                        style={{
                            fontSize: 20,
                            color: 'white',
                            fontFamily: 'Helvetica Neue',

                        }}>
                        Drafts
                    </Text>
                ),
                headerLeft: <View />,
                headerTransparent: 'true'

            })
        },
        DraftPage: {
            screen: DraftPage,
            navigationOptions: ({ navigation }) => ({
                header: props => <CustomHeader {...props} />,

                headerStyle: {
                    backgroundColor: 'transparent',
                    borderBottomWidth: 0,
                },
                headerRight: (
                    <Text onPress={() => navigation.navigate('HomePage')}
                        style={{
                            fontSize: 20,
                            color: 'white',
                            fontFamily: 'Helvetica Neue',

                        }}>
                        Songs
                    </Text>
                ),
                headerLeft: <View/>,
                headerTransparent: 'true'

            })
        },
        RecordingPage: {
            screen: RecordingPage,
            navigationOptions: ({ navigation }) => ({
                header: props => <CustomHeader {...props} />,

                headerStyle: {
                    backgroundColor: 'transparent',
                    borderBottomWidth: 0,
                },
                headerLeft: (
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Image source={require('./assets/images/Backward.png')} style={{ height: 0.03 * screenHeight, width: 0.03 * screenHeight }} />
                    </TouchableOpacity>
                ),
                headerTransparent: 'true'

            })
        },
        Customization: {
            screen: Customization,
            navigationOptions: ({ navigation }) => ({
                header: props => <CustomHeader {...props} />,

                headerStyle: {
                    backgroundColor: 'transparent',
                    borderBottomWidth: 0,
                },
                headerRight: (
                    <Text onPress={() => navigation.navigate('HomePage')}
                        style={{
                            fontSize: 20,
                            color: 'white',
                            fontFamily: 'Helvetica Neue',

                        }}>
                        Exit
                    </Text>
                ),
                headerLeft: (
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Image source={require('./assets/images/Backward.png')} style={{ height: 0.03 * screenHeight, width: 0.03 * screenHeight }} />
                    </TouchableOpacity>
                ),
                headerTransparent: 'true'

            })
        },
        FinishPage:{
            screen: FinishPage,
            navigationOptions: ({navigation})=>({
                header: props => <CustomHeader {...props} />,

                headerStyle: {
                    backgroundColor: 'transparent',
                    borderBottomWidth: 0,
                },
                headerRight: (
                    <Text onPress={()=>navigation.navigate('HomePage')}
                        style={{
                        fontSize: 20,
                        color: 'white',
                            fontFamily: 'Helvetica Neue',
                            
                    }}>
                        Exit
                    </Text>
                ),
                headerLeft:(
                    <Image source={require('./assets/images/Backward.png')} style={{height:0.02*screenHeight, width:0.02*screenHeight}}/>
                ),
                headerLeft: (
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Image source={require('./assets/images/Backward.png')} style={{ height: 0.03 * screenHeight, width: 0.03 * screenHeight }} />
                    </TouchableOpacity>
                ),
                headerTransparent: 'true'

            })           
        },
        ConvertingPage:{
            screen: ConvertingPage,
            navigationOptions: ({navigation})=>({
                header: props => <CustomHeader {...props} />,

                headerStyle: {
                    backgroundColor: 'transparent',
                    borderBottomWidth: 0,
                },
                headerRight: (
                    <Text onPress={()=>navigation.navigate('HomePage')}
                        style={{
                        fontSize: 20,
                        color: 'white',
                            fontFamily: 'Helvetica Neue',
                            
                    }}>
                        Exit
                    </Text>
                ),
                headerLeft:(
                    <Image source={require('./assets/images/Backward.png')} style={{height:0.02*screenHeight, width:0.02*screenHeight}}/>
                ),
                headerLeft: (
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Image source={require('./assets/images/Backward.png')} style={{ height: 0.03 * screenHeight, width: 0.03 * screenHeight }} />
                    </TouchableOpacity>
                ),
                headerTransparent: 'true'

            })           
        },

    },
    {
        initialRouteName: 'ConvertingPage',
    },

);

const App = createAppContainer(HomeStack);

export default App;
