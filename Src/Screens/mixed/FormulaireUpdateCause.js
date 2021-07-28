
//n'est pas encore réalisé
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View ,Text ,Switch ,TouchableHighlight} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {
  Dropdown,
  GroupDropdown,

} from 'sharingan-rn-modal-dropdown';


import ImportanceAlert from '../../Components/Importance/ImportanceAlert';
export const data = [
  
  {
    value: '1',
    label: 'Tiger Nixon',
    employee_salary: '320800',
    employee_age: '61',
    //avatarSource: require('./ddicon.png'),
  },
  
  {
    value: '2',
    label: 'Garrett Winters',
    employee_salary: '170750',
    employee_age: '63',
    avatarSource: {
      uri: 'https://img.icons8.com/color/344/circled-user-male-skin-type-5.png',
    },
  },
  {
    value: '3',
    label: 'Ashton Cox',
    employee_salary: '86000',
    employee_age: '66',
    avatarSource: {
      uri: 'https://img.icons8.com/color/344/circled-user-male-skin-type-5.png',
    },
  },
  {
    value: '4',
    label: 'Cedric Kelly',
    employee_salary: '433060',
    employee_age: '22',
    avatarSource: {
      uri: 'https://img.icons8.com/color/344/circled-user-male-skin-type-5.png',
    },
  },
];

export const groupData = [
  {
    title: 'M1.Méthode',
    data: [
      {
        value: '233',
        label: 'iPhone SE(2020)',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/2x/iphone-x.png',
        },
      },
      {
        value: '242',
        label: 'iPhone 11',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/2x/iphone-x.png',
        },
      },
      {
        value: '24w',
        label: 'iPhone 12',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/2x/iphone-x.png',
        },
      },
      {
        value: '99',
        label: 'iPhone 12 Mini',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/2x/iphone-x.png',
        },
      },
    ],
  },
 
  {
    title: 'M2.Matériel',
    data: [
      {
        value: '19',
        label: 'Pixel 3a',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
      {
        value: '20',
        label: 'Pixel 3',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
      {
        value: '21',
        label: 'Pixel 3 xl',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
      {
        value: '16',
        label: 'Pixel 4',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
      {
        value: '17',
        label: 'Pixel 4a',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
      {
        value: '18',
        label: 'Pixel 5',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
    ],
  },
  {
    title: "M3.Main d''œuvre",
    data: [
      {
        value: '19',
        label: 'Pixel 3a',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
      {
        value: '20',
        label: 'Pixel 3',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
      {
        value: '21',
        label: 'Pixel 3 xl',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
      {
        value: '16',
        label: 'Pixel 4',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
      {
        value: '17',
        label: 'Pixel 4a',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
      {
        value: '18',
        label: 'Pixel 5',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
    ],
  },
  {
    title: "M4.Matière",
    data: [
      {
        value: '19',
        label: 'Pixel 3a',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
      {
        value: '20',
        label: 'Pixel 3',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
      {
        value: '21',
        label: 'Pixel 3 xl',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
      {
        value: '16',
        label: 'Pixel 4',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
      {
        value: '17',
        label: 'Pixel 4a',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
      {
        value: '18',
        label: 'Pixel 5',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
    ],
  },
  {
    title: "M5.Milieu",
    data: [
      {
        value: '19',
        label: 'Pixel 3a',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
      {
        value: '20',
        label: 'Pixel 3',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
      {
        value: '21',
        label: 'Pixel 3 xl',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
      {
        value: '16',
        label: 'Pixel 4',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
      {
        value: '17',
        label: 'Pixel 4a',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
      {
        value: '18',
        label: 'Pixel 5',
        avatarSource: {
          uri: 'https://img.icons8.com/cute-clipart/344/android.png',
        },
      },
    ],
  },
];

const FormUpdate = () => {
    
  const [valueMS, setValueMS] = useState([]);
  const [valueSS, setValueSS] = useState('');
  const [valueGS, setValueGS] = useState([]);
  const [text2, onChangeText2] = React.useState("un commentaire");
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);

  const onChangeMS = (value) => {
    setValueMS(value);
  };
  const onChangeSS = (value) => {
    setValueSS(value);
  };
  const onChangeGS = (value) => {
    setValueGS(value);
  };

  return (
    <View
      style={{
        flexDirection: 'column',
        height: '100%',
        width:'100%',
      marginStart:2
      }}
    >
     
      <ScrollView>
      <View style={styles.container}>
          <Text style={styles.textheader}>Cause ou Conséquance</Text>
          <Text style={styles.SousText} >Type</Text>
          <View style={styles.pick}>
          <GroupDropdown
            //label="5M"
            data={groupData}
            enableSearch
            enableAvatar
            value={valueGS}
            onChange={onChangeGS}
            underlineColor="transparent"
            //marginRight={20}
            //borderRadius={8}
            
            //rippleColor={'#fff'}
           // outlined
          />
        </View>
        </View>
        <View style={styles.container}>
        <Text style={styles.textheader}>Contribuer</Text>
        <View style={styles.container}>
        <Text style={styles.SousText} >Nom et prénom</Text>
        <View style={styles.pick}>
          <Dropdown
            //label="Nom et prénom"
            data={data}
            enableSearch
            value={valueSS}
            onChange={onChangeSS}
            underlineColor="transparent"
          />
        </View>
        </View>
        <View style={styles.container}>
        <Text style={styles.SousText} >tache</Text>
        <View style={styles.pick}>
          <Dropdown
            
            data={data}
            enableSearch
            value={valueSS}
            onChange={onChangeSS}
            underlineColor="transparent"
          />
        </View>
        </View>
        <View style={styles.container}>
        <Text style={styles.SousText} >Fonction</Text>
        <View style={styles.pick}>
          <Dropdown
            
            data={data}
            enableSearch
            value={valueSS}
            onChange={onChangeSS}
            underlineColor="transparent"
          />
        </View>
        </View>
   <View style={styles.container} flexDirection='row'>
        <Text style={{fontFamily:'sans-serif-medium', fontSize: 12}} >informer par mail</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        marginStart={150}
      />
    </View> 
 
        </View>
        <View>
            <ImportanceAlert/>
        </View>
        <View marginTop={30}><Text style={styles.SousText} >Commentaire</Text></View>
        <View style={styles.commentaire}>
  
                     
  <TextInput
        style={styles.input}
        onChangeText={onChangeText2}
        value={text2}
        //editable={false}
      />
  </View>
  
  <View style={styles.btnview}>

<TouchableHighlight
        style={styles.validbtn}
        onPress={() => setSlideAnimationDialog(true)}>
        <Text style={styles.buttonTextStyle}>
           Annuler

        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.cancelbtn}
        onPress={() => setSlideAnimationDialog(true)}>
        <Text style={styles.buttonTextStyle}>Envoyer  
        </Text>
      </TouchableHighlight>

   </View> 
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
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
color:'#191970'
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
    textAlign:'center',
    color: '#010B4e',
    fontFamily:'sans-serif-medium',
    fontSize:15,
    marginTop:15
  },
   escape:{
     //marginBottom : 50
     //padding:50
   },
   SousText:
   {marginTop:8,
    fontFamily:'sans-serif-medium',
     fontSize: 12,marginStart:25
    },
    commentaire:{
      flexDirection:"row",
      marginHorizontal:30,
      borderWidth:1.5,
      borderColor:"#044D8C",
     borderRadius:23,
     elevation: 5, 
     height:150,
     marginTop:30,
     marginRight:10,
     marginLeft:10,
     backgroundColor:"#fff"  
    },
    validbtn: {
      width: 140,
      padding: 10,
      backgroundColor: '#ACACAC',
      borderRadius:11,
      marginTop:30,
      borderColor:'#ACACAC',
      marginBottom:10,
      marginStart:20,
      elevation: 5, 
    },
    cancelbtn: {
      width: 140,
      padding: 10,
      backgroundColor: '#044D8C',
      borderRadius:10,
      marginTop:30,
      marginBottom:10,
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
      marginRight:20,
marginLeft:10,
      marginTop:10,
     
    },
});


export default FormUpdate;
