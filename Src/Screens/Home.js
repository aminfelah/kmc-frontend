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
    Image 
  } from 'react-native';
  //import { AntDesign } from '@expo/vector-icons';
  import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
  
import I18n from "../I18n/i18n";

const HomeScreen = ({}) => {
  const navigation = useNavigation();

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>

        
        <View style={styles.row} >

      <View>
        <View >
      <Image  source={require('../Images/pic3.png')} style={styles.img} />
      </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ListeAR')}
          >
          <Text style={styles.text}>
          {I18n.t('Detecteur')}  

          </Text>
        </TouchableOpacity>
        </View>

        <View>
<View>

      <Image   source={require('../Images/pic4.png')}  style={styles.img} />
              

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ListeRP' 
          
          )}
          >
          <Text style={styles.text1}>
                    {I18n.t('Rp')}
        </Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>

        <View style={styles.row} >
          <View>
      <Image source={require('../Images/pic4.png')} style={styles.img} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ListeContribue')}
          >
          <Text style={styles.text2}>
          {I18n.t('Con')}          </Text>
        </TouchableOpacity>
        </View>
        <View>
      <Image  source={require('../Images/pic3.png')} style={styles.img} />

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ListeInforme')}
          
          >
          <Text style={styles.text3}>
          {I18n.t('inf')}          
         
          </Text>
        </TouchableOpacity>
        </View>
        </View>
       
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 100,
    marginBottom:60
    //backgroundColor:'#E8EAED'
  },
  button: {
    //alignItems: 'center',
    backgroundColor: '#D9D9D9',
    marginBottom:90,
    //padding: 50,
    width: 150,
    height:50,
    borderRadius:40,
    marginTop: 20,
    marginHorizontal: "3.5%",
    marginLeft:15,

    textAlign: "center",
    justifyContent:'space-between',
    borderColor:'#D9D9D9',
    //borderColor:'#F26E11',
    borderWidth:1,
    elevation:10
  },
  text:{
    textAlign:"center",
    marginTop:10,
    color: '#044D8C',
        fontSize: 14,
        //marginLeft:15,
        fontWeight :'bold',
  },
  text1:{
    textAlign:"center",
    marginTop:14,
    color: '#044D8C',
        fontSize: 12,
        //marginLeft:15,
        fontWeight :'bold',
  },
  text2:{
    textAlign:"center",
    marginTop:14,
    color: '#044D8C',
        fontSize: 13,
        marginLeft:25,
        fontWeight :'bold',
  },
  text3:{
    textAlign:"center",
    marginTop:14,
    color: '#044D8C',
        fontSize: 13,
        fontWeight :'bold',
  },
  row :{
    flexDirection: 'row',
  
  
  },
  img :{
    width:150,
    height:150,
    marginLeft:20
  }
});

export default HomeScreen ;