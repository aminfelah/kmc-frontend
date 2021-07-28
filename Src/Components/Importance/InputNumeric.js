import React ,{useState}from 'react';

import {View,Text, StyleSheet ,TextInput,Button,}from 'react-native';

import NumericInput from 'react-native-numeric-input';




const InputNumeric= props=>{
   
    return (
     <View  style={styles.formContainer}>
         
         
         <NumericInput 
        //value={this.state.value} 
            onChange={value => this.setState({value})} 
            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            totalWidth={70} 
            totalHeight={25} 
            iconSize={25}
            step={1.5}
            valueType='real'
            rounded 
            textColor='black' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#D66E15' 
            leftButtonBackgroundColor='#BEBEBB'/>
        
       
    </View>
 );
};
const styles=StyleSheet.create({
    formContainer:{
        margin:20,
    }
    
     
});

export default InputNumeric;