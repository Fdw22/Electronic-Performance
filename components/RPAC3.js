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
    C3A1: string;
    C3A2: string;
    resA3: string;
}

export default class RPAC3 extends Component<Prop, State> {
    C1A1: string;
    C1A2: string;
    resA1: string;

    C2A1: string;
    C2A2: string;
    resA2: string;

    constructor(props) {
        super(props);
        const {params} = this.props.navigation.state;
        this.C1A1 = params.C1A1;
        this.C1A2 = params.C1A2;
        this.resA1 = params.resA1;

        this.Norm = params.Norm;
		this.NormOFCT = params.NormOFCT;

        this.C2A1 = params.C2A1;
        this.C2A2 = params.C2A2;
        this.resA2 = params.resA2;

       this.state = {
           C3A1: '',
           C3A2: '',
           resA3: '',
       };
    }

    sendData = () => {
        this.props.navigation.navigate('RPAC4',{
            C1A1: this.C1A1,
            C1A2: this.C1A2,
            resA1: this.resA1,

            C2A1: this.C2A1,
            C2A2: this.C2A2,
            resA2: this.resA2,

            Norm: this.Norm,
			NormOFCT: this.NormOFCT,

            C3A1: this.state.C3A1,
            C3A2: this.state.C3A2,
            resA3: this.state.resA3,
        });
    }

    prevScreen = () => {
        this.props.navigation.navigate('RPAC',{

        });
    }


    render() {
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
                    >Kuartal 3</Text>
                    <View style={styles.inputWrap}>
                        <TextInput 
                            placeholder="Total Pesanan" 
                            keyboardType='numeric'
                            style={styles.input}
                            onChangeText={(text) => this.setState({C3A1: text})}
                            value={this.state.C3A1}
                        />
                        <TextInput 
                            placeholder="Total Barang Cacat" 
                            keyboardType='numeric'
                            style={styles.input}
                            onChangeText={(text) => this.setState({C3A2: text})}
                            value={this.state.C3A2}
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
