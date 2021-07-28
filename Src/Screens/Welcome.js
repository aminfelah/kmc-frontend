
// RQ : I18n pour la traduction 
// Interface d 'acceui (1 er interface)
import * as React from 'react';
import { Alert, View, StyleSheet,Image, TouchableOpacity ,Text,StatusBar} from 'react-native';
import I18n from "../I18n/i18n";
import TextAnimator from '../Components/TextAnimation';

import LinearGradient from 'react-native-linear-gradient';

import * as Animatable from 'react-native-animatable';
import { useTheme } from '@react-navigation/native';

export default function Welcome({navigation}){
  const { colors } = useTheme();
  
  const _onFinish = () => {
  };
  return (


    
    <View style={styles.container}>
       
       <StatusBar backgroundColor='#014C78' barStyle="light-content"/>
       <Image source = {require('../Images/4.jpg')} style={styles.img} />

    <TextAnimator
       content={I18n.t('Wp')}  // I18n pour traduction , 'Wp'  identifiant de mot traduit  dans la page fr.js  et eng.js
        textStyle={styles.textStyle}
        style={styles.containerStyle}
        duration={500}
      />

     <Animatable.View 
            style={[styles.footer, {
              
            }]}
            animation="fadeInUpBig" > 
     <Text style={styles.pres} >{I18n.t('Introduction')}</Text>
           <View style={styles.button}>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <LinearGradient
                    colors={['#F26E11', '#F26E11']}
                    style={styles.signIn}>
                    <Text style={styles.textSign}>{I18n.t('gt')}</Text>
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </Animatable.View></View>
  );
}

const styles = StyleSheet.create({

  
  img:{
   
    height: 250,
    width: 290,
    marginStart :10,
    marginBottom:100,
    marginTop:60
  },
    container: {
      flex: 1,
      justifyContent: 'space-around',
      //paddingTop: Constants.statusBarHeight,
     backgroundColor: '#fff',
      padding: 50
    },
  
    textStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'Menlo',
      marginBottom: 50,
      padding: 5,
      color:'#014C78'
    },
    img:{
     
      height: 250,
      width: 290,
      marginStart :10,
      marginBottom:100,
      marginTop:60
        
    },
    pres :{
      color:'#707070',
      textAlign:'center',
      marginTop:100,
      marginBottom:100
    },
    //Position 
    s:{
        marginStart:100
    },
    botton:{
        // position:'absolute',
      
        // justifyContent:'center',
         borderTopLeftRadius:30,
         borderBottomLeftRadius:30,
         marginBottom:40,
         marginBottom:120,
         marginLeft:20
    },
    ts:{
      color:'#FFFFFF',
      fontSize: 20,
      marginStart:25
  
    },
    header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  
  
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop:-2,
      //marginLeft:10,
      marginBottom:60,
      width:210,
      height:100,
      marginLeft:20

  
  
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      //flexDirection: 'row',
marginLeft:200
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }

  
}
);