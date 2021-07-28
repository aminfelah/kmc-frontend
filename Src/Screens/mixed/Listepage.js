// page qui affiche la liste des reclammations pour le Responsable Principale 
import React, { useState, useEffect } from 'react';
import { CheckBox, Icon } from 'react-native-elements'
import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  FlatList,
  TextInput,

} from 'react-native';

import ButtonFilter from '../../Components/ButtonFilter';

import { useNavigation, useRoute } from '@react-navigation/native';
import ButtonLogOut from '../../Screens/LogOut';
import I18n from '../../I18n/i18n';
import ImportanceAlert from '../../Components/Importance/ImportanceAlert';



function ListePage() {
  const [userRole, setUserRole] = useState('');
  const navigation = useNavigation();
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [masterDataSource2, setMasterDataSource2] = useState([]);
  const [filtreActive, setFiltreActive] = useState(false);
  const [Ouvertchecked, setOuvertchecked] = React.useState(false);
  const [Fermechecked, setFermechecked] = React.useState(false);
  const [EnCourchecked, setEnCourchecked] = React.useState(false);
  var test1;

  // boucle pour afficher l id de tou les listes existantes 
  var data = masterDataSource.map((item) => ({
    value: item.id

  })


  )
  console.log(data);
  const route = useRoute();
  // API pour recevoir les Details de reclamation
  useEffect(() => {

    //var  id = AsyncStorage.setItem('id',data)  
    setUserRole(route.name);
    let attribut = '';

    if (userRole === 'ListeRP') {
      attribut = '/reclist/'
    }
    if (userRole === 'ListeAR') {
      attribut = '/risques/'
    }

    if (userRole === 'ListeInforme') {
      attribut = '/rec/'
    }
    if (userRole === 'ListeContribue') {
      attribut = '/rec/'
    }

    fetch('http://10.0.2.2:8000' + attribut, {


      method: "GET",

    })

      .then((response) => response.json())
      .then((responseJson) => {

        setFilteredDataSource(responseJson);
        setMasterDataSource(responseJson);

        var data = masterDataSource.map((item) => ({

          value: item.id

        })
        )

      })

      .catch((error) => {
        console.error(error);
      });

  }, [userRole]);

  // Search Function
  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(
        (item) => {
          let newItemDescription = item.description.toUpperCase();
          let newText = text.toUpperCase()
          return newItemDescription.includes(newText)
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


  // passer la description de la page dynamiquement et naviger pour le tabheader de responsable principale 
  const ItemView = ({ item }) => {
    if ((item.status === "ouvert" && Ouvertchecked) || (item.status === "cloturer" && Fermechecked) || (item.status === "en cours" && EnCourchecked) || (!Ouvertchecked && !Fermechecked && !EnCourchecked)){
      return (

        <View key={item.id} style={styles.listItem}>
          {item.status == "ouvert" && (<Icon
            name='alarm-outline'
            type='ionicon'
            color='green'
          />)}
          {item.status == "cloturer" && (<Icon
            name='alarm-outline'
            type='ionicon'
            color='red'
          />)}
          {item.status == "en cours" && (<Icon
            name='alarm-outline'
            type='ionicon'
            color='orange'
          />)}

          <Text

            style={{ textAlign: 'center' }}
            onPress={() => {
              console.log(userRole);

              if (userRole === 'ListeRP') {
                navigation.push('RPHeaderTab', { item })
              }
              else if (userRole === 'ListeContribue') {
                navigation.push('HeaderTabContribue', { item })
              } else if (userRole === 'ListeInforme') {
                navigation.push('HeaderTabInf', { item })
              } else if (userRole === 'ListeAR') {
                navigation.push('DetTab', { item })
              }
            }
            } >

            {item.description}
          </Text>

        </View>

      );
          }else 
          {
            return null
          }

  }

  const ItemSeparatorView = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };
  // Api to Update the informations
  console.log("------------------------------------------------------------------------------------------")
  console.log(masterDataSource);
  console.log("------------------------------------------------------------------------------------------")

  return (



    <SafeAreaView style={styles.parentView}>

      <View >

        <View style={styles.row}>
          <View >
            <ButtonFilter />

          </View >

          <Text style={styles.noti}>Bonjour</Text>
          <ButtonLogOut />


        </View>

        <View style={styles.filterBlock} >
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => searchFilterFunction(text)}
            value={search}
            underlineColor='white'
            placeholder={I18n.t('Search')}
            borderColor='#010B40'

          /
          >
          <Icon
            style={styles.filterIcon}
            name='filter'
            type='ionicon'
            color='orange'
            onPress={() => { setFiltreActive(!filtreActive) }}
          />
        </View>
        {filtreActive && (<View style={styles.listFilter} >
          <View>
            <CheckBox

              center
              title='Ouvert'
              iconRight
              iconType='material'
              checkedIcon='done'
              uncheckedIcon='add'
              uncheckedColor='grey'
              checkedColor='orange'
              onPress={() => {
                setOuvertchecked(!Ouvertchecked);
              }}
              checked={Ouvertchecked}
            />
          </View>
          <View>
            <CheckBox

              center
              title='En Cours'
              iconRight
              iconType='material'
              checkedIcon='done'
              uncheckedIcon='add'
              uncheckedColor='grey'
              checkedColor='orange'
              onPress={() => {
                setEnCourchecked(!EnCourchecked);
              }}
              checked={EnCourchecked}
            />
          </View>
          <View>
            <CheckBox

              center
              title='Ferme'
              iconRight
              iconType='material'
              checkedIcon='done'
              uncheckedIcon='add'
              uncheckedColor='grey'
              checkedColor='orange'
              onPress={() => {
                setFermechecked(!Fermechecked);
              }}
              checked={Fermechecked}
            />
          </View>
        </View>)}

        {!filtreActive && (<View style={styles.parentView} >

          <FlatList
            data={filteredDataSource}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={ItemSeparatorView}
            renderItem={ItemView}
            style={styles.flatList}
          />

        </View>)}

      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    marginTop: 50,
  },
  parentView: {

    flex: 1,

    alignItems: 'center',
    marginTop: 35,
    backgroundColor: '#F2F2F2',
    margin: 0,
  },
  itemStyle: {
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
      marginTop: 0,
      justifyContent: 'space-between',
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
    width: '80%',
    margin: 0,
    marginTop: 10,
    borderRadius: 40,
    shadowColor: "#000",
    marginRight: 20,
    marginLeft: 20,
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
    marginRight: 10,
    justifyContent: 'space-between',
  },
  listItem: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 2,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    //fontFamily:'sans-serif-medium',
    textAlign: 'center',
    borderColor: '#fff',
    borderWidth: 1,
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
    margin: 50,
    marginTop: 20,
  },
  notificationtext: {
    fontFamily: 'CURSIVE',

    fontSize: 25,
    marginStart: 20
  },
  textListe: {
    fontFamily: 'sans-serif-medium',
    color: "#010B4e"
  },
  noti: {
    fontFamily: 'sans-serif-medium',
    fontSize: 20,
    // marginStart:-20,
    marginTop: 15

  },
  row: {
    flexDirection: 'row'
  },
  log: {
    marginLeft: 150
  },
  filterBlock: {

    flexDirection: 'row',

  },
  filterIcon: {
    paddingTop: '25 !important'

  },
  listFilter: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    //fontFamily:'sans-serif-medium',
    textAlign: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    elevation: 5


  }


});

export default ListePage;