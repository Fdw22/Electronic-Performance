import React, { useState, Component } from 'react';
import { useEffect } from 'react';
import {
    ActivityIndicator,
    Image,
    ScrollView,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Text,
    TextInput,
    View
} from 'react-native';

interface Prop {
    navigation: any;
}

interface State {
    Calcutate2K1 : string;
    Calcutate2K2 : string;
    Calcutate2K3 : string;
    Calcutate2K4 : string;
    resK2: string;
}

export default class CKK2 extends Component<Prop, State> {
    Calcutate1K1: string;
    Calcutate1K2: string;
    Calcutate1K3: string;
    Calcutate1K4: string;
    resK1: string;

    static navigationOption = {
        tittle: 'CKK2',
    };

    constructor(props) {
        super(props);
        const {params} = this.props.navigation.state;
        this.Calcutate1K1 = params.Calcutate1K1;
        this.Calcutate1K2 = params.Calcutate1K2;
        this.Calcutate1K3 = params.Calcutate1K3;
        this.Calcutate1K4 = params.Calcutate1K4;
        this.resK1 = Number(this.Calcutate1K1) + Number(this.Calcutate1K2);

        this.state = {
        Calcutate2K1 : '',
        Calcutate2K2 : '',
        Calcutate2K3 : '',
        Calcutate2K4 : '',
        resK2: '',
        };
    }

    sendData = () => {
        this.props.navigation.navigate('CKK3',{
            Calcutate1K1: this.Calcutate1K1,
            Calcutate1K2: this.Calcutate1K2,
            Calcutate1K3: this.Calcutate1K3,
            Calcutate1K4: this.Calcutate1K4,
            resK1: this.resK1,

            Calcutate2K1: this.state.Calcutate2K1,
            Calcutate2K2: this.state.Calcutate2K2,
            Calcutate2K3: this.state.Calcutate2K3,
            Calcutate2K4: this.state.Calcutate2K4,
            resK2: this.state.resK2,
        });
    }

    prevScreen = () => {
        this.props.navigation.navigate('CK', {
        });
    } 




    render () {
        // const CKK1=({navigation}) => {
            return (
                <View style={styles.container,{
                    flex:1,
                    backgroundColor:'#A4EBF3'}}>
                    <Image style={styles.mainImage} 
                        source={require('../assets/png/support_flipped.png')}
                    />
                    <TouchableOpacity style={styles.btnBack}
                        onPress={() => {
                            this.prevScreen();
                        }}>
                            <Image style={styles.btnBackImage}
                            source={require('../assets/png/white_back.png')}
                            />
                    </TouchableOpacity>
                    <View style={styles.mainContainer}>
                        <Text style={styles.tittle}
                        >Kuartal 2</Text>
                        <View style={styles.inputWrap}>
                            <TextInput 
                                placeholder="Laba Bersih" 
                                keyboardType='numeric'
                                style={styles.input}
                                onChangeText={(text) => this.setState({Calcutate2K1: text})}
                                value={this.state.Calcutate2K1}
                            />
                            <TextInput 
                                placeholder="Total Penjualan"
                                keyboardType='numeric' 
                                style={styles.input}
                                onChangeText={(text) => this.setState({Calcutate2K2: text})}
                                value={this.state.Calcutate2K2}
                            />
                            <TextInput 
                                placeholder="Gross Margin"
                                keyboardType='numeric' 
                                style={styles.input} 
                                onChangeText={(text) => this.setState({Calcutate2K3: text})}
                                value={this.state.Calcutate2K3}
                            />
                            <TextInput 
                                placeholder="Total Aset"
                                keyboardType='numeric' 
                                style={styles.input}
                                onChangeText={(text) => this.setState({Calcutate2K4: text})}
                                value={this.state.Calcutate2K4}
                            />
                        </View>
                        <TouchableOpacity style={styles.btnMulai}
                            onPress={() => {
                                this.sendData();
                            }}>
                            <Text style ={styles.btnMulaiText}
                            >Selanjutnya</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            );
        // };
    }
}

const styles = StyleSheet.create ({
    container:{
        width: 1000,
        height: 1000,
        justifyContent: 'center',
    },
    mainImage :{
        width: 230,
        height: 300,
        marginTop: 360,
        marginLeft: 185,
        position: 'absolute',
        top: 0,
    },
    mainContainer: {
        height: 800,
        width: 370,
        borderRadius: 15,
        backgroundColor:'white',
        position: 'absolute',
        top: 50,
        left: 20,
    },
    btnBack: {
        height: 100,
        width: 100,
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
        width: 20,
        height: 20,
        position: 'absolute',
        top: 17,
        left: 25,

    },
    tittle: {
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 70,
        color: '#333333',
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0.05 },
        textShadowRadius: 3.84
    },
    inputWrap:{
        paddingTop: 55,
        paddingHorizontal: 30,
    },
    input:{
        marginTop: 15,
        borderColor: '#676767',
        borderWidth: 1,
        borderRadius: 10,
        height: 45,
        paddingLeft: 12,
    },
    btnMulai: {
        backgroundColor:'#A4EBF3',
        width: 150,
        height: 45,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 450,
        left: 120,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    btnMulaiText :{
        fontSize: 20,
        fontWeight:'bold',
        color: '#F9F9F9',
    },
})

// export default CKK1;