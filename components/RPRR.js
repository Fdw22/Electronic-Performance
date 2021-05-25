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
    
}

export default class RPRR extends Component<Prop, State> {

    CR1K1: string;
    CR1K2: string;
    resCR1: string;
    
    CR2K1: string;
    CR2K2: string;
    resCR2: string;

    CR3K1: string;
    CR3K2: string;
    resCR3: string;

    CR4K1: string;
    CR4K2: string;
    resCR4: string;
    
    Terbaik: string;
    Terburuk: string;
    Actual: string;
    Norm: string;


    constructor(props) {
        super(props);
        const {params} = this.props.navigation.state;
        this.CR1K1 = params.CR1K1;
        this.CR1K2 = params.CR1K2;
    
        this.CR2K1 = params.CR2K1;
        this.CR2K2 = params.CR2K2;
    
        this.CR3K1 = params.CR3K1;
        this.CR3K2 = params.CR3K2;

        this.CR4K1 = params.CR4K1;
        this.CR4K2 = params.CR4K2;

        this.resCR1 = ((Number(this.CR1K2) / Number(this.CR1K1)) * 100).toFixed(2);
        this.resCR2 = ((Number(this.CR2K2) / Number(this.CR2K1)) * 100).toFixed(2);
        this.resCR3 = ((Number(this.CR3K2) / Number(this.CR3K1)) * 100).toFixed(2);
        this.resCR4 = ((Number(this.CR4K2) / Number(this.CR4K1)) * 100).toFixed(2);

        this.Terbaik = Math.max(this.resCR1, this.resCR2, this.resCR3, this.resCR4);
        this.Terburuk = Math.min(this.resCR1, this.resCR2, this.resCR3, this.resCR4);
        this.Actual = ((Number(this.resCR1) + Number(this.resCR2) + Number(this.resCR3) + Number(this.resCR4)) / 4).toFixed(2) ;
        this.Norm = (((Number(this.Actual)) - (Number(this.Terburuk)) ) / ( (Number(this.Terbaik)) - (Number(this.Terburuk)))*100).toFixed(2);

                        
        
        this.Test = (8-2) / (6-3);

        this.state={
        };
    }

    prevScreen = () => {
        this.props.navigation.navigate('RP2',{
            Norm: this.Norm,
        });
    }

    render() {
        return (
            <View style={styles.container,{
                flex:1,
                backgroundColor:'#C7FFD8'}}>
                <Image style={styles.mainImage} 
                    source={require('../assets/png/payment.png')}
                />
                <View style={styles.mainContainer}>
                    <Text style={styles.tittle}
                    >Realibility</Text>
                    <Text style ={styles.secondTittle}
                    >Perfect Order Fulfilment </Text>
                    <View style={styles.inputWrap}>
                        <View style ={styles.content1}>
                            <Text style={styles.contentText}
                            >Terbaik</Text>
                            <Text style={styles.resultText}
                            >{this.Terbaik} %</Text>
                        </View>
                        <View style ={styles.content2}>
                            <Text style={styles.contentText}
                            >Terburuk</Text>
                            <Text style={styles.resultText}
                            >{this.Terburuk} %</Text>
                        </View>
                        <View style ={styles.content3}>
                            <Text style={styles.contentText}
                            >Actual</Text>
                            <Text style={styles.resultText}
                            >{this.Actual}%</Text>
                        </View>
                        <View style ={styles.content4}>
                            <Text style={styles.contentText}
                            >Normalisasi</Text>
                            <Text style={styles.resultText}
                            >{this.Norm}</Text>
                        </View>

                    </View>
                    <TouchableOpacity style={styles.btnMulai}
                        onPress={() => {
                            this.prevScreen();
                        }}>
                        <Text style ={styles.btnMulaiText}
                        >Kembali</Text>
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
    secondTittle:{
        fontSize: 24,
        fontWeight:'bold',
        textAlign: 'center',
        color: '#333333',
        marginTop: 20,
        marginRight: 70,
        marginLeft: 70,
    },
    inputWrap:{
        paddingTop: 5,
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
        top: 520,
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
    content1:{
        backgroundColor: '#A4EBF3',
        width: 147,
        height: 145,
        borderRadius: 15,
        position: 'absolute',
        top: 50,
        left: 30,
		shadowOffset:{
			width:0,
			height: 2,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation:7,
    },
    content2:{
        backgroundColor: '#C7FFD8',
        width: 147,
        height: 145,
        borderRadius: 15,
        position: 'absolute',
        top: 50,
        left: 190,
		shadowOffset:{
			width:0,
			height: 2,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation:7,
    },
    content3:{
        backgroundColor: '#C7FFD8',
        width: 147,
        height: 145,
        borderRadius: 15,
        position: 'absolute',
        top: 210,
        left: 30,
		shadowOffset:{
			width:0,
			height: 2,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation:7,
    },
    content4:{
        backgroundColor: '#A4EBF3',
        width: 147,
        height: 145,
        borderRadius: 15,
        position: 'absolute',
        top: 210,
        left: 190,
		shadowOffset:{
			width:0,
			height: 2,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation:7,
    },
    contentText:{
        fontWeight:'bold',
        fontSize: 18,
        textAlign: 'center',
        marginTop: 20,
    },
    resultText:{
        fontWeight:'normal',
        fontSize: 24,
        textAlign: 'center',
        marginTop: 20,
    }
})

