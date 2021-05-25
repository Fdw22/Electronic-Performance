import React, { Component } from 'react';
import { useEffect } from 'react';
import {
    ActivityIndicator,
    Image,
    ScrollView,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Text,
    View
} from 'react-native';

interface Prop {
    navigation: any;
}

interface State {
    
}

export default class RROAI extends Component<Prop, State> {

    constructor (props) {
        super(props);
        const {params} = this.props.navigation.state;
    }

    nextScreen = () => {
        this.props.navigation.navigate('RNPMK',{

        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.mainImage}
                    source={require('../assets/png/support_flipped.png')}
                />
                    <View style={{
                        flex: 1,
                        justifyContent:'center',
                        alignItems: 'center',
                        }}>
                        <View style={{
                            width: 317,
                            height: 453,
                            borderRadius: 25,
                            backgroundColor: 'white',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 650,
                            shadowOffset:{
                                width:0,
                                height: 4,
                            },
                            shadowOpacity: 0.29,
                            shadowRadius: 4.65,
                            elevation: 17,
                            }}>
                            <View style={styles.secondCircle}>
                            </View>
                                <Text style ={{
                                    fontSize: 24,
                                    fontWeight: 'bold',
                                    textAlign: 'left',
                                    position:'absolute',
                                    top:55,
                                    left:60,
                                }}> Return On Asset </Text>
                                <Text style ={{
                                    fontSize: 14,
                                    fontWeight: 'normal',
                                    textAlign: 'justify',
                                    marginRight: 130,
                                    position:'absolute',
                                    top:90,
                                    left:67,
                                }}>Mengukur profitabilitas suatu perusahaan dalam menghasilkan laba dari penggunaan seluruh sumber daya yang dimiliki oleh perusahaan. 
                                </Text>
                                <View style={styles.thirdCircle}>
                                </View>
                                <Text style ={{
                                    fontSize: 24,
                                    fontWeight: 'bold',
                                    textAlign: 'right',
                                    position:'absolute',
                                    top:255,
                                    left:50,
                                }}>Dikatakan Baik Jika</Text>
                                <Text style ={{
                                    fontSize: 24,
                                    fontWeight: 'bold',
                                    textAlign: 'right',
                                    position:'absolute',
                                    top:320,
                                    left:80,
                                }}>Kuartal >= 30 %</Text>
                                <TouchableOpacity style={{
                                    backgroundColor:'#A4EBF3',
                                    width: 130,
                                    height: 40,
                                    borderRadius: 15,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    position: 'absolute',
                                    bottom: 30,
                                    shadowColor: '#000',
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 10,
                                }}
                                    onPress={() => {
                                        this.nextScreen();
                                    }}>
                                    <Text style ={{
                                        fontWeight: 'bold',
                                        fontSize:24,
                                        color: 'white',
                                    }}>Kembali</Text>
                                </TouchableOpacity>
                        </View>

                    </View>

            </View>
        );
    }
};

const styles=StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent:'center',
        backgroundColor: '#A4EBF3',
    },
    mainImage:{
        width: 230,
        height: 300,
        marginTop: 360,
        marginLeft:185,
    },
    btnBack:{
        height: 100,
        width: 100,
        position: 'absolute',
        top: 20,
        left: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 15,

    },
    btnBackImage: {
        width: 30,
        height: 30,
    },
    secondCircle:{
        height: 90,
        width: 90,
        borderRadius: 100/2,
        backgroundColor: '#EB5757',
        position: 'absolute',
        top :30,
        left:30,
    },
    thirdCircle:{
        height: 90,
        width: 90,
        borderRadius: 100/2,
        backgroundColor: '#F2994A',
        position: 'absolute',
        top:230,
        right: 30,
    },
})

