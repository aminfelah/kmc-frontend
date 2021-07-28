import React ,{ useState ,useEffect} from 'react';
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
    StatusBar,
    TouchableHighlight,
    Switch,Picker
} from 'react-native';
import {
    Dropdown,
    GroupDropdown,
    MultiselectDropdown,
  } from 'sharingan-rn-modal-dropdown';
import * as Animatable from 'react-native-animatable';
import I18n from "../../I18n/i18n";
//import {LinearGradient} from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';


import { event } from 'react-native-reanimated';


 


export const data = [
  
    {
      value: '1',
      label: 'Ali',
      employee_salary: '320800',
      employee_age: '61',
      //avatarSource: require('./ddicon.png'),
    },
    
    {
      value: '2',
      label: 'Zeineb',
      employee_salary: '170750',
      employee_age: '63',
      avatarSource: {
        uri: 'https://img.icons8.com/color/344/circled-user-male-skin-type-5.png',
      },
    },
    {
      value: '3',
      label: 'Mohamed',
      employee_salary: '86000',
      employee_age: '66',
      avatarSource: {
        uri: 'https://img.icons8.com/color/344/circled-user-male-skin-type-5.png',
      },
    },
    {
      value: '4',
      label: 'Sirine',
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
     
     
    ],
  },
 
  {
    title: 'M2.Machine',
    data: [
      {
        value: '19',
        label:'Réfrigerateur',
        
      },
    
     
    ],
  },
  {
    title: "M3.Main d'œuvre",
     data: [
      {
        value: '20',
        label:"Main d'œuvre",
        
      },
    
     
    ],
  },
  {
    title: "M4.Matière",
  data: [
      {
        value: '21',
        label:"Embalage",
        
      },
    
     
    ],
  },
  {
    title: "M5.Milieu",
    data: [
     
    ],
  },
];
  export const groupData2 = [
    

  
  {
    value: '1',
    label: 'Responsable technique',
    employee_salary: '320800',
    employee_age: '61',
    //avatarSource: require('./ddicon.png'),
  },
  
  {
    value: '2',
    label: "Responsable d'Achat",
    employee_salary: '170750',
    employee_age: '63',
    avatarSource: {
      uri: 'https://img.icons8.com/color/344/circled-user-male-skin-type-5.png',
    },
  },
  {
    value: '3',
    label: 'Responsable de production',
    employee_salary: '86000',
    employee_age: '66',
    avatarSource: {
      uri: 'https://img.icons8.com/color/344/circled-user-male-skin-type-5.png',
    },
  },
  {
    value: '4',
    label: 'Resource Humaine',
    employee_salary: '433060',
    employee_age: '22',
    avatarSource: {
      uri: 'https://img.icons8.com/color/344/circled-user-male-skin-type-5.png',
    },
  },
];
   
   

 
const AddCause = ({navigation}) => {
  const [selectedValue2, setSelectedValue2] = useState(null);

    const [descriptions, setDes] = useState('');
    const [selectedValue, setSelectedValue] = useState(null);
    const [values, setValues] = React.useState([]);

    const [data, setData] = useState();

    const [loading, setLoading] = useState(false);

    const [errortext, setErrortext] = useState('');
    
 useEffect(() => {
   console.log('TESTING THE API')
        fetch('http://10.0.2.2:8000' +'/userinfo/')
        .then(response => response.json())
        .then(responseJson => {
           setValues(responseJson)



            var data = values.map((item) => ({
          
          val: item.contribuerC.Nom_prenomC
                    
                   })  
         
                          
               ) 
               console.log(data); 
        })
        .catch((error) => {
            console.error(error);
          });
      }, []);

      const handleSubmitButton = () => {

        //Show Loader
        setLoading(true);
        var dataToSend = {
        
          descriptionCauses: descriptions
         
        
        };
        var formBody = [];
        for (var key in dataToSend) {
          var encodedKey = encodeURIComponent(key);
          var encodedValue = encodeURIComponent(dataToSend[key]);
          formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
        
        fetch( 'http://10.0.2.2:8000' +'/causereel/', {
        
          method: 'POST',
          body: formBody,
          headers: {
        
        
            //Header Defination
            'Content-Type':
            'application/x-www-form-urlencoded;charset=UTF-8',
            
        
          },
        })
          .then((response) => response.json())
          .then((responseJson) => {
            //Hide Loader
            setLoading(false);
            console.log(responseJson);
            navigation.replace('Analyse');
           
          })
          .catch((error) => {
            //Hide Loader
            setLoading(false);
            console.error(error);
          });
        };
          
    const [valueGS, setValueGS] = useState([]);
    
    const [valueS, setValueS] = useState()

    const [valueSS, setValueSS] = useState('');

    const onChangeGS = (value) => {
      setValueGS(value);
    };

    const onChangeS =(value) => {
      setValueGS(value);
    
    };
    const onChangeSS = (value) => {
      setValueSS(value);
    };

    const textInputChange = (val) => {
        if( val.length !== 0 ) {
            setValues({
                ...values,
                username: val,
                check_textInputChange: true
            });
        } else 
        
{
            setValues({
                ...values,
                username: val,
                check_textInputChange: false
            });
        }
    }
   
    const handlePasswordChange = (val) => {
        setValues({
            ...values,
            password: val
        });
    }


    const updateSecureTextEntry = () => {
        seValues({
            ...values,
            secureTextEntry: !values.secureTextEntry
        });
    }
  
    const updateConfirmSecureTextEntry = () => {
        setvalues({
            ...values,
            confirm_secureTextEntry: !values.confirm_secureTextEntry
        });
    }
    const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
            <ScrollView>
            <Text style={styles.text_header}>Nouvelle cause</Text>
            <Text style={styles.text_pick} >Ishikawa</Text>
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
            <Text style={styles.text_footer}>{I18n.t('description')}</Text>
            <View >
                
                <TextInput 
                    
                    style={styles.inputstyle}
                    autoCapitalize="none"
 onChangeText={(descriptions) =>
                  setDes(descriptions)
                }                />
                <Text style={styles.text_header2}>Contribuer:</Text>
                <Text style={styles.text_footer} >Nom et prénom</Text>
        <View style={styles.pick}>
         
                   <Picker
                    selectedValue={selectedValue ? selectedValue.name: null}
                    style={{ width: '100%' }}
                    onValueChange={(itemValue) => setSelectedValue({name : itemValue })}>
                    { values.map((value, i) => {
                        return <Picker.Item key={i} value={value.name} label={value.name} />
                    })}
                </Picker>
          </View>
          <Text style={styles.text_footer} >Fonction</Text>
        <View style={styles.pick}>
             <Picker
                    selectedValue={selectedValue2 ? selectedValue2.fonction: null}
                    style={{ width: '100%' }}
                    onValueChange={(itemValue) => setSelectedValue2({fonction : itemValue })}>
                    { values.map((value, i) => {
                        return <Picker.Item key={i} value={value.fonction} label={value.fonction} />
                    })}
                </Picker>
          </View>
        <View style={styles.swi} flexDirection='row'>
        <Text style={{fontFamily:'sans-serif-medium', fontSize: 12 ,marginLeft:25}} >Informer par mail</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        marginStart={150}
      />
    </View> 
                {values.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    
                </Animatable.View>
                : null}
            </View>

            
            
          
            <View style={styles.btnview}>
            <TouchableHighlight
        style={styles.validbtn}
        onPress={() =>navigation.goBack()}>
        <Text style={styles.buttonTextStyle}>
           Annuler

        </Text>
      </TouchableHighlight>
      <TouchableHighlight
        style={styles.cancelbtn}
        onPress={handleSubmitButton }>
        <Text style={styles.buttonTextStyle}>Envoyer  
        </Text>
      </TouchableHighlight>

                
            </View>
            </ScrollView>
        </Animatable.View>
      </View>
    );
};

export default AddCause;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#D9D9D9',
      
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 5,
        marginLeft:60,
        //opacity:0.4
    },
    footer: {
        flex: Platform.OS === 'ios' ? 3 : 5,
        backgroundColor: '#fff',
        marginLeft:10,
        marginRight:10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
        marginBottom:20,
        borderRadius:30,
        elevation:10,
        marginTop:-63

    },
    text_header: {
        color: '#014C78',
        fontWeight: 'bold',
        fontSize: 18,
        //paddingStart:25,
        fontFamily:'sans-serif-medium',
        textAlign:'center',
       // marginBottom:20
    },
    text_header2: {
        color: '#014C78',
        //fontWeight: 'bold',
        fontSize: 18,
        marginTop:20,
        //paddingStart:25,
        fontFamily:'sans-serif-medium',
        textAlign:'center',
       // marginBottom:20
    },
    text_footer: {
        color: '#014C78',
        fontSize: 15,
        textAlign:'center',
        fontFamily:'sans-serif-medium',
        marginRight:150,
        marginTop:30
    },
    text_pick:{
        color: '#014C78',
        fontSize: 15,
        textAlign:'center',
        fontFamily:'sans-serif-medium',
        marginRight:190,
        marginTop:30  
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    },
    inputstyle:{
        flexDirection:"row",
           marginHorizontal:30,
           borderWidth:1.5,
           
          borderRadius:23,
          height:100,
          marginTop:10,
          marginRight:30,
          marginLeft:25,
         // height:,
          borderColor:"#00c5D4",
          backgroundColor:"#fff",
          elevation: 5, 
        },
        validbtn: {
            width: 120,
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
            width: 120,
            padding: 10,
            backgroundColor: '#014C78',
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
          pick: {
            borderWidth:1.5,
            marginHorizontal:20,
            borderColor:"#00c5D4",
            borderRadius:23,
            marginRight:30,
          marginLeft:25,
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
          swi:{
              marginTop:20
          }
  });

