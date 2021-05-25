import React, { Component } from 'react';
import { useEffect } from 'react';
import {
    ActivityIndicator,
    Image,
    ScrollView,
    StyleSheet,
    ImageBackground,
    Text,
    View
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

interface Prop {
    navigation: any;
}

export default class Landing extends Component<Prop> {

    constructor(props) {
        super(props);
        
    }

    nextScreen = () => {
        this.props.navigation.navigate('Home', {

        });
    }


    render() {
        return (
            <View style={styles.container}>
                <View style ={styles.circle1}>
                    <Text style={styles.tittle}
                    onPress={() => {
                    this.nextScreen();
                    }}
                    >
                    Sistem Pengukuran Kinerja Rantai Pasok</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:'#C7FFD8',
        height: 1000,
        width: 1000,
    },
    circle1: {
        width: 600,
        height: 450,
        backgroundColor: '#A4EBF3',
        borderBottomRightRadius: 700,
        borderBottomLeftRadius: 0,
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
    tittle: {
        fontFamily: '../assets/font/MontT.ttf',
        color: '#4F4F4F',
        fontSize: 48,
        fontWeight: 'bold',
        marginRight: 150,
        marginLeft: 170,
        marginTop: 200,
        textAlign:'right',
    },
})
// export default Landing;