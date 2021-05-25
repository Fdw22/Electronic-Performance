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

interface Prop{
    navigation:any;
}

interface State {
    CR1: string;
    CR2: string;
    CR3: string;
    CR4: string;
    resCR: string;
}

export default class RPPC extends Component<Prop, State> {

    constructor(props){
        super(props);
        const {params} = this.props.navigation.state;

		this.Norm = params.Norm;

        this.state = {
            CR1: '',
            CR2: '',
            CR3: '',
            CR4: '',
            resCR: '',
        };
    }

    sendData = () => {
        this.props.navigation.navigate('RPPRK',{
            Norm: this.Norm,
            CR1: this.state.CR1,
            CR2: this.state.CR2,
            CR3: this.state.CR3,
            CR4: this.state.CR4,
            resCR: this.state.resCR,
        });
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
                    >Responsiveness</Text>
                    <Text style ={styles.secondTittle}
                    >Order Fulfilment Cycle Time </Text>
                    <View style={styles.inputWrap}>
                        <TextInput 
                            placeholder="Kuartal 1" 
                            style={styles.input}
                            keyboardType='numeric'
                            onChangeText={(text) => this.setState({CR1: text})}
                            value={this.state.CR1} 
                        />
                        <TextInput 
                            placeholder="Kuartal 2" 
                            style={styles.input}
                            keyboardType='numeric'
                            onChangeText={(text) => this.setState({CR2: text})}
                            value={this.state.CR2} 
                        />
                        <TextInput 
                            placeholder="Kuartal 3" 
                            style={styles.input}
                            keyboardType='numeric'
                            onChangeText={(text) => this.setState({CR3: text})}
                            value={this.state.CR3} 
                        />
                        <TextInput 
                            placeholder="Kuartal 4" 
                            style={styles.input}
                            keyboardType='numeric'
                            onChangeText={(text) => this.setState({CR4: text})}
                            value={this.state.CR4} 
                        />

                    </View>
                    <TouchableOpacity style={styles.btnMulai}
                        onPress={() => {
                            this.sendData();
                        }}>
                        <Text style ={styles.btnMulaiText}
                        >Hitung</Text>
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
        top: 500,
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

