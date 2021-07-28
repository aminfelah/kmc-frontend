// la cause  choisit qui s'affiche en haut lors de la selection 
import React,{useState , useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableHighlight,
  TouchableOpacity,
  StatusBar,FlatList,ScrollView
} from 'react-native';

import SelectedTabTwo from '../mixed/SelectedTabTwo';




 function SelectedCause  ({  route, navigation }) { 


 const {test1 } = route.params;// la description passer dynamicement 
    return (

      <ScrollView   style={[styles.container ]}>
     
      <Animated.View
        style={[styles.rowFront ]}>
        <TouchableHighlight
          style={styles.rowFrontVisible}
          onPress={() =>navigation.navigate('')}
          underlayColor={'#aaa'}>
             <View>               
          <Text> {route.params.test1 } </Text>
          </View>
        </TouchableHighlight>
      </Animated.View>

      

    
 <SelectedTabTwo role={"contribue"}/>

</ScrollView>  
    )};


export default SelectedCause;


const styles = StyleSheet.create({
  container: {

    marginTop:50,
    margin:10,
    backgroundColor: '#f4f4f4',
    flex: 1,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    backgroundColor: '#f4f4f4',
    borderRadius: 5,
    height: 60,
    margin: 15,
    marginBottom: 15,
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  rowFrontVisible: {
    backgroundColor: '#FFF',
    borderRadius: 5,
    height: 60,
    padding: 10,
    marginBottom: 15,
  },
 
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#666',
  },
  details: {
    fontSize: 12,
    color: '#999',
  },
  wow: {
    backgroundColor: '#0948AE',
    margin: 20,
    padding: 10,
    width: 100,
    borderRadius:25,
    
    
  },
});
