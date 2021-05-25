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
    CR1: string;
    CR2: string;
    CR3: string;
    CR4: string;
    resCR: string;

    Terbaik: string;
    Terburuk: string;
    ActualOFCT: string;
    NormOFCT: string;

    constructor(props){
        super(props);
        const {params} = this.props.navigation.state;
        this.Norm = params.Norm;
        this.CR1= params.CR1;
        this.CR2= params.CR2;
        this.CR3= params.CR3; 
        this.CR4= params.CR4;

        this.Terbaik = Math.min(this.CR1, this.CR2, this.CR3, this.CR4);
        this.Terburuk = Math.max(this.CR1, this.CR2, this.CR3, this.CR4);
        this.ActualOFCT = Math.round((Number(this.CR1) + Number(this.CR2) + Number(this.CR3) + Number(this.CR4)) / 4);
        this.NormOFCT = ( (Number(this.ActualOFCT) - Number(this.Terburuk)) / (Number(this.Terbaik) - Number(this.Terburuk))*100 ).toFixed(2);
        
        
    }

    nextScreen = () => {
        this.props.navigation.navigate('RP3',{
            NormOFCT: this.NormOFCT,
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
                    >Responsiveness</Text>
                    <Text style ={styles.secondTittle}
                    >Order Fulfilment Cycle Time </Text>
                    <View style={styles.inputWrap}>
                        <View style ={styles.content1}>
                            <Text style={styles.contentText}
                            >Terbaik</Text>
                            <Text style={styles.resultText}
                            >{this.Terbaik} Hari</Text>
                        </View>
                        <View style ={styles.content2}>
                            <Text style={styles.contentText}
                            >Terburuk</Text>
                            <Text style={styles.resultText}
                            >{this.Terburuk} Hari</Text>
                        </View>
                        <View style ={styles.content3}>
                            <Text style={styles.contentText}
                            >Actual</Text>
                            <Text style={styles.resultText}
                            >{this.ActualOFCT} Hari</Text>
                        </View>
                        <View style ={styles.content4}>
                            <Text style={styles.contentText}
                            >Normalisasi</Text>
                            <Text style={styles.resultText}
                            >{this.NormOFCT}</Text>
                        </View>

                    </View>
                    <TouchableOpacity style={styles.btnMulai}
                        onPress={() => {
                            this.nextScreen();
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

