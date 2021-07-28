import React from 'react';
//import React {useState, } from 'react';
import {useState , useEffect} from "react";
// import all the components we are going to use
//import AddButton from'./AddButton';
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,
  
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { NavigationContainer,useNavigation } from '@react-navigation/native';

import ButtonFilter from '../Components/ButtonFilter';
import ButtonLogOut  from '../Screens/LogOut';



const ListeAR = () => {
  const navigation = useNavigation();
  const [data ,setData]= useState('');
  const [search, setSearch] = useState('');
  const [name, setName] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  
  const [masterDataSource, setMasterDataSource] = useState([]);


  
// fonction qui prend une liste de base de donnée 

  useEffect(async() => {
    fetch('http://10.0.2.2:8000' +'/risques/' ,{

       method: "GET",

      })
  
      .then((response) => response.json())
      .then((responseJson) => {
        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);
      })
     
      .catch((error) => {
        console.error(error);
      });
  }, []);
// fonction qui fait la reacherche 
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) ;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  

  const ItemView = ({item}) => {
    return (
      // Flat List Item
      //onPress thzna lil formulaire twali
      <Text

      style={styles.listItem} 
      onPress={() => navigation.navigate('DetTab')}> 
       {item.description}
       
        {item.id}
      </Text>
    );
  };
  

  
  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  

 return (
  <SafeAreaView style={styles.parentView}>
  <View   >
    <View style={styles.row}>
      <View >



<ButtonFilter/>

</View>
   <Text style={styles.noti}>Hello</Text> 
   <ButtonLogOut/>
   </View>
    <TextInput
      style={styles.textInputStyle}
      onChangeText={(text) => searchFilterFunction(text)}
      value={search}
      underlineColor='white'
      placeholder="Search Here"
      borderColor ='#010B40'
     

      
      
    />
    
     
    <View style={styles.parentView} >
      
    <FlatList
      data={filteredDataSource}
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={ItemSeparatorView}
      renderItem={ItemView}
      style={styles.flatList}
    />
    
    </View>
    
  </View>
</SafeAreaView>
);
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    marginTop:50,

    
    //borderColor:'white'
  },
  parentView: {

    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    backgroundColor: '#F2F2F2',
    margin:0,
  },
  itemStyle: {
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
      marginTop: 0,
      justifyContent:'space-between',
    },

    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
  },
  flatList: {
    width: '100%',
  },
  textInputStyle: {
    height: 50,
    paddingLeft: 20,
    margin: 0,
    marginTop:10,
    borderRadius:40,
    shadowColor: "#000",
    marginRight:20,
    marginLeft:20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    
    elevation: 5,
    backgroundColor: '#FFFFFF',
  },
  listItem: {
    marginTop: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginLeft: 10,
    marginRight : 10,
    justifyContent:'space-between',
  },
  listItem: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    marginBottom:2,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    //fontFamily:'sans-serif-medium',
    textAlign:'center',
    borderColor:'#fff',
    borderWidth:1,
    elevation: 5
  },
  containers: {

    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "center",
 
   },
   btnview: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:50,
    marginTop:20,
  },
notificationtext:{
  fontFamily: 'CURSIVE',
  
  fontSize: 25,
  marginStart:20
},
textListe:{
  fontFamily:'sans-serif-medium',
color:"#010B4e"
},
noti:{
  fontFamily:'sans-serif-medium',
  fontSize:20,
 // marginStart:-20,
  marginTop:15
  
},
row :{
  flexDirection: 'row'
},
log :{
  marginLeft:150
}
});

export default ListeAR;
//oranger #dd3f26
//bleau : 38c4e3