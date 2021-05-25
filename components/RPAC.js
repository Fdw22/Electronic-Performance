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

export default class RPAC extends Component<Prop, State> {

    constructor(props){
        super(props);
        
    }

    nextScreen1 = () => {
        this.props.navigation.navigate('RPAC1',{

        });
    }

    nextScreen2 = () => {
        this.props.navigation.navigate('RPAC2',{

        });
    }

    nextScreen3 = () => {
        this.props.navigation.navigate('RPAC3',{

        });
    }

    nextScreen4 = () => {
        this.props.navigation.navigate('RPAC4',{

        });
    }
    nextScreen5 = () => {
        this.props.navigation.navigate('RPAR',{

        });
    }

    prevScreen = () => {
        this.props.navigation.navigate('RP',{

        });
    }

    render(){
        return (
            <View style={styles.container,{flex: 1}}>
                <View style={{
                    height: 1000,
                    width: 500,
                    backgroundColor: '#C7FFD8',
                    position: 'absolute',
                    top:0,
                    }}>
                    <Image source={require('../assets/png/payment.png')}
                        style={{
                            alignItems:'center',
                            width:230,
                            height: 300,
                            marginTop: 360,
                            marginLeft: 180,
                            overflow: 'hidden',
                            position:'absolute',
                            top: 0,
                        }}/>
                </View>
                <View style={styles.mainContainer}>
                    <Text style={styles.tittle}>
                    Upside Adaptability
                    </Text>
                    <View style={styles.box1}>
                        <Text style={styles.mainText1}> Kuartal 1</Text>
                            <Text style={styles.secondText1}> Januari - Februari</Text>
                                <TouchableOpacity style={styles.circleLeft}
                                    onPress={() => {
                                        this.nextScreen1();
                                    }}
                                    >
                                    <Text style ={{
                                        fontSize: 24,
                                        fontWeight: 'bold',
                                        color: '#A4EBF3',
                                        textAlign: 'center',
                                    }}> Isi </Text>
                                </TouchableOpacity>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.mainText2}> Kuartal 2</Text>
                            <Text style={styles.secondText2}> Maret - Juni</Text>
                                <TouchableOpacity style={styles.cicrleRight}
                                    onPress={() => {
                                        this.nextScreen2();
                                    }}
                                    >
                                    <Text style={{
                                        fontSize: 25,
                                        fontWeight: 'bold',
                                        color:'#A4EBF3',
                                        textAlign: 'center',
                                    }}> Isi </Text>
                                </TouchableOpacity>
                    </View>
                    <View style={styles.box3}>
                        <Text style={styles.mainText1}> Kuartal 3</Text>
                            <Text style={styles.secondText1}> Juli - September</Text>
                                <TouchableOpacity style={styles.circleLeft}
                                    onPress={() => {
                                        this.nextScreen3();
                                    }}
                                    >
                                    <Text style ={{
                                        fontSize: 24,
                                        fontWeight: 'bold',
                                        color: '#A4EBF3',
                                        textAlign: 'center',
                                    }}> Isi </Text>
                                </TouchableOpacity>

                    </View>
                    <View style={styles.box4}>
                        <Text style={styles.mainText2}> Kuartal 4</Text>
                            <Text style={styles.secondText2}> Oktober - Desember</Text>
                                <TouchableOpacity style={styles.cicrleRight}
                                    onPress={() => {
                                        this.nextScreen4();
                                    }}
                                    >
                                    <Text style={{
                                        fontSize: 25,
                                        fontWeight: 'bold',
                                        color:'#A4EBF3',
                                        textAlign: 'center',
                                    }}> Isi </Text>
                                </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.btnMulai}
                    onPress={() => {
                        this.nextScreen5();
                    }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                            color: '#828282',
                        }}> Hitung </Text>
                </TouchableOpacity>

                <TouchableOpacity style={ styles.btnBack}
                    onPress={() => {
                        this.prevScreen();
                    }}>
                        <Image style ={styles.btnBackImage}
                        source={require('../assets/png/white_back.png')}
                        />
                </TouchableOpacity>
                

            </View>
        );
    }
};

const styles = StyleSheet.create ({
    container: {
        height: 1000,
        width: 1000,
        backgroundColor: '#C7FFD8',
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
    box1: {
        height: 100,
        width: 295,
        backgroundColor: '#A4EBF3',
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
        position: 'absolute',
        top: 100,
        left: 80,
		shadowOffset:{
			width:0,
			height: 4,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation:17,
    },
    box2: {
        height: 100,
        width: 295,
        backgroundColor: '#C7FFD8',
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        position: 'absolute',
        top: 215,
        right: 80,
		shadowOffset:{
			width:0,
			height: 4,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation:17,
    },
    box3: {
        height: 100,
        width: 295,
        backgroundColor: '#A4EBF3',
        borderBottomLeftRadius: 15,
        borderTopLeftRadius: 15,
        position: 'absolute',
        top: 335,
        left: 80,
		shadowOffset:{
			width:0,
			height: 4,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation:17,
    },
    box4: {
        height: 100,
        width: 295,
        backgroundColor: '#C7FFD8',
        borderBottomRightRadius: 15,
        borderTopRightRadius: 15,
        position: 'absolute',
        top: 450,
        right: 80,
		shadowOffset:{
			width:0,
			height: 4,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation:17,
    },
    mainText1: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'white',
        textAlign: 'left',
        marginTop: 20,
        marginLeft: 20,
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0.05 },
        textShadowRadius: 1.5,
    },
    mainText2: {
        fontSize: 24,
        fontWeight: 'bold',
        color:'#828282',
        textAlign: 'right',
        marginTop: 20,
        marginRight: 20,
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0.05 },
        textShadowRadius: 1.5
    },
    secondText1: {
        fontWeight: 'normal',
        color:'white',
        textAlign: 'left',
        marginTop: 10,
        marginLeft: 20,
        fontSize: 16,
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0.05 },
        textShadowRadius: 1.5,
    },
    secondText2: {
        fontWeight: 'normal',
        color:'#828282',
        textAlign: 'right',
        marginTop: 10,
        marginRight: 20,
        fontSize: 16,
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 0.05 },
        textShadowRadius: 1,
    },
    TextShadowStyle:{
       textAlign: 'center',
       fontSize: 30,
       textShadowColor: '#E91E63',
       textShadowOffset: { width: 1, height: 4 },
       textShadowRadius: 5
    },
    circleLeft: {
        height : 70,
        width : 70,
        backgroundColor: '#F9F9F9',
        borderRadius: 80/2,
        position: 'absolute',
        top: 16,
        left: 200,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
    },
    cicrleRight: {
        height : 70,
        width : 70,
        backgroundColor: '#F9F9F9',
        borderRadius: 80/2,
        position: 'absolute',
        top: 16,
        right: 200,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 7,
    },
    btnMulai: {
        backgroundColor:'#C7FFD8',
        width: 130,
        height: 40,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 610,
        left: 140,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 10,
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
})
