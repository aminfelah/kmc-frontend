

import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableHighlight } from "react-native";
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import AntDesign from 'react-native-vector-icons/AntDesign';
import { CheckBox,Icon  } from 'react-native-elements'
import I18n from "../../Src/I18n/i18n";
const ButtonFilter = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [slideAnimationDialog, setSlideAnimationDialog] = useState(false)
  const [RPchecked, setRPchecked] = React.useState(false);
  const [DETchecked, setDETchecked] = React.useState(false);
  const [INFchecked, setINFchecked] = React.useState(false);
  const [CONchecked, setCONchecked] = React.useState(false);
  const [PREMIERRPchecked, setPREMIERRPchecked] = React.useState(false);
  const [TOUTchecked, setTOUTchecked] = React.useState(false);
  const [roleTable, setRoleTable] = React.useState([]);



  const [isModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View >
      <Modal
        transparent visible={isModalVisible}
        presentationStyle="overFullScreen"
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >

        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <View>
              <Text style={[styles.text_footer, {
                marginTop: 30
              }]}>{I18n.t('Niveau_Responsabiliter')}</Text>

            </View>
            <View>
              <CheckBox
                
                center
                title='Primary Manager'
                iconRight
                iconType='material'
                checkedIcon='done'
                uncheckedIcon='add'
                uncheckedColor='grey'
                checkedColor='orange'
                onPress={() => {
                  setPREMIERRPchecked(!PREMIERRPchecked);
                  if (!PREMIERRPchecked) {
                    roleTable.push('PremierResponsable')
                  } else if (PREMIERRPchecked) {
                    roleTable.splice(roleTable.indexOf('PremierResponsable'), 1);
                  }
                  console.log("---------------------------------------------------------------------------------------------")
                  console.log(roleTable)
                  console.log("---------------------------------------------------------------------------------------------")
                }}
                checked={PREMIERRPchecked}
              />
            </View>
            <View>


              <CheckBox
                center
                title='Senior Manager '
                iconRight
                iconType='material'
                checkedIcon='done'
                uncheckedIcon='add'
                uncheckedColor='grey'
                checkedColor='orange'
                onPress={() => {
                  setRPchecked(!RPchecked);
                  if (!RPchecked) {
                    roleTable.push('ResponsablePrincipale');
                  } else if (RPchecked) {
                    roleTable.splice(roleTable.indexOf('ResponsablePrincipale'), 1);
                  }
                  console.log("---------------------------------------------------------------------------------------------")
                  console.log(roleTable)
                  console.log("---------------------------------------------------------------------------------------------")

                }}
                checked={RPchecked}

              />




            </View>

            <View>
              <CheckBox
                center
                title='Detector              '
                iconRight
                iconType='material'
                checkedIcon='done'
                uncheckedIcon='add'
                uncheckedColor='grey'
                checkedColor='orange'
                onPress={() => {
                  setDETchecked(!DETchecked);
                  if (!DETchecked) {
                    roleTable.push('Detecteur')
                  } else if (DETchecked) {
                    roleTable.splice(roleTable.indexOf('Detecteur'), 1);
                  }
                  console.log("---------------------------------------------------------------------------------------------")
                  console.log(roleTable)
                  console.log("---------------------------------------------------------------------------------------------")
                }}
                checked={DETchecked}
              />
            </View>

            <View>
              <CheckBox
                center
                title='Informed             '
                iconRight
                iconType='material'
                checkedIcon='done'
                uncheckedIcon='add'
                uncheckedColor='grey'
                checkedColor='orange'
                onPress={() => {
                  setINFchecked(!INFchecked);
                  if (!INFchecked) {
                    roleTable.push('Informe');
                  } else if (INFchecked) {
                    roleTable.splice(roleTable.indexOf('Informe'), 1);
                  }
                  console.log("---------------------------------------------------------------------------------------------")
                  console.log(roleTable)
                  console.log("---------------------------------------------------------------------------------------------")

                }}
                checked={INFchecked}

              />

            </View>
            <View>
              <CheckBox
                center
                title='Contributed       '
                iconRight
                iconType='material'
                checkedIcon='done'
                uncheckedIcon='add'
                uncheckedColor='grey'
                checkedColor='orange'
                onPress={() => {
                  setCONchecked(!CONchecked);
                  if (!CONchecked) {
                    roleTable.push('Contribue');
                  } else if (CONchecked) {
                    roleTable.splice(roleTable.indexOf('Contribue'), 1);
                  }
                  console.log("---------------------------------------------------------------------------------------------")
                  console.log(roleTable)
                  console.log("---------------------------------------------------------------------------------------------")

                }}
                checked={CONchecked}

              />


            </View>
            

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Icon
                  name="close-outline"
                  type='ionicon'
                  color='orange' />
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >

        <AntDesign name="user" size={22} color="#fff" >

        </AntDesign>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    //backgroundColor: "rgba(0, 0, 0, 0.2)",
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    //marginTop: 22
  },
  modalView: {
    marginTop: 130,
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 50,
    padding: 10,
    width: 45,
    height: 45,
    margin: 10,
    elevation: 5,
    marginStart: 10,

  },
  buttonOpen: {
    backgroundColor: "#F26E11"

  },
  buttonClose: {
    backgroundColor: "#dbdbdb",
  },
  textStyle: {
    color: "white",
    // fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  text_footer: {
    color: '#010B4e',
    fontSize: 15,
    marginLeft: 15,
    fontWeight: 'bold',
    textAlign: "center"
  },
  buttonStyle: {
    minWidth: '80%',
    padding: 10,
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 8,
    marginTop: 10,
    borderColor: "#38c4e3",
    borderWidth: 1,
    marginStart: 10
  },
  buttonTextStyle: {
    color: '#010B4e',
    textAlign: 'center',
  },
});
export default ButtonFilter;
