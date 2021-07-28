/* eslint-disable */
import React from 'react';
//import Home from './Src/Components/Home';
import Home from './Src/Components/Home';
import HomeScreen from './Src/Screens/Home';
import {StyleSheet} from 'react-native';
import Welcome from './Src/Screens/Welcome';
import Login from './Src/Screens/Login';
import Signin from './Src/Screens/Signin';

import RecOrRis from './Src/Components/Formulaire/DetFormulaire/RecOrRis';

import ListePage from './Src/Screens/mixed/Listepage'

import AddCause from './Src/Components/Formulaire/NewCause';
import AddCons from './Src/Components/Formulaire/NewConsequence';
import TabBarProvider from './Src/contexts/TabBarProvider';
import TabNavigator from './Src/Navigation/TabNavigator';

import SelectedCause from './Src/Screens/mixed/SelectedCause';
import SousCause from './Src/Screens/mixed/SousCause';
import FormUpdate from './Src/Screens/mixed/FormulaireUpdateCause';


import ListConsequence from './Src/Screens/mixed/Consequence';

import HeaderTab from './Src/Screens/mixed/TabHeaderPrincipale';

import DetRisqueTab from './Src/Components/Formulaire/DetFormulaire/DetRisqueTab';
import DetTabHeader from './Src/Components/Formulaire/DetFormulaire/DetTabHeader';
import FormRisque from './Src/Components/Formulaire/DetFormulaire/Formulaire/FormRis/FormRisque';
import AddsousCause from './Src/Components/Formulaire/NewSousCause';
import AddsousCons from './Src/Components/Formulaire/NewSousCons';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Analyse from './Src/Screens/mixed/Analyse';
import TabHeaderCa from './Src/Screens/mixed/TabHeaderCa';
import SousConsCa from './Src/Screens/mixed/SousConsCa';
import SousCauseCa from './Src/Screens/mixed/SousCauseCa';
import SelectedCauseCa from './Src/Screens/mixed/SelectedCauseCa';

const Stack = createStackNavigator();

const App = () => {
  return (
    <TabBarProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Welcome" component={Welcome}
    options={{headerShown: false}}
    
     />
       <Stack.Screen name="Login" options= {{headerShown: false}} component={Login} />
       <Stack.Screen name="Signin" options= {{headerShown: false}} component={Signin} />
 
     

     <Stack.Screen name="TabNavigator" component={TabNavigator} 
      options={{headerShown: false}} />

      <Stack.Screen name='RecOrRis' component={RecOrRis}  options={{ title: '' }}/>

      <Stack.Screen name='Home' component={Home } options={{ title: '' }}/>


      <Stack.Screen name='HomeScreen' component={HomeScreen } options={{headerShown: false}}/>

       
      <Stack.Screen name='DetTab' component={HeaderTab} role='detecteur' options={{headerShown: false}}/>
<Stack.Screen name='RPHeaderTab' component={HeaderTab} role='responsablePrincipale'  options={{headerShown: false}}></Stack.Screen>
      <Stack.Screen name='HeaderTabInf' component={HeaderTab} role='informe' options={{headerShown: false}}/>
      <Stack.Screen name='HeaderTabContribue' component={HeaderTab} role='contribue' options={{headerShown: false}}/>


      <Stack.Screen name='SelectedCause' component={SelectedCause } role='responsablePrincipale' options={{headerShown: false}}/>
      <Stack.Screen name='SousCause ' component={SousCause} />
      
     

  

     
      

  
      <Stack.Screen name='ListeAR' component={ListePage} role='detecteur' options={{headerShown: false}}/>

    
      <Stack.Screen name='ListeRP' component={ListePage} role='responsablePrincipale' options={{headerShown: false}}/>
      <Stack.Screen name='ListeInforme' component={ListePage} role='informe' options={{headerShown: false}}/>
      <Stack.Screen name='ListeContribue' component={ListePage} role='contribue' options={{headerShown: false}}/>
      

      <Stack.Screen name='AddCause' component={AddCause} options={{headerShown: false}}/>

    <Stack.Screen name='AddCons' component={AddCons} options={{headerShown: false}}/>
    <Stack.Screen name='AddsousCause' component={AddsousCause} options={{headerShown: false}}/>
    <Stack.Screen name='AddsousCons' component={AddsousCons} options={{headerShown: false}}/>

      <Stack.Screen name='FormRisque' component={FormRisque} options={{headerShown: false}}/>
      <Stack.Screen name='ListConsequence' component={ListConsequence} options={{headerShown: false}}/>
      <Stack.Screen name='FormUpdate ' component={FormUpdate} />
      <Stack.Screen name='DetRisqueTab' component={DetRisqueTab} options={{headerShown: false}}/>
      <Stack.Screen name='DetTabHeader' component={DetTabHeader} options={{headerShown: false}}/>
      <Stack.Screen name='TabHeaderCa' component={TabHeaderCa} options={{headerShown: false}}/>
      <Stack.Screen name='SousConsCa' component={SousConsCa} options={{headerShown: false}}/>
      <Stack.Screen name='SousCauseCa' component={SousCauseCa} options={{headerShown: false}}/>
      <Stack.Screen name='SelectedCauseCa' component={SelectedCauseCa} options={{headerShown: false}}/>

      <Stack.Screen name='Analyse' component={Analyse} options={{headerShown: false}}/>

      </Stack.Navigator>
          
      
          </NavigationContainer>
          
         
           </TabBarProvider>
            
         
         
         
         
         
         
    
         );
      }
     


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;


