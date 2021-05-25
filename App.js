/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {AppStack} from './router/StackNavigator';

import {
  View,
  Text,
  ScrollView
} from 'react-native';

import Home from './components/Home';
import RP from './components/RP';
import RP2 from './components/RP2';
import RP3 from './components/RP3';
import RP4 from './components/RP4';
import Landing from './components/Landing';
import Sk from './components/Sk';
import CK from './components/CK';
import CKK1 from './components/CKK1';
import CKK2 from './components/CKK2';
import CKK3 from './components/CKK3';
import CKK4 from './components/CKK4';
import RNPMK from './components/RNPMK';
import RGPMI from './components/RGPMI';
import RNPMI from './components/RNPMI';
import RROAI from './components/RROAI';
import RPRC from './components/RPRC';
import RPRK1 from './components/RPRK1';
import RPRK2 from './components/RPRK2';
import RPRK3 from './components/RPRK3';
import RPRK4 from './components/RPRK4';
import RPRR from './components/RPRR';
import RPRRK from './components/RPRRK';
import RPPR from './components/RPPR';
import RPPRK from './components/RPPRK';
import RPPC from './components/RPPC';
import RPAC from './components/RPAC';
import RPAC1 from './components/RPAC1';
import RPAC2 from './components/RPAC2';
import RPAC3 from './components/RPAC3';
import RPAC4 from './components/RPAC4';
import RPAR from './components/RPAR';
import RPARK from './components/RPARK';
import Bobot from './components/Bobot';
import FinalScore from './components/FinalScore';
import RPFSD from './components/RPFSD';


const MainNavigator = createStackNavigator({

  // Landing: {
  //   screen: Landing,
  //   navigationOptions :{
  //     headerShown: false,
  //   }},

  Home: {
    screen: Home,
    navigationOptions :{
      headerShown: false,
    }},

  RP: {
    screen: RP,
    navigationOptions :{
      headerShown: false,
    }},
  RP2: {
    screen: RP2,
    navigationOptions :{
      headerShown: false,
    }},
  RP3: {
    screen: RP3,
    navigationOptions :{
      headerShown: false,
    }},
  RP4: {
    screen: RP4,
    navigationOptions :{
      headerShown: false,
    }},

  Sk: {
    screen: Sk,
    navigationOptions :{
      headerShown: false,
    }},

  CK: {
    screen: CK,
    navigationOptions :{
      headerShown: false,
    }},

  CKK1: {
    screen: CKK1,
    navigationOptions :{
      headerShown: false,
      showVerticalScrollIndicatior:false,
    }},

  CKK2: {screen: CKK2,
  navigationOptions :{
      headerShown: false,
    }},

  CKK3: {screen: CKK3,
  navigationOptions :{
      headerShown: false,
    }},
  
  CKK4: {screen: CKK4,
  navigationOptions :{
      headerShown: false,
    }},
  
  RNPMK: {screen: RNPMK,
  navigationOptions :{
      headerShown: false,
    }},

  RGPMI: {screen: RGPMI,
  navigationOptions :{
      headerShown: false,
    }},

  RNPMI: {screen: RNPMI,
  navigationOptions :{
      headerShown: false,
    }},

  RROAI: {screen: RROAI,
  navigationOptions :{
      headerShown: false,
    }},

  RPRC: {screen: RPRC,
  navigationOptions :{
      headerShown: false,
    }},

  RPRK1: {screen: RPRK1,
  navigationOptions :{
      headerShown: false,
    }},

  RPRK2: {screen: RPRK2,
  navigationOptions :{
      headerShown: false,
    }},

  RPRK3: {screen: RPRK3,
  navigationOptions :{
      headerShown: false,
    }},

  RPRK4: {screen: RPRK4,
  navigationOptions :{
      headerShown: false,
    }},

  RPRR: {screen: RPRR,
  navigationOptions :{
      headerShown: false,
    }},

  RPRRK: {screen: RPRRK,
  navigationOptions :{
      headerShown: false,
    }},

  RPPR: {screen: RPPR,
  navigationOptions :{
      headerShown: false,
    }},

  RPPRK: {screen: RPPRK,
  navigationOptions :{
      headerShown: false,
    }},

  RPPC: {screen: RPPC,
  navigationOptions :{
      headerShown: false,
    }},

  RPAC: {screen: RPAC,
  navigationOptions :{
      headerShown: false,
    }},

  RPAC1: {screen: RPAC1,
  navigationOptions :{
      headerShown: false,
    }},

  RPAC2: {screen: RPAC2,
  navigationOptions :{
      headerShown: false,
    }},

  RPAC3: {screen: RPAC3,
  navigationOptions :{
      headerShown: false,
    }},

  RPAC4: {screen: RPAC4,
  navigationOptions :{
      headerShown: false,
    }},

  RPAR: {screen: RPAR,
  navigationOptions :{
      headerShown: false,
    }},

  RPARK: {screen: RPARK,
  navigationOptions :{
      headerShown: false,
    }},

  Bobot: {screen: Bobot,
  navigationOptions :{
      headerShown: false,
    }},

  FinalScore: {screen: FinalScore,
  navigationOptions :{
      headerShown: false,
    }},

  RPFSD: {screen: RPFSD,
  navigationOptions :{
      headerShown: false,
    }},

});

const App = createAppContainer(MainNavigator);
export default App;

// const App = () => {
//   return (
//     <NavigationContainer>
//       <AppStack/>
//     </NavigationContainer>

    // <Home/>
    // <Landing/>
    // <Sk/>
    //<Ck/>
    // <CKK1/>
    // <CKK2/>
    // <CKK3/>
    // <CKK4/>
    // <RNPMK/>
    // <RGPMI/>
    // <RROAI/>
    // <RNPMI/>
    // <RP/>
    // <RPRC/>
    // <RPRK1/>
    // <RPRK2/>
    // <RPRK3/>
    // <RPRK4/>
    // <RPRR/
    // <RPPC/>
    // <RPPR/>
    // <RPAC/>
    // <RPAC1/>
    // <RPAC2/>
    // <RPAC3/>
    // <RPAC4/>
    // <RPAR/>
    // <FinalScore/>
    // <RPFSD/>
//   )
// };
// export default App;
