
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View, Platform, Picker, ActivityIndicator, Button, Alert ,TouchableHighlight ,Text ,ScrollView,Switch ,InteractionManager} from 'react-native';
import I18n from '../../../../../I18n/i18n';
import { NavigationContainer,useNavigation } from '@react-navigation/native';



export default class GestionPersonne extends Component {

   
   constructor(props){
   
     super(props);
     this.state = { 

     datasource:[],
     datasource2:[],
     datasource3:[],

     PickerValueHolder : '',
     PickerValueHolder2 : '',
     PickerValueHolder3 : '',
     PickerValueHolder4 : '',
     PickerValueHolder5 : '',
          PickerValueHolder6 : '',
                    PickerValueHolder7 : '',
                    PickerValueHolder8 : '',


     }
     //this.fetchData;
   }
  
  
  
  componentDidMount() {
    
    fetch('http://10.0.2.2:8000' +'/userinfo/')
      .then(response => response.json())
      .then(datasource => this.setState({datasource}));
    
    fetch( 'http://10.0.2.2:8000' +'/taches/')
    
      .then(response => response.json())
      .then(datasource2 => this.setState({datasource2}));
    
  }
  
  
      GetPickerSelectedItemValue=()=>{
   
        Alert.alert(this.state.PickerValueHolder);
     }
  
      GetPickerSelectedItemValue2=()=>{
   
        Alert.alert(this.state.PickerValueHolder2);
   
      }
  
      GetPickerSelectedItemValue3=()=>{
   
        Alert.alert(this.state.PickerValueHolder3);
   
      }
      GetPickerSelectedItemValue4=()=>{
   
        Alert.alert(this.state.PickerValueHolder4);
   
      }
   
  
  
   render() {
//
     if (this.state.isLoading) {
       return (
         <View style={{flex: 1, paddingTop: 20}}>
           <ActivityIndicator />
         </View>
       );
     }
   
     return (
      <View style={styles.MainContainer}>
        <Text style={styles.textheader}>{I18n.t('Detecteur')}</Text>
        <Text style={styles.texts}>Nom : </Text>

        <View style={styles.pick}>
        <Picker
              selectedValue={this.state.PickerValueHolde6r}
   
              onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder6: itemValue})}
        
               >
             
              { this.state.datasource.map((item, key)=>(
              <Picker.Item label={item.name} value={item.name} key={key} />)
              )}
      
            </Picker>
       </View>
       <Text style={styles.texts}>Taches :</Text>

       <View style={styles.pick}>
            <Picker
              selectedValue={this.state.PickerValueHolder4}
              
              onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder4: itemValue})} >
   
              { this.state.datasource2.map((item, key)=>(
              <Picker.Item label={item.nom_tache} value={item.nom_tache} key={key} />)
              )}
      
            </Picker>
            </View>
<Text style={styles.texts}>Fonction :</Text>

       <View style={styles.pick}>
            <Picker
              selectedValue={this.state.PickerValueHolder7}
           
              onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder7: itemValue})} >
   
              { this.state.datasource.map((item, key)=>(
              <Picker.Item label={item.fonction} value={item.fonction} key={key} />)
              )}
      
            </Picker>
            </View>



            <Text style={styles.textheader}>{I18n.t('Rp')}</Text>
            <Text style={styles.texts}>Nom : </Text>

            <View style={styles.pick}>
            <Picker
              selectedValue={this.state.PickerValueHolder}
   
              onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder: itemValue})}
              
               >
             
              { this.state.datasource.map((item, key)=>(
              <Picker.Item label={item.name} value={item.name} key={key} />)
              )}
      
            </Picker>
            </View>
            <Text style={styles.texts}>Taches : </Text>

            <View style={styles.pick}>
           <Picker
              selectedValue={this.state.PickerValueHolder8}
    
              onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder8: itemValue})} >
   
              { this.state.datasource2.map((item, key)=>(
              <Picker.Item label={item.nom_tache} value={item.nom_tache} key={key} />)
              )}
      
            </Picker>
       </View>
       <Text style={styles.texts}>Fonction: </Text>

       <View style={styles.pick}>
            <Picker
              selectedValue={this.state.PickerValueHolder5}
   
              onValueChange={(itemValue, itemIndex) => this.setState({PickerValueHolder5: itemValue})} >
   
              { this.state.datasource.map((item, key)=>(
              <Picker.Item label={item.fonction} value={item.fonction} key={key} />)
              )}
      
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
        onPress={this.setState.fetchData}
        >
          <Text style={styles.buttonTextStyle}>{I18n.t('Envoyer')}  
          </Text>
        </TouchableHighlight>
  
     </View>  
      </View>
             
     );
   }
  }
   
  const styles = StyleSheet.create({
   
  MainContainer :{
   
  justifyContent: 'center',
  flex:1,
  margin: 10
  },
    container: {
      paddingTop: 30,
      marginLeft: 20,
      marginRight: 20,
      flex: 1,
      
    },
    text:{
      textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 18,
  color:'#191970',
    },
    buttonView: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'row',
      marginTop: 10,
    },
    title:{
        marginTop:10,
        textAlign:'center'
    },
    pick: {
      borderWidth:1.5,
      marginHorizontal:20,
      borderColor:"#044D8C",
      borderRadius:23,
      marginRight:10,
      marginLeft:10,
      backgroundColor:'#fff',
      marginTop:10,
     height:50 ,
     elevation: 5, 
     },
     textheader:{
      color: '#F26E11',
      fontFamily:'sans-serif-medium',
      fontSize:15,
textAlign:'center',
      marginTop:50


    },
    cancelbtn: {
      width: 140,
      padding: 10,
      marginLeft:30,
 marginHorizontal:15,
      backgroundColor: '#ACACAC',
      borderRadius:11,
      marginTop:30,
      borderColor:'#ACACAC',
      marginBottom:10,
      elevation: 5, 
    },
    validbtn: {
      width: 140,
      padding: 10,
      backgroundColor: '#044D8C',
      borderRadius:10,
      marginTop:30,
      marginBottom:10,
      marginRight:20,
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
     escape:{
       //marginBottom : 50
       //padding:50
     },
     pick: {
      borderWidth:1.5,
      marginHorizontal:20,
      borderColor:"#044D8C",
      borderRadius:23,
      marginRight:10,
      marginLeft:10,
      backgroundColor:'#fff',
      marginTop:10,
     height:50 ,
     elevation: 5, 
     },
     texts:{

    

        color: '#010B4e',
      fontSize: 13,
      marginStart:25,
      fontFamily:'sans-serif-medium',
      margin:9,
      //marginLeft:50,
    
   
     }
  });