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

export default class RPFSD extends Component<Prop, State> {

    rNorm: string;
    rNormOFCT: string;
    rNormAD : string;
    

    FinalScore: string;

    constructor(props) {
        super(props);
        const {params} = this.props.navigation.state;
        this.rNorm = params.rNorm;
		this.rNormOFCT = params.rNormOFCT;
		this.rNormAD = params.rNormAD; 

        this.FinalScore = (Number(this.rNorm) + Number(this.rNormOFCT) + Number(this.rNormAD)).toFixed(2);
        // this.FinalScore = 1;

        this.state = {

        };
    }

    nextScreen = () => {
        this.props.navigation.navigate('Home',{

        })
    }
    

    prevScreen = () => {
        this.props.navigation.navigate('FinalScore',{

        })
    }

    render() {
        if(this.FinalScore <= '50') {
            return (
                <View style={styles.container,{
                    flex:1,
                    backgroundColor:'#C7FFD8'}}>
                    <Image style={styles.mainImage} 
                        source={require('../assets/png/payment.png')}
                    />
                    <View style={styles.mainContainer}>
                        <Text style={styles.tittle}
                        >Final Score</Text>
                        <Text style ={styles.secondTittle}
                        >Berikut merupakan hasil akhir perhitungan kami </Text>
                        <View style={styles.inputWrap}>
                            <View style ={styles.content1}>
                                <Text style={styles.contentText}
                                >Score</Text>
                                <Text style={styles.resultText}
                                >{this.FinalScore}</Text>
                            </View>
                            <Text style={{
                                fontWeight:'normal',
                                fontSize: 18,
                                textAlign:'center',
                                color: '#000000',
                                position:'absolute',
                                top:210,
                                left: 35,
                            }}>Melihat hasil diatas, kami menyimpulkan bahwa kinerja dari segi rantai pasokan masih cukup kurang. Terus tingkatkan kinerja dan dapatkan hasil yang lebih tinggi !</Text>
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
        } else if (this.FinalScore >= '50') {
            return (
                <View style={styles.container,{
                    flex:1,
                    backgroundColor:'#C7FFD8'}}>
                    <Image style={styles.mainImage} 
                        source={require('../assets/png/payment.png')}
                    />
                    <View style={styles.mainContainer}>
                        <Text style={styles.tittle}
                        >Final Score</Text>
                        <Text style ={styles.secondTittle}
                        >Berikut merupakan hasil akhir perhitungan kami </Text>
                        <View style={styles.inputWrap}>
                            <View style ={styles.content1}>
                                <Text style={styles.contentText}
                                >Score</Text>
                                <Text style={styles.resultText}
                                >{this.FinalScore}</Text>
                            </View>
                            <Text style={{
                                fontWeight:'normal',
                                fontSize: 18,
                                textAlign:'center',
                                color: '#000000',
                                position:'absolute',
                                top:210,
                                left: 35,
                            }}>Melihat hasil diatas, kami menyimpulkan bahwa kinerja dari segi rantai pasokan sudah cukup Bagus. Terus tingkatkan kinerja dan dapatkan hasil yang lebih tinggi !</Text>
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
        left: 105,
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
        height: 165,
        borderRadius: 15,
        position: 'absolute',
        top: 25,
        left: 110,
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
        marginTop: 40,
    },
    resultText:{
        fontWeight:'normal',
        fontSize: 24,
        textAlign: 'center',
        marginTop: 20,
    }
})

