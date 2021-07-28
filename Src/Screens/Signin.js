// Import React and Component
import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import I18n from "../I18n/i18n";

import TextAnimator from '../Components/TextAnimation';

import Loader from '../../Loader';


const Signin= ({props, navigation}) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userFunction, setUserFunction] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);

  const emailInputRef = createRef();
  const ageInputRef = createRef();
  const functionInputRef = createRef();
  const passwordInputRef = createRef();

  
  const handleSubmitButton = () => {


    setErrortext('');
  
    if (!userEmail) {
      alert(I18n.t('check_em'));
      return;
    }
    
  
    if (!userPassword) {
      alert(I18n.t('check_p'));
      return;
    }
     if (!userAge) {
      alert(I18n.t('check_a'));
      return;
    }
    if (!userFunction) {
      alert(I18n.t('check_fun'));
      return;
    }

    //Show Loader
    setLoading(true);
    var dataToSend = {

      name: userName,
      email: userEmail,
      date_naissance: userAge,
      fonction: userFunction,
      password: userPassword,
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://10.0.2.2:8000'+ '/kms/user/register', {
      method: 'POST',
      body: formBody,
      headers: {
        //Header Defination
        'Content-Type':
        'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((responseJson) => {
        //Hide Loader
        setLoading(false);
        console.log(responseJson);
        // If server response message same as Data Matched
                navigation.replace('Login');

      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
  if (isRegistraionSuccess) {
    return (
      <View
      style={{
        flex: 1,
        backgroundColor: '#307ecc',
        justifyContent: 'center',
      }}>
     
      <Text style={styles.successTextStyle}>
        Registration Successful
      </Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => props.navigation.navigate('LoginScreen')}>
        <Text style={styles.buttonTextStyle}>{I18n.t('inscrire')}</Text>
      </TouchableOpacity>
    </View>
  );
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
          <View>
            <KeyboardAvoidingView enabled>
              
<TextAnimator
       content={I18n.t('inscrire')}
       
        textStyle={styles.textStyle}
        style={styles.containerStyle}
        duration={500}
        //onFinish={_onFinish}
      />
  
            <Text style={styles.text_footer}>{I18n.t('np')}</Text>
                  
              <View style={styles.SectionStyle}>
               

                <TextInput
                 style={styles.inputStyle}
              onChangeText={(UserName) => setUserName(UserName)}
              underlineColorAndroid="#f000"
              placeholder={I18n.t('np')}
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
        
              blurOnSubmit={false}
                />
              </View>

                          <Text style={styles.text_footer}>{I18n.t('Email_id')}</Text>

              <View style={styles.SectionStyle}>
                <TextInput
                  style={styles.inputStyle}
              onChangeText={(UserEmail) => setUserEmail(UserEmail)}
              underlineColorAndroid="#f000"
              placeholder={I18n.t('Email_id')}
              placeholderTextColor="#8b9cb5"
              keyboardType="email-address"
              ref={emailInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current &&
                passwordInputRef.current.focus()
              }
              blurOnSubmit={false}
                />
              </View>


  <Text style={styles.text_footer}>{I18n.t('Password')}</Text>

              <View style={styles.SectionStyle}>
           <TextInput
              style={styles.inputStyle}
              onChangeText={(UserPassword) =>
                setUserPassword(UserPassword)
              }
              underlineColorAndroid="#f000"
              placeholder={I18n.t('Password')}
              placeholderTextColor="#8b9cb5"
              ref={passwordInputRef}
              returnKeyType="next"
              secureTextEntry={true}
              onSubmitEditing={() =>
                ageInputRef.current &&
                ageInputRef.current.focus()
              }
              blurOnSubmit={false}
            />

              </View>



                <Text style={styles.text_footer}>{I18n.t('dn')}</Text>

              <View style={styles.SectionStyle}>
               <TextInput
              style={styles.inputStyle}
              onChangeText={(UserAge) => setUserAge(UserAge)}
              underlineColorAndroid="#f000"
              placeholder={I18n.t('dn')}
              placeholderTextColor="#8b9cb5"
              ref={ageInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                addressInputRef.current &&
                addressInputRef.current.focus()
              }
              blurOnSubmit={false}
            />
              </View>
              

                <Text style={styles.text_footer}>{I18n.t('fun')}</Text>

              <View style={styles.SectionStyle}>
               <TextInput
              style={styles.inputStyle}
              onChangeText={(userFunction) => setUserFunction(userFunction)}
              underlineColorAndroid="#f000"
              placeholder={I18n.t('fun')}
              placeholderTextColor="#8b9cb5"
              ref={ageInputRef}
              returnKeyType="next"
              onSubmitEditing={() =>
                addressInputRef.current &&
                addressInputRef.current.focus()
              }
              blurOnSubmit={false}
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
                onPress={handleSubmitButton}>
                <Text style={styles.buttonTextStyle}>{I18n.t('insc')}</Text>
              </TouchableOpacity>
              <Text
                style={styles.registerTextStyle}
              //onPress={() => navigation.navigate('Login')}
                >
              </Text>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    );
};
export default Signin;

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