import React, { useState, Component } from 'react';
import { useEffect } from 'react';
import {
    ActivityIndicator,
    Image,
    ScrollView,
    StyleSheet,
    ImageBackground,
    TouchableOpacity,
    Modal, 
    Alert,
    Text,
    View
} from 'react-native';

interface Prop {
    navigation: any;
}

interface State {

}

export default class RNPMK extends Component<Prop, State> {

    Calcutate1K1: string;
    Calcutate1K2: string;
    Calcutate1K3: string;
    Calcutate1K4: string;
    NPMK1: string;
    GPMK1: string;
    ROAK1: string;

    Calcutate2K1: string;
    Calcutate2K2: string;
    Calcutate2K3: string;
    Calcutate2K4: string;
    NPMK2: string;
    GPMK2: string;
    ROAK2: string;

    Calcutate3K1: string;
    Calcutate3K2: string;
    Calcutate3K3: string;
    Calcutate3K4: string;
    NPMK3: string;
    GPMK3: string;
    ROAK3: string;

    Calcutate4K1: string;
    Calcutate4K2: string;
    Calcutate4K3: string;
    Calcutate4K4: string;
    NPMK4: string;
    GPMK4: string;
    ROAK4: string;

    static navigationOption = {
        tittle: 'RNPMK',
    };

    constructor(props){
        super(props);

        const {params} = this.props.navigation.state;
        this.Calcutate1K1 = params.Calcutate1K1;
        this.Calcutate1K2 = params.Calcutate1K2;
        this.Calcutate1K3 = params.Calcutate1K3;
        this.Calcutate1K4 = params.Calcutate1K4;
        this.NPMK1 = (Number(this.Calcutate1K1) / Number(this.Calcutate1K2)* 100).toFixed(2);
        this.GPMK1 = (Number(this.Calcutate1K3) / Number(this.Calcutate1K2)* 100).toFixed(2);
        this.ROAK1 = (Number(this.Calcutate1K1) / Number(this.Calcutate1K4)* 100).toFixed(2);

        this.Calcutate2K1 = params.Calcutate2K1;
        this.Calcutate2K2 = params.Calcutate2K2;
        this.Calcutate2K3 = params.Calcutate2K3;
        this.Calcutate2K4 = params.Calcutate2K4;
        this.NPMK2 = (Number(this.Calcutate2K1) / Number(this.Calcutate2K2)* 100).toFixed(2);
        this.GPMK2 = (Number(this.Calcutate2K3) / Number(this.Calcutate2K2)* 100).toFixed(2);
        this.ROAK2 = (Number(this.Calcutate2K1) / Number(this.Calcutate2K4)* 100).toFixed(2);

        this.Calcutate3K1 = params.Calcutate3K1;
        this.Calcutate3K2 = params.Calcutate3K2;
        this.Calcutate3K3 = params.Calcutate3K3;
        this.Calcutate3K4 = params.Calcutate3K4;
        this.NPMK3 = (Number(this.Calcutate3K1) / Number(this.Calcutate3K2)* 100).toFixed(2);
        this.GPMK3 = (Number(this.Calcutate3K3) / Number(this.Calcutate3K2)* 100).toFixed(2);
        this.ROAK3 = (Number(this.Calcutate3K1) / Number(this.Calcutate3K4)* 100).toFixed(2);

        this.Calcutate4K1 = params.Calcutate4K1;
        this.Calcutate4K2 = params.Calcutate4K2;
        this.Calcutate4K3 = params.Calcutate4K3;
        this.Calcutate4K4 = params.Calcutate4K4;
        this.NPMK4 = ((Number(this.Calcutate4K1) / Number(this.Calcutate4K2))*100).toPrecision(5);
        // this.NPMK4 = ((53727000 / 1180880000)*100).toFixed(4);
        this.GPMK4 = (Number(this.Calcutate4K3) / Number(this.Calcutate4K2)* 100).toFixed(2);
        this.ROAK4 = (Number(this.Calcutate4K1) / Number(this.Calcutate4K4)* 100).toFixed(2);
    }

    prevScreen = () => {
        this.props.navigation.navigate('Home', {
            
        })
    }

    valueCheckNPM1 = () => {
        if (this.NPMK1 >= '10') {
            return(
                <Image style ={styles.imageResultTrue}
                source={require('../assets/png/check.png')}/>
            )
        } else {
            return(
                <Image style ={styles.imageResultFalse}
                source={require('../assets/png/cross.png')}/>
            )
        }
    }

    valueCheckNPM2 = () => {
        if (this.NPMK2 >= '10') {
            return (
                <Image style ={styles.imageResultTrue}
                source={require('../assets/png/check.png')}/>
            ) 
        } else {
            return (
                <Image style ={styles.imageResultFalse}
                source={require('../assets/png/cross.png')}/>
            )
        }
    }

    valueCheckNPM3 = () => {
        if (this.NPMK3 >= '10') {
            return (
                <Image style ={styles.imageResultTrue}
                source={require('../assets/png/check.png')}/>
            ) 
        } else {
            return(
                <Image style ={styles.imageResultFalse}
                source={require('../assets/png/cross.png')}/>
            )
        }
    }

    valueCheckNPM4 = () => {
        if (this.NPMK4 <= '10') {
            return (
                <Image style ={styles.imageResultTrue}
                source={require('../assets/png/check.png')}/>
            ) 
        } else {
            return(
                <Image style ={styles.imageResultFalse}
                source={require('../assets/png/cross.png')}/>
            )
        }
    }

    valueCheckGPM1 = () => {
        if (this.GPMK1 >= '23.8') {
            return (
                <Image style ={styles.imageResultTrue}
                source={require('../assets/png/check.png')}/>
            )
        } else {
            return (
                <Image style ={styles.imageResultFalse}
                source={require('../assets/png/cross.png')}/>
            )
        }
    }

    valueCheckGPM2 = () => {
        if (this.GPMK2 <= '23.8') {
            return (
                <Image style ={styles.imageResultTrue}
                source={require('../assets/png/check.png')}/>
            );
        } else {
            return (
                <Image style ={styles.imageResultFalse}
                source={require('../assets/png/cross.png')}/>
            );
        }
    }

    valueCheckGPM3 = () => {
        if (this.GPMK3 <= '23.8') {
            return (
                <Image style ={styles.imageResultTrue}
                source={require('../assets/png/check.png')}/>
            )
        } else {
            return (
                <Image style ={styles.imageResultFalse}
                source={require('../assets/png/cross.png')}/>
            )
        }
    }

    valueCheckGPM4 = () => {
        if (this.GPMK4 >= '23.8') {
            return (
                <Image style ={styles.imageResultTrue}
                source={require('../assets/png/check.png')}/>
            )
        } else {
            return (
                <Image style ={styles.imageResultFalse}
                source={require('../assets/png/cross.png')}/>
            )
        }
    }

    valueCheckROA1 = () => {
        if (this.ROAK1 >= '30') {
            return (
                <Image style ={styles.imageResultTrue}
                source={require('../assets/png/check.png')}/>
            )
        } else {
            return (
                <Image style ={styles.imageResultFalse}
                source={require('../assets/png/cross.png')}/>
            )
        }
    }

    valueCheckROA2 = () => {
        if (this.ROAK2 >= '30') {
            return (
                <Image style ={styles.imageResultTrue}
                source={require('../assets/png/check.png')}/>
            )
        } else {
            return (
                <Image style ={styles.imageResultFalse}
                source={require('../assets/png/cross.png')}/>
            )
        }
    }

    valueCheckROA3 = () => {
        if (this.ROAK3 >= '30') {
            return (
                <Image style ={styles.imageResultTrue}
                source={require('../assets/png/check.png')}/>
            )
        } else {
            return (
                <Image style ={styles.imageResultFalse}
                source={require('../assets/png/cross.png')}/>
            )
        }
    }

    valueCheckROA4 = () => {
        if (this.ROAK4 >= '30') {
            return (
                <Image style ={styles.imageResultTrue}
                source={require('../assets/png/check.png')}/>
            )
        } else {
            return (
                <Image style ={styles.imageResultFalse}
                source={require('../assets/png/cross.png')}/>
            )
        }
    }



    RNPMI = () => {
        this.props.navigation.navigate('RNPMI', {   
        })
    }

    RGPMI = () => {
        this.props.navigation.navigate('RGPMI', {   
        })
    }

    RROAI = () => {
        this.props.navigation.navigate('RROAI', {   
        })
    }



// const RNPMK=({navigation}) => {
    render () {
        return (
            <View style={styles.container}>
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
                <Text style={styles.tittle}
                >Hasil Kinerja dari Segi Keuangan</Text>
                <View style={{
                    flex: 1,
                    height: 515,
                    width: 373,
                    position: 'absolute',
                    top: 130,
                    left: 20,
                    }}>
                    <ScrollView
                        horizontal={true}
                        ShowsHorizontalScrollIndicator={false}
                        >
                        {/* <View style={{
                            flexDirection: 'row',
                            width: 600,
                            height: 300,
                            }}> */}
                            <View style={styles.mainContainer1}>
                                <TouchableOpacity style= {styles.mainCircle} opacity={1.0}
                                onPress={() => {
                                    this.RNPMI();
                                }}>
                                    <Text style={styles.circleTittle}
                                    >NPM</Text>
                                </TouchableOpacity>
                                <Text style={styles.contentMainTittle}
                                >Net Profit Margin</Text>
                                <View style={styles.result1}>
                                    <Text style={styles.resultText}>Kuartal 1</Text>
                                    <Text style={styles.resultNumberText}>{this.NPMK1}%</Text>
                                    {this.valueCheckNPM1()}
                                </View>
                                <View style={styles.result2}>
                                    <Text style={styles.resultText}>Kuartal 2</Text>
                                    <Text style={styles.resultNumberText}>{this.NPMK2}%</Text>
                                    {this.valueCheckNPM2()}
                                </View>
                                <View style={styles.result3}>
                                    <Text style={styles.resultText}>Kuartal 3</Text>
                                    <Text style={styles.resultNumberText}>{this.NPMK3}%</Text>
                                    {this.valueCheckNPM3()}
                                </View>
                                <View style={styles.result4}>
                                    <Text style={styles.resultText}>Kuartal 4</Text>
                                    <Text style={styles.resultNumberText}>{this.NPMK4}%</Text>
                                    {this.valueCheckNPM4()}
                                </View>
                            </View>
                        {/* </View> */}

                        {/* <View style={{
                            flexDirection: 'row',
                            width: 600,
                            height: 300,
                            }}> */}
                            <View style={styles.mainContainer2}>
                                <TouchableOpacity style= {styles.mainCircle} opacity={1.0}
                                onPress={() => {
                                    this.RGPMI();
                                }}>
                                    <Text style={styles.circleTittle}
                                    >GPM</Text>
                                </TouchableOpacity>
                                <Text style={styles.contentMainTittle}
                                >Gross Profit Margin</Text>
                                <View style={styles.result1}>
                                    <Text style={styles.resultText}>Kuartal 1</Text>
                                    <Text style={styles.resultNumberText}>{this.GPMK1}%</Text>
                                    {this.valueCheckGPM1()}
                                </View>
                                <View style={styles.result2}>
                                    <Text style={styles.resultText}>Kuartal 2</Text>
                                    <Text style={styles.resultNumberText}>{this.GPMK2}%</Text>
                                    {this.valueCheckGPM2()}
                                </View>
                                <View style={styles.result3}>
                                    <Text style={styles.resultText}>Kuartal 3</Text>
                                    <Text style={styles.resultNumberText}>{this.GPMK3}%</Text>
                                    {this.valueCheckGPM3()}
                                </View>
                                <View style={styles.result4}>
                                    <Text style={styles.resultText}>Kuartal 4</Text>
                                    <Text style={styles.resultNumberText}>{this.GPMK4}%</Text>
                                    {this.valueCheckGPM4()}
                                </View>
                            </View>
                            <View style={styles.mainContainer3}>
                                <TouchableOpacity style= {styles.mainCircle} opacity={1.0}
                                onPress={() => {
                                    this.RROAI();
                                }}>
                                    <Text style={styles.circleTittle}
                                    >ROA</Text>
                                </TouchableOpacity>
                                <Text style={styles.contentMainTittle}
                                >Return On Asset</Text>
                                <View style={styles.result1}>
                                    <Text style={styles.resultText}>Kuartal 1</Text>
                                    <Text style={styles.resultNumberText}>{this.ROAK1}%</Text>
                                    {this.valueCheckROA1()}
                                </View>
                                <View style={styles.result2}>
                                    <Text style={styles.resultText}>Kuartal 2</Text>
                                    <Text style={styles.resultNumberText}>{this.ROAK2}%</Text>
                                    {this.valueCheckROA2()}
                                </View>
                                <View style={styles.result3}>
                                    <Text style={styles.resultText}>Kuartal 3</Text>
                                    <Text style={styles.resultNumberText}>{this.ROAK3}%</Text>
                                    {this.valueCheckROA3()}
                                </View>
                                <View style={styles.result4}>
                                    <Text style={styles.resultText}>Kuartal 4</Text>
                                    <Text style={styles.resultNumberText}>{this.ROAK4}%</Text>
                                    {this.valueCheckROA4()}
                                </View>
                            </View>
                        {/* </View> */}
                    </ScrollView>
                </View>
            </View>
        );
// };
    }
}

const styles = StyleSheet.create({
    container:{
        // width: 1000,
        // height: 1000,
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#A4EBF3',
    },
    mainImage :{
        width: 230,
        height: 300,
        marginTop: 360,
        marginLeft:185,
        position:'absolute',
        top: 0,
    },
    mainContainer1 :{
        flexDirection: 'row',
        height: 480,
        width: 373,
        justifyContent:'center',
        borderRadius: 15,
        backgroundColor: 'white',
        marginRight:0,
        marginTop: 30,
		shadowOffset:{
			width:0,
			height: 4,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation:17,
    },
    mainContainer2 :{
        flexDirection:'row',
        height: 480,
        width: 373,
        justifyContent:'center',
        borderRadius: 15,
        backgroundColor: 'white',
        marginTop: 30,
        marginLeft:10,
		shadowOffset:{
			width:0,
			height: 4,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation:17,
    },
    mainContainer3 :{
        flexDirection: 'row',
        height: 480,
        width: 373,
        justifyContent:'center',
        borderRadius: 15,
        backgroundColor: 'white',
        marginTop: 30,
        marginLeft:10,
        marginRight:0,
		shadowOffset:{
			width:0,
			height: 4,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation:17,
    },
    tittle :{
        fontSize: 24,
        color: '#333333',
        fontWeight: 'bold',
        textAlign: 'center',
        marginRight: 700,
        textShadowColor: '#000',
        textShadowOffset: { 
            width: 0, 
            height: 0.02 },
        textShadowRadius: 3,
        position: 'absolute',
        top: 50,
        left: 50,
    },
    circleTittle:{
        fontSize: 36,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginTop: 0,
    },
    btnBack: {
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
    result1: {
        width: 145,
        height: 161,
        borderRadius: 15,
        backgroundColor: '#A4EBF3',
        position: 'absolute',
        top: 100,
        left: 37,
		shadowOffset:{
			width:0,
			height: 4,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation:17,
    },
    result2: {
        width: 145,
        height: 161,
        borderRadius: 15,
        backgroundColor: '#C7FFD8',
        position: 'absolute',
        top: 100,
        left: 195,
		shadowOffset:{
			width:0,
			height: 4,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation:17,
    },
    result3: {
        width: 145,
        height: 161,
        borderRadius: 15,
        backgroundColor: '#C7FFD8',
        position: 'absolute',
        top: 280,
        left: 37,
		shadowOffset:{
			width:0,
			height: 4,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation:17,
    },
    result4: {
        width: 145,
        height: 161,
        borderRadius: 15,
        backgroundColor: '#A4EBF3',
        position: 'absolute',
        top: 280,
        left: 195,
		shadowOffset:{
			width:0,
			height: 4,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation:17,
    },
    circle:{
        height: 70,
        width: 70,
        backgroundColor :'blue',
        borderRadius: 80/2,
        position: 'absolute',
        top: 0,
    },
    mainCircle:{
        height: 110,
        width: 110,
        borderRadius: 120/2,
        backgroundColor: '#6FCF97',
        marginTop: -20,                            
        marginRight: 200,
        justifyContent: 'center'
    },
    secondCircle:{
        height: 90,
        width: 90,
        borderRadius: 100/2,
        backgroundColor: '#EB5757',
        marginTop: -20,
        marginRight: 200,
        // position: 'absolute',
        // top :30,
        // left:30,
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
    contentMainTittle:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333333',
        textAlign: 'left',
        position: 'absolute',
        top: 15,
        left: 150,
    },
    resultText:{
        fontWeight:'bold',
        fontSize: 18,
        marginTop: 10,
        textAlign: 'center',
        color: '#333333',
    },
    resultNumberText:{
        fontSize: 15,
        marginTop: 80,
        marginLeft: 25,
        marginRight: 25,
        fontWeight: 'normal',
        textAlign:'center',
        color:'#333333',
    },
    imageResultTrue:{
        width: 80,
        height: 80,
        position:'absolute',
        top:35,
        left:35,
    },
    imageResultFalse:{
        width: 60,
        height: 60,
        position:'absolute',
        top:45,
        left:45,
    },
    btnkembali: {
        backgroundColor:'#A4EBF3',
        width: 130,
        height: 40,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
    },
})

// export default RNPMK;