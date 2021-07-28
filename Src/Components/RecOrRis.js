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
  //import { AntDesign } from '@expo/vector-icons';
  import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
  import Icon from 'react-native-vector-icons/FontAwesome';
 import FormRisque from '../Screens/Detecteur/Formulaire/FormRis/FormRisque';

  
const RecOrRis= () => {
  const navigation = useNavigation();
 // const [count, setCount] = useState(0);
  //const onPress = () => setCount(prevCount => prevCount + 1);


  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>

        
        <View  style={styles.elements}>
        <Text style={styles.text}>Risque</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('FormRisque')}
          >
          <Text>
          Plainte Client

          </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('FormRisque')}
          >
          <Text>
         Non Conformité
          </Text>
        </TouchableOpacity>
        </View>
        <View >
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('FormRisque')}
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

          onPress={() => navigation.navigate('DetTab')}          
          >
          <Text marginStart={2}>
          Plainte Client               
          
         
          </Text>
        </TouchableOpacity>
        </View>
        <View >
        <TouchableOpacity
          style={styles.button}

          onPress={() => navigation.navigate('DetTab')}          >
          <Text>
          Non Conformité 

          </Text>
        </TouchableOpacity>

       

        <TouchableOpacity
          style={styles.button}

          onPress={() => navigation.navigate('DetTab')}          >
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
    //backgroundColor:'#E8EAED'
  },
  elements: {
    
   
    marginTop: 30,
    //backgroundColor:'#E8EAED'
  },
  button: {
    //alignItems: 'center',
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
        //marginLeft:15,
        fontWeight :'bold',
        //textAlign:"center"
  }
});




export default RecOrRis;
