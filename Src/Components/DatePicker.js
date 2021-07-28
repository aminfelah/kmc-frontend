import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';

//import DatePicker from the package we installed
import DatePicker from 'react-native-datepicker';

const Datepicker = () => {
  const [date, setDate] = useState('11-06-2021');

  return (
    <SafeAreaView>
      <View >
     
        <DatePicker
          style={styles.datePickerStyle}
          date={date} // Initial date from state
          mode="date" // The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2016"
          maxDate="01-01-2030"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
           
            dateInput: {
              marginLeft: 30,borderWidth:0,

            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default Datepicker;

const styles = StyleSheet.create({
 
  datePickerStyle: {
      
width: 300,
 
//marginHorizontal:10,
//marginRight:20,
marginRight:10,
marginLeft:10,
borderWidth:1.5,
borderColor:"#044D8C",
borderRadius:23,
height:45,
backgroundColor:'#fff',
elevation: 5, 
//marginRight:50,
//marginLeft:50
                  
  },



  
});