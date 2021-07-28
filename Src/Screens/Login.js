// page de login : authentification

import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import jwt_decode from "jwt-decode";
import AsyncStorage from '@react-native-community/async-storage';
import Loader from '../../Loader';

import I18n from "../I18n/i18n";

import TextAnimator from '../Components/TextAnimation';

import  '../../URL';
const Login= ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
 
  const passwordInputRef = createRef();



// fonction qui fait l'appel a l'api de register avec la methode POST 
  const handleSubmitPress =async () => {

    setErrortext('');
    if (!userEmail) {
      alert(I18n.t('check_em'));
      return;
    }
    if (!userPassword) {
      alert(I18n.t('check_p'));
      return;
    }
    setLoading(true);
    let dataToSend = {email: userEmail, password: userPassword};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');



//api de login
    fetch('http://10.0.2.2:8000' + '/kms/user/login', {

      method: 'POST',
      body:formBody,
     
      headers: {
        
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      }
})
      .then((response) => response.json())

      .then((responseJson) => {


        
        console.log(responseJson.jwt);
        console.log("enter");

        // conserver token dans un variable decode 
        var decoded = jwt_decode(responseJson.jwt);
               console.log(decoded);
               console.log(decoded.id)
       // conserver token qui va identifier l utilisateur avec son id 
    AsyncStorage.setItem('userToken', responseJson.jwt.toString());

      console.log('Storage Settings \n Key "UserTocker" Value',AsyncStorage.getItem("userToken"));
      setLoading(false);


         // si le login est vrai il y'a  navigation pour la page de TabNavigator sinon il affiche un erreur 

        try {
          AsyncStorage.setItem('userID',  decoded.id.toString());
          console.log('*')
      
         } catch(e) {
           console.log(e);
         
         }


         console.log(responseJson);
         navigation.replace('TabNavigator');
        console.log(responseJson);
       
      


      
      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        alert(I18n.t('error'));
      });
  };


// fonction pour verifier login
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
  return (
    <View style={styles.mainBody}>
        <Loader loading={loading} />
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            flex: 1,
            justifyContent: 'center',
            alignContent: 'center',
          }}>
<Image source = {require('../Images/4.jpg')} style={styles.img} />
          <View>
            <KeyboardAvoidingView enabled>
             
  

<TextAnimator
       content={I18n.t('Wp')}
       
        textStyle={styles.textStyle}
        style={styles.containerStyle}
        duration={500}
        //onFinish={_onFinish}
      />
  
            <Text style={styles.text_footer}>{I18n.t('Email_id')}</Text>
                  
              <View style={styles.SectionStyle}>
               

                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(UserEmail) =>
                    setUserEmail(UserEmail)
                  }
                  placeholder={I18n.t('Email_id')} //dummy@abc.com
                  placeholderTextColor="#8b9cb5"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  returnKeyType="next"
                  onSubmitEditing={() =>
                    passwordInputRef.current &&
                    passwordInputRef.current.focus()
                  }
                  underlineColorAndroid="#f000"
                  blurOnSubmit={false}
                />
              </View>

                          <Text style={styles.text_footer}>{I18n.t('Password')} </Text>

              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(UserPassword) =>
                    setUserPassword(UserPassword)
                  }
                  placeholder={I18n.t('Password')} //12345
                  placeholderTextColor="#8b9cb5"
                  keyboardType="default"
                  ref={passwordInputRef}
                  onSubmitEditing={Keyboard.dismiss}
                  blurOnSubmit={false}
                  secureTextEntry={true}
                  underlineColorAndroid="#f000"
                  returnKeyType="next"
                />
              </View>
              {errortext != '' ? (
                <Text style={styles.errorTextStyle}>
                  {errortext}
                </Text>
              ) : null}
              <TouchableOpacity
                style={styles.buttonStyle}
                activeOpacity={0.5}
                onPress={handleSubmitPress}>
                <Text style={styles.buttonTextStyle}>{I18n.t('log')}</Text>
              </TouchableOpacity>
              <Text
                style={styles.registerTextStyle}
             onPress={() => navigation.navigate('Signin')}
                >
                  {I18n.t('New')}
            
              </Text>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    );
};
export default Login;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    alignContent: 'center',
    marginBottom:25
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 6,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#F26E11',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
    height:50
  },
  inputStyle: {
    flex: 1,
    color: "black",
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1.5,
    borderRadius: 30,
    borderColor: '#014C78',
    height:48,
  
  },
  registerTextStyle: {
    color: '#F26E11',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
   alignSelf: 'center',
    padding: 10,
    //marginStart:180
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
  img:{
   
    height: 250,
    width: 290,
    marginStart :50,
    marginBottom:100,
    marginTop:60
      
  },
   
  textStyle: {
    fontSize: 19,
    fontWeight: 'bold',
    fontFamily: 'Menlo',
    marginBottom: 0,
    marginTop:-55,
    padding:4,
    color:'#F5722F',

  },
     text_footer: {
        color: '#014C78',
        fontSize: 13,
        marginLeft:55,
        marginTop:5,
            fontWeight: 'bold',
            marginBottom:5

    },
});