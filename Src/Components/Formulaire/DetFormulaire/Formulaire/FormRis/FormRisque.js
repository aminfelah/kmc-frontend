// page du formlaire de risque

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
    TouchableHighlight,
    StatusBar
  } from 'react-native';
  
  import I18n from '../../../../../I18n/i18n';
  import Datepicker from '../../../../DatePicker';
  import Timepicker from '../../../../Timepicker';
  import 'react-native-gesture-handler';
  import React, { useState } from "react";
  import {Picker } from "react-native";
  import { RadioButton } from 'react-native-paper';

  import ImportanceAlert from '../../../../Importance/ImportanceAlert';
  import { NavigationContainer,useNavigation } from '@react-navigation/native';
  import HomeScreen from '../../../../../Screens/Home';
  
  const FormRisque = () => {
const [detector, setDet] = useState('');
const navigation = useNavigation();
const [nomsrc, setSrc] = useState('');
const [description, setDes] = useState('');
const [loading, setLoading] = useState(false);
const [errortext, setErrortext] = useState('');
  
// fonction qui comporte 
const handleSubmitButton = () => {
  setLoading(true);
  var dataToSend = {
    detector: detector,
    nom_source:nomsrc,
    
    description:description,
  };
  var formBody = [];
  for (var key in dataToSend) {
    var encodedKey = encodeURIComponent(key);
    var encodedValue = encodeURIComponent(dataToSend[key]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  fetch('http://10.0.2.2:8000' +'/risques/', {

    method: 'POST',
    body: formBody,
    headers: {
      'Content-Type':
      'application/x-www-form-urlencoded;charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((responseJson) => {

      setLoading(false);
      console.log(responseJson);
      navigation.replace('HomeScreen');

    })
    .catch((error) => {
      setLoading(false);
      console.error(error);
    });
};
      const [selectedValue, setSelectedValue] = useState();
      const[checked, setChecked] = React.useState('reel');
      const[checked2, setChecked2] = React.useState('client');
    
      return (
        <ScrollView>
        <View style={styles.header}>
        <Text style={styles.textheader}>{I18n.t('tNC')}</Text>
        <View style={{flexDirection: "row", justifyContent:'center' ,marginTop:30}} >
      {/*tu trouve ici le radio button de reel ert potentielle */ }
      <RadioButton
      
        value='reel'
        status={ checked === 'reel' ? 'checked' : 'unchecked' }
        color = "#D66E15"
        onPress={() => setChecked('reel')}
      />
      
      <Text onPress={() => setChecked('reel')} style={{marginRight: 80  ,marginTop:8 }}>{I18n.t('reel')}</Text>
      
      <RadioButton
      
        value='Potentielle'
        color = "#D66E15" 
        status={ checked === 'potentielle' ? 'checked' : 'unchecked' }
        onPress={() => setChecked('potentielle')}
      />
      <Text onPress={() => setChecked('potentielle')} style={{marginTop:8}}>{I18n.t('Potentielle')}</Text>
      </View>    
      
        <View>
          {/* RQ : RS = responsable saisie*/}
        <Text style={[styles.text_footer, {
          marginTop:20} ]}>{I18n.t('Rs')}</Text>
        
        </View>
        <View style={styles.inputstyle}>
                           
        <TextInput
            //placeholder ={I18n.t('Rs')}
            placeholder={I18n.t('Detecteur')}

            style={styles.input}
            onChangeText={(detector) =>
              setDet(detector)
            }
            style={styles.textheader}
            />
        </View>
    
        <View>
      <Text style={[styles.text_date, {
        marginTop:20}]}>{I18n.t('dateDet')}</Text>
      
      </View>
      <View style ={styles.date}>
      
        {/*l'apelle de date picker */}                 
      <Datepicker />
      </View>
    
      
        
        {/* tu trouve ici le radio button pour founisseur, client , responsable */}
        <View style={{flexDirection: "row", justifyContent:'center' ,marginTop:20,marginBottom:20}} >
      
      <RadioButton
      
        value="client"
        status={ checked2 === 'client' ? 'checked' : 'unchecked' }
      
        color = "#D66E15"
        onPress={() => setChecked2('client')}
      />
      
      
      
      <Text onPress={() => setChecked2('client')} style={{marginRight:15 ,marginTop:8}}>{I18n.t('Client')}</Text>
      
      <RadioButton
      
        value="Fournisseur"
        color = "#D66E15"
         
        status={ checked2 === 'Fournisseur' ? 'checked' : 'unchecked' }
      
        onPress={() => setChecked2('Fournisseur')}
      />
      <Text onPress={() => setChecked2('Fournisseur')} style={{marginRight:10 ,marginTop:8}}>{I18n.t('Fournisseur')}</Text>
      <RadioButton
      
        value="Responsable"
        color = "#D66E15"
         
        status={ checked2 === 'Responsable' ? 'checked' : 'unchecked' }
      
        onPress={() => setChecked2('Responsable')}
      />
      <Text onPress={() => setChecked2('Responsable')} style={{marginTop:8}}>{I18n.t('Responsable')}</Text>
      </View>    
      
      <View style={styles.inputstyle}>
                           
        <TextInput
               placeholder="Nom"

            style={styles.input}
            onChangeText={(nomsrc) =>
              setSrc(nomsrc)
            }
            style={styles.textheader}
          
            />
      </View>
      <View>
      <Text style={[styles.text_footer, {
        marginTop: 20}]}>{I18n.t('description')}</Text>
      
      </View>
      <View style={styles. inputstyle}>

                         
      <TextInput 
      style={styles.input}
       // placeholder ={I18n.t('Rs')}
       placeholder={I18n.t('description')}
       style={styles.textheader}
       onChangeText={(description) =>
       setDes(description)
       }

      />
      </View>
      <View >
      <Text style={[styles.text_footer, {
        marginTop: 20}]}>{I18n.t('Type')}</Text>
      
      </View>
           
      <View style={styles.pick}>
      <Picker
            selectedValue={selectedValue}
            style={{ height: 45 ,borderRadius:20,}}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item label="Prix" value="Prix" />
            <Picker.Item label="Qualité Produit" value="Qualité Produit" />
            <Picker.Item label="Qualité Service" value="Qualité Service" />
            <Picker.Item label="Modalité de Paiement" value="Modalité de Paiement" />
            <Picker.Item label="Structure" value="Structure" />
            <Picker.Item label="Délais" value="Délais" />
            
          </Picker>
         
          </View>
            <View style ={styles.importance}>
          <View >
      <Text style={[styles.text_importance
, {marginTop: 20}]}>{I18n.t('Importance')}</Text>
      </View>
       
      <ImportanceAlert/>   

</View>  
      <Text style={[styles.text_footer, {
        marginTop: 20}]}>{I18n.t('Statut')}</Text>
      
      </View>
           
      <View style={styles.pick}>
      <Picker
            selectedValue={selectedValue}
            style={{ height: 45 ,borderRadius:20}}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
      <Picker.Item label="ouvert" value="ouvert" />
      <Picker.Item label="en cour" value="en cours" />
      <Picker.Item label="Clôturé" value="Clôturé" />  
     </Picker>
         
    </View>
         
      
      
 
<View style={styles.btnview}>

<TouchableHighlight
    style={styles.validbtn}
    onPress={() => navigation.goBack()}>
    <Text style={styles.buttonTextStyle}>
    {I18n.t('Annuler')} 

    </Text>
  </TouchableHighlight>
  <TouchableHighlight
    style={styles.cancelbtn}
    onPress={handleSubmitButton }>
    <Text style={styles.buttonTextStyle}>{I18n.t('Envoyer')}  
    </Text>
  </TouchableHighlight>

</View> 
</ScrollView>
);

        
        
        
        }
export default FormRisque;
        const styles = StyleSheet.create({
    

          textheader:{
            textAlign:'center',
            color: '#010B4e',
            fontFamily:'sans-serif-medium',
            fontSize:15,
            marginLeft:20
            },
            
            pick: {
            borderWidth:1.5,
            marginHorizontal:30,
            borderColor:"#044D8C",
            borderRadius:23,
            marginRight:10,
            marginLeft:10,
            backgroundColor:'#fff',
            marginTop:10,
            elevation: 5, 
            },
            header: {
            marginTop:75,
            marginLeft:10,
            marginRight:10
            
            },
            text_footer: {
              color: '#010B4e',
              fontSize: 12,
              marginStart:25,
              fontFamily:'sans-serif-medium',
             // margin:25,
              //marginLeft:50,
            
            },
            validbtn: {
              width: 140,
              padding: 10,
              backgroundColor: '#ACACAC',
              borderRadius:11,
              marginTop:30,
              borderColor:'#ACACAC',
              marginBottom:10,
              elevation: 5, 
              marginHorizontal:25
            },
            cancelbtn: {
              width: 140,
              padding: 10,
              backgroundColor: '#044D8C',
              borderRadius:10,
              marginTop:30,
              marginBottom:10,
              elevation: 5, 
              //marginLeft:55,

            },
            buttonTextStyle: {
              color: 'white',
              textAlign: 'center',
              
            },
            btnview: {
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight:49,
            marginLeft:10,
              marginTop:20,
            },
            inputstyle:{
              flexDirection:"row",
                 marginHorizontal:30,
                 borderWidth:1.5,
                 
                borderRadius:23,
                height:46,
                marginTop:10,
                marginRight:10,
                marginLeft:10,
               // height:,
                borderColor:"#044D8C",
                backgroundColor:"#fff",
                elevation: 5, 
              },
            
              commentaire:{
                flexDirection:"row",
                marginHorizontal:30,
                borderWidth:1.5,
                borderColor:"#044D8C",
               borderRadius:23,
               elevation: 5, 
               height:150,
               marginTop:10,
               marginRight:10,
               marginLeft:10,
               backgroundColor:"#fff"  
              },
              
              importance:{
marginLeft:20



              },
              date :{
width :190,
                marginLeft:15,
                marginRight:70,

                //marginBottom:50


              },
              text_date:{

                color: '#010B4e',
              fontSize: 12,
              marginStart:25,
              fontFamily:'sans-serif-medium',
              margin:10,
              //marginLeft:50,
            
              }, text_importance:{

                color: '#010B4e',
              fontSize: 12,
              marginStart:25,
              fontFamily:'sans-serif-medium',
              margin:30,
              marginLeft:8,
            
              }
            
            });

        
    