import React, { Component } from 'react';
import { View,Text,TouchableWithoutFeedback, Dimensions,ImageBackground} from 'react-native';
import { styles } from './_StyleSheet';
import { LinearGradient } from 'expo-linear-gradient';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

export default class RecordingPage extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <LinearGradient colors={['#141E30', '#243B55']} style={{ flex: 1 }}>
                    <View style={{ flex: 2 }}>
                        <View style={{ height: 0.4 * screenHeight, backgroundColor: 'green' }}>

                        </View>
                        <View style={{ height: (38 / 812) * screenHeight, marginVertical: (18 / 812) * screenHeight, backgroundColor: 'blue' }}>

                        </View>
                        <View style={{ height: (60 / 812) * screenHeight, marginVertical: (18 / 812) * screenHeight, backgroundColor: 'transparent',flexDirection:'row',paddingLeft: 0.01 * screenHeight, paddingRight: 0.01 * screenHeight}}>
                            <View style={{ flex: 1,alignItems:'flex-start',justifyContent:'center'}}>
                                <Text style={{fontFamily: 'Helvetica Neue',fontSize:26,fontWeight:'200',color:'#ACB6E5'}}>
                                    Save to Draft
                                </Text>
                            </View>
                            <View style={[styles.NextStepSmall,{borderColor:'#74EBD5'}]}>
                                <Text style={[styles.NextFont, {fontSize:26,color:'#74EBD5'}]}>
                                    Next Step
                                </Text>
                            </View>

                        </View>
                    </View>
                    {/* <View style={{ flex: 1, backgroundColor: 'yellow' }}>

                    </View> */}
                    <View style={{flex:1,alignItems:'center',justifyContent:'flex-end',marginBottom:0.03*screenHeight}}>
                                    <ImageBackground source={require('./assets/images/Blur.png')} style={[styles.BlurIcon,{alignItems:'center',justifyContent:'center'}]}>
                                        <View style={[styles.circle]}>
                                        </View>
                                    </ImageBackground>
                                </View>
                </LinearGradient>
            </View>
        );
    }
}