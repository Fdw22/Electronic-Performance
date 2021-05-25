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

export default class Sk extends Component<Prop> {

    constructor(props) {
        super(props);
    }

    nextScreen = () => {
        this.props.navigation.navigate('CKK1',{

        });
    }

    prevScreen = () => {
        this.props.navigation.navigate('Home',{

        });
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.circle}>
                    <Text style={styles.tittle}>Kinerja dari Segi Keuangan 
                    </Text>
                    <Text style={styles.mainContent}>Pengukuran dari segi keuangan dilakukan menggunakan SPM dengan kategori yang dinilai adalah NPM, GPM dan ROA. 
                    </Text>
                </View>
                <TouchableOpacity style={styles.btnBack}
                        onPress={() => {
                            this.prevScreen();
                        }}
                    >
                    <Image style={styles.btnBackImage}
                        source={require('../assets/png/white_back.png')}
                    />
                </TouchableOpacity>
                <Image style={styles.mainImage}
                    source={require('../assets/png/support_flipped.png')}
                />
                <TouchableOpacity style={styles.btnMulai}
                        onPress={() => {
                            this.nextScreen();
                        }}
                    >
                    <Text style={styles.btnMulaiText}>Mulai</Text>

                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#A4EBF3',
    },
    circle:{
        flex:2,
        width: 600,
        height: 450,
        backgroundColor: '#C7FFD8',
        borderBottomRightRadius: 700,
        borderBottomLeftRadius: 0,
        marginBottom: 220,
        marginLeft: -100,
        shadowColor: '#000',
        shadowOffset: {
            width:0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4.65,
        elevation: 5,
    },
    mainImage: {
        width: 300,
        height: 370,
        position: 'absolute',
        bottom: -20,
        left: 120,
    },
    btnBackImage:{
        width: 30,
        height: 30,
    },
    btnBack:{
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
    tittle:{
        fontSize: 36,
        fontWeight:'bold',
        textAlign: 'left',
        marginRight:350,
        position:'absolute',
        top:80,
        left:130,
    },
    mainContent:{
        fontWeight:'normal',
        fontSize: 14,
        textAlign:'justify',
        marginRight: 360,
        position:'absolute',
        top: 190,
        left: 135,
    },
    btnMulai: {
        backgroundColor:'#F9F9F9',
        width: 150,
        height: 45,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 550,
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
        color: '#A4EBF3',
    },

})
