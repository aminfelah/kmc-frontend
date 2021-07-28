import React, { useState } from "react"; 
import { Button, SafeAreaView, StyleSheet, Modal, 
        View, TextInput, Dimensions,Text } from "react-native"; 
import NumericInput from "react-native-numeric-input";
import InputNumeric from "./InputNumeric.js";

const { width } = Dimensions.get("window"); 

const ImportanceAlert=props=> { 
    
    // This is to manage Modal State 
    const [isModalVisible, setModalVisible] = useState(false); 

    // This is to manage TextInput State 
    const [inputValue1, setInputValue1] = useState("2"); 
    const [inputValue2, setInputValue2] = useState("2"); 
    const [inputValue3, setInputValue3] = useState("2");
    const [inputValue4, setInputValue4] = useState("2");

    

    // Create toggleModalVisibility function that will 
    // Open and close modal upon button clicks. 
    
    const toggleModalVisibility = () => { 
        setModalVisible(!isModalVisible); 
        //props.onAddField(value1,value2);
       // console.log('seeeeeeent');
        setInputValue1('2');
        setInputValue2('2');
        setInputValue3('2');
        setInputValue4('2');
        
        
    }; 

    return ( 
        <SafeAreaView style={styles.screen}> 
            

            {/** We are going to create a Modal with Text Input. */} 
            

            {/** This is our modal component containing textinput and a button */} 
            
                    <View style={styles.modalView}> 
                    <View  style={styles.NumericContainer}>
                        <View style={styles.element}>
                        <Text>Proba</Text>
                        <InputNumeric
                      value={inputValue1} 
                      onChangeText={(value1) => setInputValue1(value1)}
                      />
                        </View>
                      
                    <View style={styles.element}
                    >
                        <Text>Gravité</Text>
                        <InputNumeric  
                    value={inputValue3} 
                    onChangeText={(value3) => setInputValue3(value3)}
                    />
                        </View>
                    
                    </View>
                   
                        
        
         
           
        </View> 
        </SafeAreaView> 
    ); 
} 


const styles = StyleSheet.create({ 
    screen: { 
        flex: 1, 
        //alignItems: 'flex-start', 
        //justifyContent: "center", 
        backgroundColor: "#fff", 
        marginTop:75,
        margin:10

    }, 
    viewWrapper: { 
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center", 
        backgroundColor: "rgba(0, 0, 0, 0.2)", 
    }, 
    modalView: { 
        alignItems: "center", 
        justifyContent: "center", 
        position: "absolute", 
        top: "50%", 
        left: "45%", 
        elevation: 5, 
        transform: [{ translateX: -(width * 0.4) }, 
                    { translateY: -90 }], 
        height: 100, 
        width: width * 0.8, 
        backgroundColor: "#fff", 
        borderRadius: 7, 
    }, 
    textInput: { 
        width: "80%", 
        borderRadius: 18, 
        paddingVertical: 8, 
        paddingHorizontal: 16, 
        borderColor: "#312285", 
        borderWidth: 1, 
        marginBottom: 20, 
    }, 
    NumericContainer:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        marginHorizontal:10,
        marginBottom:20,
    },
    buttonContainer:{
            flexDirection:'row',
            width:'100%',
            justifyContent:'space-between',
            paddingHorizontal:15,
            marginTop:20,
       
       },
    element:{
        flexDirection:'column',
        alignItems:'center'
    },
    bb:{
        marginTop:50
    }
});
export default ImportanceAlert;