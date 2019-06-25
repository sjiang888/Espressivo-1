import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { View, Text, Image, Dimensions } from 'react-native';
import HomePage from './HomePage';
import DraftPage from './DraftPage';
import Customization from './Customization';
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
                        Drafts
                    </Text>
                ),
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
                            fontFamily: 'Helvetica Neue',
                            
                    }}>
                        Songs
                    </Text>
                ),
                headerTransparent: 'true'

            })           
        },
        Customization:{
            screen: Customization,
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

                headerTransparent: 'true'

            })           
        },

    },
    {
        initialRouteName: 'Customization',
    },

);

const App = createAppContainer(HomeStack);

export default App;
