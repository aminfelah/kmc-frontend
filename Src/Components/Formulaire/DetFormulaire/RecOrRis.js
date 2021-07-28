
// choisir le type de non-conformité s'il s'agit d'un risque ou reclamation 
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableNativeFeedback,
    TouchableHighlight,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ScrollView,
  } from 'react-native';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import DetTab from './DetTabHeader';
import I18n from "../../../I18n/i18n";
import DetTabHeader from './DetTabHeader';
import DetRisqueTab from './DetRisqueTab';

const RecOrRis= () => {
const navigation = useNavigation();

 
   return (
     <ScrollView style={{flex: 1}}>
       <View style={styles.container}>
 
         
         <View  style={styles.elements}>
         <Text style={styles.text}>Risques</Text>
         <TouchableOpacity
           style={styles.button}
           onPress={() => navigation.navigate('DetRisqueTab')}
           >
           <Text>
           Plainte Client
 
           </Text>
         </TouchableOpacity>
 
 
 
         <TouchableOpacity
           style={styles.button}
           onPress={() => navigation.navigate('DetRisqueTab')}
           >
           <Text>
          Non Conformité
           </Text>
         </TouchableOpacity>
         </View>
         <View >
         <TouchableOpacity
           style={styles.button}
           onPress={() => navigation.navigate('DetRisqueTab')}
           >
           <Text>
           Fournisseur
           </Text>
         </TouchableOpacity>
         <Text style={styles.text}>
           Réclamations
           </Text>
         <TouchableOpacity
           style={styles.button}
 
           onPress={() => navigation.navigate('DetTabHeader')}          
           >
           <Text marginStart={2}>
           Plainte Client               
           
          
           </Text>
         </TouchableOpacity>
         </View>
         <View >
         <TouchableOpacity
           style={styles.button}
 
           onPress={() => navigation.navigate('DetTabHeader')}          >
           <Text>
           Non Conformité 
 
           </Text>
         </TouchableOpacity>
 
        
 
         <TouchableOpacity
           style={styles.button}
 
           onPress={() => navigation.navigate('DetTabHeader')}          >
           <Text >
           Fournisseur
           </Text>
         </TouchableOpacity>
         </View>
       </View>
     </ScrollView>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     alignItems: 'center',
     marginTop: 0,
   },
   elements: {
     
    
     marginTop: 30,
   },
   button: {
     backgroundColor: 'white',
     padding: 20,
     width: 300,
     borderRadius:20,
     marginTop: 20,
     marginHorizontal: "1%",
     textAlign: "center",
     justifyContent:'space-between',
     borderColor:'#fff',
     elevation:5,
     borderWidth:1
   },
   text:{
    textAlign:"center",
    marginTop:30,
    color: '#F26E11',
    fontSize: 17,
   fontWeight :'bold',
   }
 });
 
 
 
 
 export default RecOrRis;
 