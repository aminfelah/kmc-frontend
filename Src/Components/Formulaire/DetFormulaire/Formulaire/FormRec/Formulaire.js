
// interface du formulaire remplit par l detecteur lors de detection d'une non conformité
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

import { useEffect} from "react";

import Datepicker from '../../../../DatePicker';
import Timepicker from '../../../../Timepicker';
import ImportanceAlert from '../../../../Importance/ImportanceAlert';
import I18n from "../../../../../I18n/i18n";
import 'react-native-gesture-handler';
//import ListAR from '../../Components/ListAR';
import React, { useState } from "react";
import {Picker } from "react-native";
import { RadioButton } from 'react-native-paper';
import { NavigationContainer,useNavigation } from '@react-navigation/native';

const FormDet= () => {
  const navigation = useNavigation();

 const [text, onChangeText] = React.useState("");
const [text2, onChangeText2] = React.useState("");
 const [filteredDataSource, setFilteredDataSource] = useState([]);
const [selectedValue, setSelectedValue] = useState();
const[checked, setChecked] = React.useState('reel');
const[checked2, setChecked2] = React.useState('client');
const[checked3, setChecked3] = React.useState('client');

const [descriptions, setUserEmail] = useState('');
const [nomsrc, setSrc] = useState('');
const [numcmd, setcmd] = useState('');
const [numlots, setlots] = useState('');
const [quantite, setQ] = useState('');
const [description, setdes] = useState('');
const [status, setStatus] = useState('');

    const [loading, setLoading] = useState(false);

  const [errortext, setErrortext] = useState('');
  const [selectedValue2, setSelectedValue2] = useState(null);
    const [selectedValue3, setSelectedValue3] = useState(null);
  const [selectedValue4, setSelectedValue4] = useState(null);

  const [values, setValues] = React.useState([]);

// fonction qui contient l'api de creation de formulaire 
const handleSubmitButton = () => {

  setLoading(true);
  var dataToSend = {
    detector: descriptions,
    nom_source:nomsrc,
    num_cmd:numcmd,
    num_lots:numlots,
    quantite:quantite,
    description:description,
    status:status
  };
  var formBody = [];
  for (var key in dataToSend) {
    var encodedKey = encodeURIComponent(key);
    var encodedValue = encodeURIComponent(dataToSend[key]);
    formBody.push(encodedKey + '=' + encodedValue);
  }
  formBody = formBody.join('&');

  fetch( 'http://10.0.2.2:8000'+'/rec/', {

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
      //navigation.navigate('HomeScreen');
      navigation.replace('TabNavigator');
    })
    .catch((error) => {
      //Hide Loader
      setLoading(false);
      console.error(error);
    });
};
    // text input a rempli
return (


<ScrollView>
<View style={styles.header}>
<Text style={styles.textheader}>{I18n.t('tNC')}</Text>
<View style={{flexDirection: "row", justifyContent:'center' ,marginTop:30}} >

<RadioButton
value='reel'
status={ checked === 'reel' ? 'checked' : 'unchecked' }
color = "#D66E15"
onPress={() => setChecked('reel')}
/>

<Text onPress={() => setChecked('reel')} style={{marginRight: 80  ,marginTop:8,fontFamily:'sans-serif-medium', fontSize: 12, }}>{I18n.t('reel')}</Text>

<RadioButton

value='Potentielle'
color = "#D66E15" 
status={ checked === 'potentielle' ? 'checked' : 'unchecked' }
onPress={() => setChecked('potentielle')}
/>
<Text onPress={() => setChecked('potentielle')} style={{marginTop:8,fontFamily:'sans-serif-medium', fontSize: 12,}}>{I18n.t('Potentielle')}</Text>
</View>    

<View>
<Text style={[styles.text_footer, {
  marginTop:20} ]}>{I18n.t('Rs')}</Text>

</View>
<View style={styles.inputstyle}>
{/* ici j'ai prix le non de responsable saisie par la base de donnée et cette nom ne peux pas etre modifiable*/}           
<TextInput
   placeholder ={I18n.t('Rs')}
    style={styles.textheader}
    onChangeText={(descriptions) =>
      setUserEmail(descriptions)
    }
   
        
    />
</View>
<View>
<Text style={[styles.text_footer, {
  marginTop:20}]}>{I18n.t('dateDet')}</Text>

</View>
<View>

                   
<Datepicker/>
</View>
<Text style={[styles.text_footer, {
  marginTop:20}]}>{I18n.t('Heure')}</Text>
  <View style={styles.inputstyle}>
                   
                   <TextInput 
                  
              
                   />
            </View>
<View style={{flexDirection: "row", justifyContent:'center' ,marginTop:20,marginBottom:20}} >

<RadioButton

value="client"
status={ checked2 === 'client' ? 'checked' : 'unchecked' }

color = "#D66E15"
onPress={() => setChecked2('client')}
/>



<Text onPress={() => setChecked2('client')} style={{marginRight:15 ,marginTop:8,fontFamily:'sans-serif-medium', fontSize: 12}}>{I18n.t('Client')}</Text>

<RadioButton

value="Fournisseur"
color = "#D66E15"
 
status={ checked2 === 'Fournisseur' ? 'checked' : 'unchecked' }

onPress={() => setChecked2('Fournisseur')}
/>
<Text onPress={() => setChecked2('Fournisseur')} style={{marginRight:10 ,marginTop:8,fontFamily:'sans-serif-medium', fontSize: 12,}}>{I18n.t('Fournisseur')}</Text>
<RadioButton

value="Responsable"
color = "#D66E15"
 
status={ checked2 === 'Responsable' ? 'checked' : 'unchecked' }

onPress={() => setChecked2('Responsable')}
/>
<Text onPress={() => setChecked2('Responsable')} style={{marginTop:8,fontFamily:'sans-serif-medium', fontSize: 12,}}>{I18n.t('Responsable')}</Text>
</View>    

<View style={styles.inputstyle}>
                   
<TextInput
placeholder="Nom Source "
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
tyle={styles.input}
onChangeText={(description) =>
  setdes(description)
}placeholder="Description "


style={styles.textheader}
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
          <Picker.Item label="Qualité Produit" value="Qualité Produit" />

      <Picker.Item label="Prix" value="Prix" />
      <Picker.Item label="Qualité Service" value="Qualité Service" />
      <Picker.Item label="Modalité de Paiement" value="Modalité de Paiement" />
      <Picker.Item label="Structure" value="Structure" />
      <Picker.Item label="Délais" value="Délais" />
      
    </Picker>
   
   
   
    </View>
    
    <View>
<Text style={[styles.text_footer, {
  marginTop:20}]}>{I18n.t('lots')}</Text>

</View>
<View style={styles.inputstyle}>
                   
<TextInput 
  placeholder ="Num CMD"
keyboardType="numeric"
onChangeText={(numcmd) =>
  setcmd(numcmd)
}
 />


</View>

<View>
<Text style={[styles.text_footer, {
  marginTop:20}]}>{I18n.t('CMD')}</Text>

</View>
<View style={styles.inputstyle}>
                   
<TextInput
keyboardType="numeric" 
placeholder="Num Lots"
onChangeText={(numlots) =>
  setlots(numlots)
}
 />
</View>
<View>
<Text style={[styles.text_footer, {
  marginTop:20}]}>{I18n.t('quantite')}</Text>

</View>
<View style={styles.inputstyle}>
                   
<TextInput
placeholder="quantite"
onChangeText={(quantite) =>
  setQ(quantite)
}
 />
</View>

</View>


<Text style={[styles.text_footer, {
  marginTop: 20}]}>{I18n.t('Statut')}</Text>


     
<View style={styles. pick}>
<Picker
      selectedValue={selectedValue}
      style={{ height: 45 ,borderRadius:20,}}
      onValueChange={(itemValue, itemIndex) => {setSelectedValue(itemValue);setStatus(itemValue)}}
    
    >
          <Picker.Item label="En cours" value="en cours" />
          <Picker.Item label="Ouvert" value="ouvert" />
          <Picker.Item label="Clôturé" value="cloturer" />
     

</Picker>
   
    </View>



    
<Text style={[styles.text_footer, {
  marginTop: 20}]}>Gravité</Text>


     
<View style={styles. pick}>
<Picker
      selectedValue={selectedValue3}
      style={{ height: 45 ,borderRadius:20,}}
      onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)}
    >
          <Picker.Item label="Moyenne" value="Moyenne" />

          <Picker.Item label="Pas Grave" value="Pas Grave" />

      <Picker.Item label="Grave" value="Grave" />
      <Picker.Item label="Trés grave" value="Trés grave" />
     

</Picker>
   
    </View>


<Text style={[styles.text_footer, {
  marginTop: 20}]}>Probabilté</Text>


     
<View style={styles. pick}>
<Picker
      selectedValue={selectedValue4}
      style={{ height: 45 ,borderRadius:20,}}
      onValueChange={(itemValue, itemIndex) => setSelectedValue4(itemValue)}
    >
          <Picker.Item label="probable" probprobableblealue="probable" />

      <Picker.Item label="Pas Probable" value="Pas Probable" />
      <Picker.Item label="Trés probable" value="trés probable" />
     

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

const styles = StyleSheet.create({

 
  
    

textheader:{
  textAlign:'center',
  color: '#010B4e',
  fontFamily:'sans-serif-medium',
  fontSize:15
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
marginTop:20,

},
text_footer: {
    color: '#010B4e',
    fontSize: 12,
    marginStart:25,
    fontFamily:'sans-serif-medium'
    //margin:20,
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
  },
  cancelbtn: {
    width: 140,
    padding: 10,
    backgroundColor: '#044D8C',
    borderRadius:10,
    marginTop:30,
    marginBottom:10,
    elevation: 5, 
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
    
  },
  btnview: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight:10,
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
   
});

  export default FormDet;
