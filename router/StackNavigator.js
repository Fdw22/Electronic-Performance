import React from "react";
import {createStackNavigator, TransitionPresets} from  "@react-navigation/stack";

import Home from '../components/Home';
import RP from '../components/RP';
import Landing from '../components/Landing';
import Sk from '../components/Sk';

import CK from '../components/CK';
import CKK1 from '../components/CKK1';
import CKK2 from '../components/CKK2';
import CKK3 from '../components/CKK3';
import CKK4 from '../components/CKK4';

import RNPMK from '../components/RNPMK';
import RGPMI from '../components/RGPMI';
import RNPMI from '../components/RNPMI';
import RROAI from '../components/RROAI';
import RPRC from '../components/RPRC';

import RPRK1 from '../components/RPRK1';
import RPRK2 from '../components/RPRK2';
import RPRK3 from '../components/RPRK3';
import RPRK4 from '../components/RPRK4';
import RPRR from '../components/RPRR';

import RPPR from '../components/RPPR';

import RPPC from '../components/RPPC';
import RPAC from '../components/RPAC';

import RPAC1 from '../components/RPAC1';
import RPAC2 from '../components/RPAC2';
import RPAC3 from '../components/RPAC3';
import RPAC4 from '../components/RPAC4';
import RPAR from '../components/RPAR';

import FinalScore from '../components/FinalScore';
import RPFSD from '../components/RPFSD';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Landing"
                component={Landing}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                }}
            />
            <Stack.Screen 
                name="Home"
                component={Home}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />
            <Stack.Screen 
                name="RP"
                component={RP}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />
            <Stack.Screen 
                name="Sk"
                component={Sk}
                options={{
                    headerShown: false,
                    }}
            />
            <Stack.Screen 
                name="CK"
                component={CK}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />
            <Stack.Screen 
                name="CKK1"
                component={CKK1}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />
            <Stack.Screen 
                name="CKK2"
                component={CKK2}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />
            <Stack.Screen 
                name="CKK3"
                component={CKK3}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />
            <Stack.Screen 
                name="CKK4"
                component={CKK4}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />
            <Stack.Screen 
                name="RNPMK"
                component={RNPMK}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />
            <Stack.Screen 
                name="RGPMI"
                component={RGPMI}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />
            <Stack.Screen 
                name="RNPMI"
                component={RNPMI}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />            
            <Stack.Screen 
                name="RROAI"
                component={RROAI}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />            
            <Stack.Screen 
                name="RPRC"
                component={RPRC}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />            
            <Stack.Screen 
                name="RPRK1"
                component={RPRK1}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />            
            <Stack.Screen 
                name="RPRK2"
                component={RPRK2}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />           
            <Stack.Screen 
                name="RPRK3"
                component={RPRK3}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />            
            <Stack.Screen 
                name="RPRK4"
                component={RPRK4}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />            
            <Stack.Screen 
                name="RPRR"
                component={RPRR}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />            
            <Stack.Screen 
                name="RPPR"
                component={RPPR}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />            
            <Stack.Screen 
                name="RPPC"
                component={RPPC}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />
            <Stack.Screen 
                name="RPAC"
                component={RPAC}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />
            <Stack.Screen 
                name="RPAC1"
                component={RPAC1}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />
            <Stack.Screen 
                name="RPAC2"
                component={RPAC2}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />
            <Stack.Screen 
                name="RPAC3"
                component={RPAC3}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />
            <Stack.Screen 
                name="RPAC4"
                component={RPAC4}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />
            <Stack.Screen 
                name="RPAR"
                component={RPAR}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />
            <Stack.Screen 
                name="FinalScore"
                component={FinalScore}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />
            <Stack.Screen 
                name="RPFSD"
                component={RPFSD}
                options={{
                    headerShown: false,
                    TransitionSpec:{
                        open:TransitionPresets.RevealFromBottomAndroid,
                        close:TransitionPresets.RevealFromBottomAndroid
                    }
                    }}
            />















        </Stack.Navigator>
    );
};

export {AppStack}