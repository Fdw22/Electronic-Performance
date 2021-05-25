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
    B1: string;
    B2: string;
    B3: string;
}

export default class RPAC1 extends Component<Prop, State> {

    Norm: string;
    NormOFCT: string;
    NormAD: string;

    constructor(props){
        super(props);
        const {params} = this.props.navigation.state;
		this.Norm = params.Norm;
		this.NormOFCT = params.NormOFCT;
		this.NormAD = params.NormAD;

        this.state = {
            B1: '',
            B2: '',
            B3: '',
        };
    }
    

    sendData = () => {
        this.props.navigation.navigate('FinalScore',{
            Norm: this.Norm,
			NormAD: this.NormAD,
			NormOFCT: this.NormOFCT,

            B1: this.state.B1,
            B2: this.state.B2,
            B3: this.state.B3,
            resB: this.state.resB,
        })
    }

    prevScreen = () => {
        this.props.navigation.navigate('RP',{

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
                    >Bobot </Text>
                    <Text style={styles.secondTittle}> Mari kita tentukan bobot yang akan di hitung dengan hasil akhir. </Text>
                    <View style={styles.inputWrap}>
                        <TextInput 
                            placeholder="Realibility" 
                            style={styles.input}
                            keyboardType='numeric'
                            onChangeText={(text) => this.setState({B1: text})}
                            value={this.state.B1}                            
                        />
                        <Image style={styles.iconPercent}
                        source={require('../assets/png/percentage.png')} 
                        />
                    </View>
                    <View style={styles.inputWrap}>
                    <TextInput 
                        placeholder="Responsiveness" 
                        style={styles.input}
                        keyboardType='numeric'
                        onChangeText={(text) => this.setState({B2: text})}
                        value={this.state.B2}
                    />
                    <Image style={styles.iconPercent}
                        source={require('../assets/png/percentage.png')} 
                    />
                    </View>
                    <View style={styles.inputWrap}>
                        <TextInput 
                            placeholder="Agility" 
                            keyboardType='numeric'
                            style={styles.input}
                            onChangeText={(text) => this.setState({B3: text})}
                            value={this.state.B3}
                        />
                        <Image style={styles.iconPercent}
                            source={require('../assets/png/percentage.png')} 
                        />
                    </View>
                    
                    <Text style={styles.thirdTittle}> Tentukan nilai bobot sampai angka 100 % saja ya ! </Text>
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
        marginTop: 20,
        color: '#333333',
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0.05 },
        textShadowRadius: 3.84
    },
    secondTittle: {
        fontSize: 18,
        fontWeight: 'normal',
        textAlign: 'center',
        marginTop: 10,
        marginLeft: 40,
        marginRight: 40,
        color: '#333333',
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0.05 },
        textShadowRadius: 3.84
    },
    thirdTittle: {
        fontSize: 18,
        fontWeight: 'normal',
        textAlign: 'center',
        marginTop: 80,
        paddingHorizontal: 40,
        color: '#333333',
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0.05 },
        textShadowRadius: 3.84
    },
    iconPercent:{
        width: 20,
        height: 20,
        alignItems: 'center',
        marginRight: 10,
    },
    inputWrap:{
        // flexDirection:'row',
        // paddingTop: 55,
        // paddingHorizontal: 100,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#676767',
        height: 45,
        width: 135,
        borderRadius: 10,
        marginLeft: 120,
        marginTop: 40,
        marginBottom:-20
        
    },
    input:{
        flex:1,
        // marginTop: 15,
        // borderColor: '#676767',
        // borderWidth: 1,
        // borderRadius: 10,
        // height: 45,
        // width: 170,
        // paddingLeft: 12,
    },
    btnMulai: {
        backgroundColor:'#C7FFD8',
        width: 150,
        height: 45,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 520,
        left: 110,
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

