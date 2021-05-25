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

export default class RPAR extends Component<Prop, State> {
    C1A1: string;
    C1A2: string;
    resA1: string;

    C2A1: string;
    C2A2: string;
    resA2: string;

    C3A1: string;
    C3A2: string;
    resA3: string;

    C4A1: string;
    C4A2: string;
    resA4: string;

    Terbaik: string;
    Terburuk: string;
    Actual: string;
    Norm: string;

    constructor(props) {
        super(props);
        const {params} = this.props.navigation.state;
        this.C1A1 = params.C1A1;
        this.C1A2 = params.C1A2;

        this.C2A1 = params.C2A1;
        this.C2A2 = params.C2A2;

        this.C3A1 = params.C3A1;
        this.C3A2 = params.C3A2;

        this.C4A1 = params.C4A1;
        this.C4A2 = params.C4A2;

        this.Norm = params.Norm;
		this.NormOFCT = params.NormOFCT;

        this.resA1 = (Number(this.C1A2) / Number(this.C1A1)*100).toFixed(2);
        this.resA2 = (Number(this.C2A2) / Number(this.C2A1)*100).toFixed(2);
        this.resA3 = (Number(this.C3A2) / Number(this.C3A1)*100).toFixed(2);
        this.resA4 = (Number(this.C4A2) / Number(this.C4A1)*100).toFixed(2);

        this.state = {

        };
    }

    nextScreen = () => {
        this.props.navigation.navigate('RPAR',{
            C1A1: this.C1A1,
            C1A2: this.C1A2,
            

            C2A1: this.C2A1,
            C2A2: this.C2A2,
           

            C3A1: this.C3A1,
            C3A2: this.C3A2,
            
            
            Norm: this.Norm,
			NormOFCT: this.NormOFCT,

            C4A1: this.C4A1,
            C4A2: this.C4A2,
            
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
                    >Agility</Text>
                    <Text style ={styles.secondTittle}
                    >Upside Supply Chain Flexibility Per Kuartal </Text>
                    <View style={styles.inputWrap}>
                        <View style ={styles.content1}>
                            <Text style={styles.contentText}
                            >Kuartal 1</Text>
                            <Text style={styles.resultText}
                            >{this.resA1} %</Text>
                        </View>
                        <View style ={styles.content2}>
                            <Text style={styles.contentText}
                            >Kuartal 2</Text>
                            <Text style={styles.resultText}
                            >{this.resA2} %</Text>
                        </View>
                        <View style ={styles.content3}>
                            <Text style={styles.contentText}
                            >Kuartal 3</Text>
                            <Text style={styles.resultText}
                            >{this.resA3} %</Text>
                        </View>
                        <View style ={styles.content4}>
                            <Text style={styles.contentText}
                            >Kuartal 4</Text>
                            <Text style={styles.resultText}
                            >{this.resA4} %</Text>
                        </View>

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
        marginRight: 50,
        marginLeft: 50,
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

