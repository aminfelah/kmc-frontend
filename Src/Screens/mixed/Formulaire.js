// page detail dans tabheader ou la formulaire est déja remplit

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
    StatusBar,
    Modal,
    FlatList
  } from 'react-native';
  import { useEffect ,Component} from "react";

  import I18n from"../../I18n/i18n";
  import 'react-native-gesture-handler';
  import React, { useState } from "react";
  import {Picker } from "react-native";
  import { RadioButton } from 'react-native-paper';
  import { NavigationContainer,useNavigation } from '@react-navigation/native';
  import { useRoute } from '@react-navigation/native';
  
  
  function  FormulairePrincipale  () { 
    console.disableYellowBox = true;
   
   const [text, onChangeText] = useState('');
    let [text2, onChangeText2] = React.useState('');
    const navigation = useNavigation();
  
  var test1;
  
  const [selectedValue, setSelectedValue] = useState();// state for  picker
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const[checked, setChecked] = React.useState('reel'); //state for radiobutton
  const[checked2, setChecked2] = React.useState('client');//state for radiobutton
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [ModalVisible, setModalVisible] = useState(true);
  const [isModalVisible, setisModalVisible] = useState(false);
  const [inputText, setInputText] = useState(false);
  const [editItem, seteditItem] = useState();
  const [editItem2, seteditItem2] = useState();
  const [selectedValue2, setSelectedValue2] = useState(null);//state for  picker
  const [selectedValue3, setSelectedValue3] = useState(null);//state for  picker
  const [selectedValue4, setSelectedValue4] = useState(null);//state for  picker
  const [isRender, setisRender] = useState();
  const [nomsrc, setSrc] = useState('');//state for textinput source
  const [numcmd, setcmd] = useState('');//state for textinput num cmd
  const [numlots, setlots] = useState('');//state for textinputquantité
  const [quantite, setQ] = useState('');//state for textinput description
  const [description, setdes] = useState('');//state for textinput description
   var test1
  
   // quand on clique dans le champ de tetxinput on peut le modifié
   const onPressItem =(item) =>
   {
     setisModalVisible(true);
     setInputText(item.text)
     seteditItem (item.nom_source)
     seteditItem2 (item.description)
  
   }
   
   const onPressSavedEdit = () =>
   {
     handleEditItem(editItem);
     setisModalVisible(false);     
   }
   
   const handleEditItem = (editItem) =>{
   const newData = masterDataSource.map (item =>{
   
  
   
   if (item.description == editItem2){
    item.description= inputText;
    return item;   
    
    }
   return item
   
   })
   setMasterDataSource(newData);
   setisRender(!isRender);
   }
  
   //modofier dateheure detection
   const renderHour = ({item , index}) => {
     return (
   
      <TouchableOpacity
   
         onPress={() => onPressItem(item)}
   >
   
       <Text
       style={styles.listItem}
         >  
         
         {item.dateHeure_detection}
       </Text>
   
      </TouchableOpacity>
     );
   };
   
    //modofier nom source
  
   
   const renderSource = ({item , index}) => {
     return (
   
      <TouchableOpacity
   
         onPress={() => onPressItem(item)}
   >
   
       <Text
       style={styles.listItem}
         >  
         
         {item.nom_source}
       </Text>
   
      </TouchableOpacity>
     );
   };
    //modofier description
  
   const renderDes = ({item , index}) => {
     return (
   
      <TouchableOpacity
   
         onPress={() => onPressItem(item)}
   >
   
       <Text 
       style={styles.listItem}
         >  
         
         {item.description}
       </Text>
   
      </TouchableOpacity>
     );
   };
    //modofier Numlot
  
   const renderNumlot = ({item , index}) => {
     return (
   
      <TouchableOpacity
   
         onPress={() => onPressItem(item)}
   >
   
       <Text
  
         >  
         
         {item.num_lots}
       </Text>
   
      </TouchableOpacity>
     );
   };
     //modofier Numero cmd 
  
   const renderCmd= ({item , index}) => {
     return (
   
      <TouchableOpacity
   
         onPress={() => onPressItem(item)}
   >
   
       <Text
       style={styles.listItem}
         >  
         
         {item.num_cmd}
       </Text>
   
      </TouchableOpacity>
     );
   };
  
     //modofier le statut 
  
   const renderStatuts= ({item , index}) => {
     return (
   
      <TouchableOpacity
   
         onPress={() => onPressItem(item)}
   >
   
       <Text
       style={styles.listItem}
         >  
         
         {item.nom_source}
       </Text>
   
   
      </TouchableOpacity>
     );
   
   };
   
   const route = useRoute();
   const id = route.params.item.id; // passer l id de formulair recu
   useEffect(() => {
     console.log('test')
     console.log(JSON.stringify(route.params.item.id))
     
   // api de la formulaire recu par le detecteur est deja remplit 
      fetch('http://10.0.2.2:8000' +'/getrec/'+ id )
       .then((response) => response.json())
       .then((responseJson) => {
         console.log(responseJson);
     
         setMasterDataSource(responseJson);
     
   
        })
       .catch((error) => {
         console.error(error);
       });
   }, []);
   
   
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
   
   <Text onPress={() => setChecked('reel')} 
   style={{marginRight: 80  ,marginTop:8,fontFamily:'sans-serif-medium', fontSize: 12, }}>{I18n.t('reel')}</Text>
   
   <RadioButton
   
   value='Potentielle'
   color = "#D66E15" 
   status={ checked === 'potentielle' ? 'checked' : 'unchecked' }
   onPress={() => setChecked('potentielle')}
   />
   <Text onPress={() => setChecked('potentielle')} 
   style={{marginTop:8,fontFamily:'sans-serif-medium', fontSize: 12,}}>
   {I18n.t('Potentielle')}</Text>
   </View>    
   
   <View>
   <Text style={[styles.text_footer, {
   marginTop:20} ]}>{I18n.t('Rs')}</Text>
   
   </View>
   <View style={styles.inputstyle}>
   
   <FlatList  renderItem={({ item }) => <Text   style ={styles.listItem}>     {item.detector} </Text>}
             keyExtractor={(item, index) => index}
             data={masterDataSource}
             extraData={isRender}
             />
            
   </View>
   <View>
   <Text style={[styles.text_footer, {
   marginTop:20}]}>{I18n.t('dateDet')}</Text>
   
   </View>
   
   <View style={styles.inputstyle}>
                  
   <FlatList 
             keyExtractor={(item, index) => index}
             data={masterDataSource}
             renderItem={renderHour}
             extraData={isRender}
             />
             <Modal
             
             
             animationType ='fade'
             visible ={isModalVisible}
             onRequestClose={()=> setModalVisible(false)}
             
             >
               <View >
                 <Text></Text>
                 <TextInput 
                 onChangeText ={(text)=>setInputText(text) }
                 defaultValue = {inputText}
                 editable ={true}
                 multiline ={false}
                 maxLength ={200}
                 />
                 <TouchableOpacity
                 onPress ={() => onPressSavedEdit()}
                 
                 
                 >
                   <Text>save</Text>
   
   
                 </TouchableOpacity>
               </View>
               </Modal>
               </View>
   <View style={{flexDirection: "row", justifyContent:'center' ,marginTop:20,marginBottom:20}} >
   
   <RadioButton
   
   value="client"
   status={ checked2 === 'client' ? 'checked' : 'unchecked' }
   
   color = "#D66E15"
   onPress={() => setChecked2('client')}
   />
   
   
   
   <Text style={{marginRight:15 ,marginTop:8,fontFamily:'sans-serif-medium', fontSize: 12}}>{I18n.t('Client')}</Text>
   
   <RadioButton
   
   value="Fournisseur"
   color = "#D66E15"
   
   status={ checked2 === 'Fournisseur' ? 'checked' : 'unchecked' }
   
   onPress={() => setChecked2('Fournisseur')}
   />
   <Text onPress={() => setChecked2('Fournisseur')}style={{marginRight:10 ,marginTop:8,fontFamily:'sans-serif-medium', fontSize: 12,}}>{I18n.t('Fournisseur')}</Text>
   <RadioButton
   
   value="Responsable"
   color = "#D66E15"
   
   status={ checked2 === 'Responsable' ? 'checked' : 'unchecked' }
   
   onPress={() => setChecked2('Responsable')}
   />
   <Text onPress={() => setChecked2('Responsable')} style={{marginTop:8,fontFamily:'sans-serif-medium', fontSize: 12,}}>{I18n.t('Responsable')}</Text>
   </View>    
   
   <View style={styles.inputstyle}>
   
   <FlatList 
             keyExtractor={(item, index) => index}
             data={masterDataSource}
             renderItem={renderSource}
             extraData={isRender}
             //editable={true}
             />
             <Modal
             
             
             animationType ='fade'
             visible ={isModalVisible}
             onRequestClose={()=> setModalVisible(false)}
             
             >
               <View >
                 <Text></Text>
                 <TextInput  
                 onChangeText ={(text)=>setInputText(text) }
                 defaultValue = {inputText}
                 editable ={true}
                 multiline ={false}
                 maxLength ={200}
                 />
                 <TouchableOpacity
                 onPress ={() => onPressSavedEdit()}
                 
                 
                 >
                   <Text>save</Text>
   
   
                 </TouchableOpacity>
               </View>
               </Modal>
   </View>
   <View>
   <Text style={[styles.text_footer, {
   marginTop: 20}]}>{I18n.t('description')}</Text>
   
   </View>
   <View style={styles.inputstyle}>
   
   <FlatList 
             keyExtractor={(item, index) => index}
             data={masterDataSource}
             renderItem={renderDes}
             extraData={isRender}
             //editable={true}
             />
             <Modal
             
             
             animationType ='fade'
             visible ={isModalVisible}
             onRequestClose={()=> setModalVisible(false)}
             
             >
               <View >
                 <Text></Text>
                 <TextInput
                 onChangeText ={(text)=>setInputText(text) }
                 defaultValue = {inputText}
                 editable ={true}
                 multiline ={false}
                 maxLength ={200}
                 />
                 <TouchableOpacity
                 onPress ={() => onPressSavedEdit()}
                 //style={styles.validbtn}
  
                 
                 >
                   <Text>save</Text>
   
   
                 </TouchableOpacity>
               </View>
               </Modal>
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
   
   <FlatList 
             keyExtractor={(item, index) => index}
             data={masterDataSource}
             renderItem={renderNumlot}
             extraData={isRender}
             //editable={true}
             />
             <Modal
             
             
             animationType ='fade'
             visible ={isModalVisible}
             onRequestClose={()=> setModalVisible(false)}
             
             >
               <View >
                 <Text></Text>
                 <TextInput
                 onChangeText ={(text)=>setInputText(text) }
                 defaultValue = {inputText}
                 editable ={true}
                 multiline ={false}
                 maxLength ={200}
                 />
                 <TouchableOpacity
                 onPress ={() => onPressSavedEdit()}
                 
                 
                 >
                   <Text>save</Text>
   
   
                 </TouchableOpacity>
               </View>
               </Modal>
   </View>
   
   <View>
   <Text style={[styles.text_footer, {
   marginTop:20}]}>{I18n.t('CMD')}</Text>
   
   </View><View style={styles.inputstyle}>
   
   <FlatList 
             keyExtractor={(item, index) => index}
             data={masterDataSource}
             renderItem={renderCmd}
             extraData={isRender}
             //editable={true}
             />
             <Modal
             
             
             animationType ='fade'
             visible ={isModalVisible}
             onRequestClose={()=> setModalVisible(false)}
             
             >
               <View >
                 <Text></Text>
                 <TextInput
                 onChangeText ={(text)=>setInputText(text) }
                 defaultValue = {inputText}
                 editable ={true}
                 multiline ={false}
                 maxLength ={200}
                 />
                 <TouchableOpacity
                 onPress ={() => onPressSavedEdit()}
                 
                 
                 >
                   <Text>save</Text>
   
   
                 </TouchableOpacity>
               </View>
               </Modal>
   </View>
   </View>
   
  
  <Text style={[styles.text_footer, {
    marginTop: 20}]}>{I18n.t('Statut')}</Text>
  
  
       
  <View style={styles. pick}>
  <Picker
        selectedValue={selectedValue}
        style={{ height: 45 ,borderRadius:20,}}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="ouvert" value="ouvert" />
        <Picker.Item label="en cours" value="en cours" />
        <Picker.Item label="Clôturé" value="Clôturé" />
       
  
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
            <Picker.Item label=" Grave" value="Grave" />
  
        <Picker.Item label="Moyenne" value="Moyenne" />
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
        <Picker.Item label=" Probable" value=" Probable" />
        <Picker.Item label="probable" probprobableblealue="probable" />
        <Picker.Item label="Trés probable" value="trés probable" />
       
  
  </Picker>
     
      </View>
     
    
   
   <View style={styles.btnview}>
   
   <TouchableHighlight
       style={styles.cancelbtn}
       onPress={() => navigation.goBack()}>
       <Text style={styles.buttonTextStyle}>
       {I18n.t('Annuler')} 
   
       </Text>
     </TouchableHighlight>
     <TouchableHighlight
       style={styles.validbtn}
       onPress={() => setSlideAnimationDialog(true)}>
       <Text style={styles.buttonTextStyle}>{I18n.t('Envoyer')}  
       </Text>
     </TouchableHighlight>
   
   </View> 
   </ScrollView>
   );
   
   }
  
  const styles = StyleSheet.create({
  
   listItem:{
  textAlign:'center'
  
   },
    
      
  
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
  cancelbtn: {
      width: 140,
      padding: 10,
      backgroundColor: '#ACACAC',
      borderRadius:11,
      marginTop:30,
      borderColor:'#ACACAC',
      marginBottom:10,
      elevation: 5,  marginHorizontal:10
    },
   validbtn: {
      width: 140,
      padding: 10,
      backgroundColor: '#044D8C',
      borderRadius:10,
      marginTop:30,
      marginBottom:10,
      elevation: 5,     marginHorizontal:12
  
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
      importance :{
  
        marginTop:30,
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
          borderColor:"#044D8C",
          backgroundColor:"#fff",
          elevation: 5, 
  
        },
  /*
        input:{
          width: '90%',
          height:70,
          borderColor:'grey',
          borderWidth:1,
          fontSize:25,
             },
           modalView:  {
            flex:1,
            alignItems:'center',
            justifyContent:'center',
            marginTop:20
            },
            touchableSave :{
              paddingHorizontal :100,
              backgroundColor:'orange',
              alignItems:'center',
              marginTop:20
            },
            text :{
  marginVertical:30,
  fontSize:25,
  fontWeight:'bold',
  marginLeft:10
            }*/
          
    });
  
  export default FormulairePrincipale;
  