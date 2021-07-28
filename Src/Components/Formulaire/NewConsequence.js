import React, {useState, createRef} from 'react';
import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    TouchableHighlight
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import I18n from "../../I18n/i18n";


import { useNavigation } from '@react-navigation/native';

  

const AddCons = () => {
   
  const navigation = useNavigation();
    const [data, setData] = React.useState({
       
       
        
        
    });
    const [descriptions, setUserEmail] = useState('');
    const [loading, setLoading] = useState(false);

  const [errortext, setErrortext] = useState('');
  
  const [
    isRegistraionSuccess,
    setIsRegistraionSuccess
  ] = useState(false);

  const emailInputRef = createRef();


  const handleSubmitButton = () => {

    //Show Loader
    setLoading(true);
    var dataToSend = {
      descriptionConsReel: descriptions,
     
    };
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://10.0.2.2:8000' + '/consreel/', {

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
       
        navigation.replace('Analyse');

      })
      .catch((error) => {
        //Hide Loader
        setLoading(false);
        console.error(error);
      });
  };
    
   
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <Text style={styles.text_header}>Nouvelle conséquance</Text>
            <Text style={styles.text_footer}>{I18n.t('description')}</Text>
            <View >
                
            <TextInput
                style={styles.inputstyle}
                onChangeText={(descriptions) =>
                  setUserEmail(descriptions)
                }
                placeholder={I18n.t('description')}
                placeholderTextColor="#8b9cb5"
                autoCapitalize="none"
                //keyboardType="email-address"
                returnKeyType="next"
        
                underlineColorAndroid="#f000"
                blurOnSubmit={false}
              />
                {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    
                </Animatable.View>
                : null}
            </View>

            
            
          
            <View style={styles.btnview}>
            <TouchableHighlight
        style={styles.validbtn}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonTextStyle}>
           Annuler

        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.cancelbtn}
        onPress={handleSubmitButton }>
        <Text style={styles.buttonTextStyle}>Envoyer  
        </Text>
      </TouchableHighlight>

                
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default AddCons;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#D9D9D9',
      
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
        marginLeft:60,
        //opacity:0.4
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        marginLeft:10,
        marginRight:10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 10,
        paddingVertical: 30,
        marginBottom:130,
        borderRadius:30,
        elevation:10
     
    },
    text_header: {
        color: '#014C78',
        fontWeight: 'bold',
        fontSize: 18,
        //paddingStart:25,
        fontFamily:'sans-serif-medium',
        textAlign:'center',
       // marginBottom:20
    },
    text_footer: {
        color: '#014C78',
        fontSize: 15,
        textAlign:'center',
        fontFamily:'sans-serif-medium',
        marginRight:150,
        marginTop:30
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    },
    inputstyle:{
        flexDirection:"row",
           marginHorizontal:30,
           borderWidth:1.5,
           
          borderRadius:23,
          height:200,
          marginTop:10,
          marginRight:30,
          marginLeft:25,
         // height:,
          borderColor:"#00c5D4",
          backgroundColor:"#fff",
          elevation: 5, 
        },
        validbtn: {
            width: 120,
            padding: 10,
            backgroundColor: '#ACACAC',
            borderRadius:11,
            marginTop:30,
            borderColor:'#ACACAC',
            marginBottom:10,
            marginStart:20,
            elevation: 5, 
          },
          cancelbtn: {
            width: 120,
            padding: 10,
            backgroundColor: '#014C78',
            borderRadius:10,
            marginTop:30,
            marginBottom:10,
            elevation: 5, 
            marginRight:19
          },
          buttonTextStyle: {
            color: 'white',
            textAlign: 'center',
            
          },
          btnview: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginRight:20,
      marginLeft:10,
            marginTop:10,
           
          },
  });


