import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { View, Text, Image, Dimensions } from 'react-native';
import HomePage from './HomePage';
import DraftPage from './DraftPage';
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
            navigationOptions: ({navigation})=>({
                header: props => <CustomHeader {...props} />,

                headerStyle: {
                    backgroundColor: 'transparent',
                    borderBottomWidth: 0,
                },
                headerRight: (
                    <Text 
                        onPress={()=>navigation.navigate('DraftPage')}
                        style={{
                        fontSize: 20,
                        color: 'white',
                        fontFamily:'Helvetica Neue',
                        
                    }}>
                        Draft
                    </Text>
                ),
                headerLeft: (
                    <Text style={{
                        fontSize: 42,
                        color: 'white',
                        fontFamily:'Helvetica Neue',
                        fontWeight:'bold'
                    }}>
                        Songs
                    </Text>
                ),
                headerLeftContainerStyle: {
                    marginTop: screenHeight * 0.05,
                    height: 50,
                    backgroundColor: 'transparent'
                },
                headerTransparent: 'true'

            })
        },
        DraftPage:{
            screen: DraftPage,
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
                        fontFamily:'Helvetica Neue'
                    }}>
                        Songs
                    </Text>
                ),
                headerLeft: (
                    <Text style={{
                        fontSize: 42,
                        color: 'white',
                        fontFamily:'Helvetica Neue',
                        fontWeight:'bold'
                    }}>
                        Draft
                    </Text>
                ),
                headerLeftContainerStyle: {
                    marginTop: screenHeight * 0.05,
                    height: 50,
                    backgroundColor: 'transparent'
                },
                headerTransparent: 'true'

            })           
        }
    },
    {
        initialRouteName: 'HomePage',
    },

);

const App = createAppContainer(HomeStack);

export default App;
