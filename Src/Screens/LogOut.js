
// page de déconnexion
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View ,TouchableHighlight} from "react-native";
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import I18n from "../../Src/I18n/i18n";
import AsyncStorage from '@react-native-community/async-storage';

const ButtonLogOut = () =>  {
    const navigation = useNavigation();

    function logCurrentStorage() {
        AsyncStorage.getAllKeys((err, keys) => {
          AsyncStorage.multiGet(keys, (error, stores) => {
            stores.map((result, i, store) => {
              console.log({ [store[i][0]]: store[i][1] });
              return true;
            });
          });
        });
      }
//const handleSubmitPress= async () =>{
  //  const userToken = await AsyncStorage.getItem('userToken')
/*
      try {
   await AsyncStorage.removeIte('userToken').then(()=>{ navigation.navigate('Login')});
   console.log('Done.')

} catch(e) {
    console.log(' not Done')
  }

 */ 

const userToken = async () => {
     
  // supprimer usertoken pour déconnécter et revenir ala page d'acceuil sinon il affiche un aerreur 
 await AsyncStorage.getItem('userToken')
 }

 const clearAll = async () => {

    try {
      await AsyncStorage.clear(userToken).then(()=>{ navigation.navigate('Login')});
    } catch(e) {
    }
    
    logCurrentStorage() 
    console.log('Done.')
   
    console.log('****')
    
  }
   
    return (
<View>
    <Pressable
        style={styles.button}
        onPress={clearAll}
      >
       
<AntDesign name="logout" size={35} color="#F26E11" >
  
  </AntDesign>
       </Pressable>
       </View>
     ); 
 };
 export default ButtonLogOut;
 const styles = StyleSheet.create({ 
 
     button:{
         marginLeft:180,
         marginTop:5, 
         borderRadius: 50,
         padding:10,
         margin:10,
     }
 
 })
 