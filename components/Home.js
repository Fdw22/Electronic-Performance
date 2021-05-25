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
import Homei from '../assets/png/home.png';
import Support from '../assets/png/support.png';

interface Prop {
	navigation: any;
}

export default class Home extends Component<Prop> {

	constructor(props) {
		super(props);
	}

	nextScreenSk = () => {
		this.props.navigation.navigate('Sk',{

		});
	}

	nextScreenRP = () => {
		this.props.navigation.navigate('RP',{

		});
	}


	render() {
		return (
			<View style={styles.container,{flex: 1}}>
				<Text style={styles.mainTittle}>
					Selamat datang di 
				</Text>
				<Text style={styles.mainTittle2}>
					E-Perform
				</Text>
				<Text style={styles.tittle}>
					Mari kita hitung kinerja mu sekarang !
				</Text>
				<TouchableOpacity style={styles.containerImage}
					>
					<Image
						style={{
						width:614,
						height:473,  
						marginLeft: '-22%',
						marginTop:'-20%'}}
						source={require('../assets/png/home.png')}
					/>
				</TouchableOpacity>
				<View style={ styles.main,
					{flex: 1,
					marginTop: 50, 
					height: 400,
					width: 500,
					position: 'absolute',
					top: 200,
					bottom: 200,
					}}>
					<ScrollView 
						horizontal={true}
						ShowsHorizontalScrollIndicator={false}
						>
						<View style={{flexDirection: 'row'}}>
							<TouchableOpacity style={styles.content}
								onPress={() => {
									this.nextScreenSk();
								}}
								>
								<Text style={styles.tittle3}>
									Kinerja Dari Segi Keuangan.
								</Text>
								<Image style={{
									width:250,
									height:175,
									marginLeft: 0,
									marginTop:5,
								}}
								source={require('../assets/png/support.png')}
								/>
							</TouchableOpacity>
						</View>
						<View style={{flexDirection: 'row'}}>
							<TouchableOpacity style={styles.content2}
								onPress={() => {
									this.nextScreenRP();
								}}
								>
								<Text style={styles.tittle3}>
									Kinerja Dari Segi Rantai Pasok.
								</Text>
								<Image style={{
									width:250,
									height:175,
									marginLeft: 0,
									marginTop:5,
								}}
								source={require('../assets/png/payment.png')}
								/>
							</TouchableOpacity>
						</View>
						<View style={{flexDirection: 'row'}}>
							<View style={styles.hiddencontent}>
							</View>
						</View>
					</ScrollView>

				</View>
			</View>
		);
	}
}


const styles = StyleSheet.create({
    container: {
		marginTop: 5,
        backgroundColor: '#A4EBF3',
		height: 425,
		shadowColor: '#000',
		shadowOffset:{
			width:0,
			height: 3,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation:15,
    },
    containerImage: {
		height:100,
		width:100,
		position: 'absolute',
		top: 100,
    },
	main: {
		height: 257,
		width: 355,
		position: 'absolute',
		top: 200,
	},
	content: {
		backgroundColor: '#A4EBF3',
		width: 257,
		height:355,
		marginTop: 28,
		marginLeft: 30,
		borderRadius: 15,
		shadowOffset:{
			width:0,
			height: 2,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation:7,
	},
	content2: {
		backgroundColor: '#C7FFD8',
		width: 257,
		height:355,
		marginTop: 28,
		marginLeft: 30,
		borderRadius: 15,
		shadowOffset:{
			width:0,
			height: 2,
		},
		shadowOpacity: 0.29,
		shadowRadius: 4.65,
		elevation:7,
	},
	hiddencontent:{
		backgroundColor: '#66000000',
		width: 100,
		height:355,
		marginTop: 28,
		marginLeft: 30,
		borderRadius: 15,
	},
    tittle: {
        fontFamily:'MontT',
        fontSize: 20,
        color: '#4F4F4F',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 40,
        marginRight: 140,
    },
	mainTittle: {
        fontFamily:'MontT',
        fontSize: 30,
        color: '#4F4F4F',
        fontWeight: 'bold',
        marginTop: 60,
        marginBottom: 10,
        marginLeft: 40,
        marginRight: 180,
    },
	mainTittle2: {
        fontFamily:'MontT',
        fontSize: 30,
        color: '#f0a500',
        fontWeight: 'bold',
        marginTop: -15,
        marginBottom: 10,
        marginLeft: 40,
        marginRight: 180,
    },
    tittle2: {
        fontFamily:'MontT',
        fontSize: 24,
        color: '#4F4F4F',
        fontWeight: 'bold',
        marginTop: 60,
        marginBottom: 10,
        marginLeft: 40,
        marginRight: 100,
    },
    tittle3: {
        fontFamily:'MontT',
        fontSize: 36,
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginTop: 30,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
    },
})

// export default Home;