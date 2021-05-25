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

interface Prop{
	navigation: any;
}

interface State{

}

export default class RP2 extends Component<Prop, State> {

	Norm: string;
    NormOFCT: string;
    NormAD: string;

	constructor(props) {
		super(props);
		const {params} = this.props.navigation.state;

		this.Norm = params.Norm;
		this.NormOFCT = params.NormOFCT;
		this.NormAD = params.NormAD;

	}

	nextScreenRPA = () => {
		this.props.navigation.navigate('RPAC1', {
			Norm: this.Norm,
			NormAD: this.NormAD,
			NormOFCT: this.NormOFCT,

		});
	}

	nextScreenFinalScore = () => {
		this.props.navigation.navigate('Bobot', {
			Norm: this.Norm,
			NormAD: this.NormAD,
			NormOFCT: this.NormOFCT,
		});
	}

	prevScreen = () => {
		this.props.navigation.navigate('Home',{

		});
	}


	render() {
		return (
			<View style={styles.container}>
				<Text style={styles.tittle}>Kinerja dari segi Rantai Pasokan 
				</Text>
				<Text style={styles.desc}>Pengukuran kinerja rantai pasok dilakukan dengan menggunakan metode SCOR dengan hanya 3 atribut penilaian kinerja yaitu reliability, responsiveness dan agility.
				</Text>
				<Image style={styles.mainImage}
					source={require('../assets/png/payment.png')}
				/>
				<TouchableOpacity style={styles.btnBack}
					onPress={() =>{
						this.prevScreen();
					}}>
					<Image style ={styles.btnBackImage}
					source={require('../assets/png/white_back.png')}
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
							<TouchableOpacity style={styles.content3}
								onPress={() => {
									this.nextScreenRPA();
								}}
								>
								<Text style={styles.tittle3}>
									Agility
								</Text>
								<Image style={{
									width:240,
									height:165,
									marginLeft: 10,
									marginTop:100,
								}}
								source={require('../assets/png/support.png')}
								/>
							</TouchableOpacity>
						</View>
						<View style={{flexDirection: 'row'}}>
							<TouchableOpacity style={styles.content4}
								onPress={() => {
									this.nextScreenFinalScore();
								}}
								>
								<Text style={styles.tittle3}>
									Final Score
								</Text>
								<Image style={{
									width:240,
									height:165,
									marginLeft: 10,
									marginTop:100,
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

const styles=StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent:'center',
        backgroundColor: '#C7FFD8',
    },
    mainImage:{
        width: 300,
        height: 300,
        marginTop: 360,
        marginLeft:165,
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
    btnBackImage: {
        width: 30,
        height: 30,
    },
    secondCircle:{
        height: 90,
        width: 90,
        borderRadius: 100/2,
        backgroundColor: '#EB5757',
        position: 'absolute',
        top :30,
        left:30,
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
	tittle:{
		fontWeight:'bold',
		fontSize:36,
		textAlign:'left',
		marginRight: 200,
		position:'absolute',
		top:50,
		left: 40,
	},
	desc:{
		fontSize: 14,
		fontWeight:'normal',
		textAlign: 'justify',
		marginRight: 160,
		position: 'absolute',
		top: 180,
		left: 40,
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
		backgroundColor: '#F2994A',
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
	content3: {
		backgroundColor: '#F2C94C',
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
	content4: {
		backgroundColor: '#2D9CDB',
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
        marginRight: 40,
    },
})

