


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

import 'react-native-gesture-handler';

import React, { useState } from "react";
import {Picker } from "react-native";

const FilterScreen = () => {
const [selectedValue, setSelectedValue] = useState();
// const navigation = useNavigation();
return (
  <View>
<View>
<Text style={[styles.text_footer, {
  marginTop: 30}]}>Niveau de responsabilité</Text>

</View>
<View>
<TouchableHighlight
        style={styles.buttonStyle}
        onPress={() => setSlideAnimationDialog(true)}>
        <Text style={styles.buttonTextStyle}>
         All
        </Text>
      </TouchableHighlight>
      </View>     
      <View>
<TouchableHighlight
        style={styles.buttonStyle}
        onPress={() => setSlideAnimationDialog(true)}>
        <Text style={styles.buttonTextStyle}>
         Détecteur
        </Text>
      </TouchableHighlight>
      </View>     
      <View>
<TouchableHighlight
        style={styles.buttonStyle}
        onPress={() => setSlideAnimationDialog(true)}
       >
        <Text style={styles.buttonTextStyle}>
         Responsable principale
        </Text>
      </TouchableHighlight>
      </View>     
<View>   
<TouchableHighlight
        style={styles.buttonStyle}
        onPress={() => setSlideAnimationDialog(true)}>
        <Text style={styles.buttonTextStyle}>
         Contribuer
        </Text>
      </TouchableHighlight>

   </View> 
   <View>   
<TouchableHighlight
        style={styles.buttonStyle}
        onPress={() => setSlideAnimationDialog(true)}>
        <Text style={styles.buttonTextStyle}>
         Informer
        </Text>
      </TouchableHighlight>

   </View> 
</View>

);

}

const styles = StyleSheet.create({
container: {
 marginTop :10,

},
 text_footer: {
      color: '#010B4e',
      fontSize: 15,
      marginLeft:15,
      fontWeight :'bold',
      textAlign:"center"
  },
  buttonStyle: {
      minWidth: '80%',
      padding: 10,
      backgroundColor: '#fff',
      margin: 15,
      borderRadius:8,
      marginTop:10,
      borderColor:"#38c4e3",
      borderWidth:1
    },
    buttonTextStyle: {
      color: '#010B4e',
      textAlign: 'center',
    },

});

export default FilterScreen;