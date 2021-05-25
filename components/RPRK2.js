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
    TextInput,
    View
} from 'react-native';

interface Prop {
    navigation: any;
}

interface State {
    CR2K1: string,
    CR2K2: string,
    resCR2: string,
}

export default class RPRK2 extends Component<Prop, State> {
    CR1K1: string;
    CR1K2: string;
    resCR1: string;


    constructor(props) {
        super(props);
        const {params} = this.props.navigation.state;
        this.CR1K1 = params.CR1K1;
        this.CR1K2 = params.CR1K2;
        this.resCR1 = params.resCR1;

        this.state = {
            CR2K1: '',
            CR2K2: '',
            resCR2: '',
        };
    }

    nextScreen = () => {
        this.props.navigation.navigate('RPRK3',{
            CR1K1: this.CR1K1,
            CR1K2: this.CR1K2,
            resCR1: this.resCR1,

            CR2K1: this.state.CR2K1,
            CR2K2: this.state.CR2K2,
            resCR2: this.state.resCR2,
        });
    }

    prevScreen = () => {
        this.props.navigation.navigate('RPRC',{

        });
    }

    render () {
        return (
            <View style={styles.container,{
                flex:1,
                backgroundColor:'#C7FFD8'}}>
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
                            placeholder="Total Pesanan" 
                            keyboardType='numeric'
                            style={styles.input}
                            onChangeText={(text) => this.setState({CR2K1: text})}
                            value={this.state.CR2K1}
                        />
                        <TextInput 
                            placeholder="Total Barang Tanpa Cacat" 
                            style={styles.input}
                            keyboardType='numeric'
                            onChangeText={(text) => this.setState({CR2K2: text})}
                            value={this.state.CR2K2}
                        />

                    </View>
                    <TouchableOpacity style={styles.btnMulai}
                        onPress={() => {
                            this.nextScreen();
                        }}>
                        <Text style ={styles.btnMulaiText}
                        >Selanjutnya</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
};

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
        paddingHorizontal: 40,
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
        backgroundColor:'#C7FFD8',
        width: 150,
        height: 45,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 350,
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
        color: '#828282',
    },
})

