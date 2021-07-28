
// MEME principe pour la page de CauseCa.js mes c'est juste la liste des conséquences
import {
    View,
    Text,
    StyleSheet,
    Animated,
    TouchableHighlight,
    TouchableOpacity,
    StatusBar,
  } from 'react-native';
  
  import {SwipeListView} from 'react-native-swipe-list-view';

  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import React from 'react';
  import {useState , useEffect} from "react"


  
  
  import { useNavigation } from '@react-navigation/native';
  
  const ListConsCa = () => {
   
    
    
    const navigation = useNavigation();
  
    const [masterDataSource, setMasterDataSource] = useState([]);
  
    const [listData, setListData] = useState(
      masterDataSource.map((Item, index) => ({
        key: `${index}`,
        title:Item.descriptionConsequance,
      })),
      
  
    );
    useEffect(() => {
      fetch( 'http://10.0.2.2:8000' +'/consequence/', {
        
        method: "GET",   })
        .then((response) => response.json())
        .then((responseJson) => {
  
  
         setListData(responseJson);
  
  var data = listData.map((r ,index) => ({
       key: `${index}`,
  
                    value: r.descriptionConsequance,
                    })
         )
   
               console.log(data);
  
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);
  
  
    const closeRow = (rowMap, rowKey) => {
      if (rowMap[rowKey]) {
        rowMap[rowKey].closeRow();
      }
    };
  
    const deleteRow = (rowMap, rowKey) => {
      closeRow(rowMap, rowKey);
      const newData = [...listData];
      const prevIndex = listData.findIndex(item => item.key === rowKey);
      newData.splice(prevIndex, 1);
      setListData(newData);
    };
  
    const onRowDidOpen = rowKey => {
      console.log('This row opened', rowKey);
    };
  
    const onLeftActionStatusChange = rowKey => {
      console.log('onLeftActionStatusChange', rowKey);
    };
  
    const onRightActionStatusChange = rowKey => {
      console.log('onRightActionStatusChange', rowKey);
    };
  
    const onRightAction = rowKey => {
      console.log('onRightAction', rowKey);
    };
  
    const onLeftAction = rowKey => {
      console.log('onLeftAction', rowKey);
    };
  
    const VisibleItem = props => {
      const {
        data,
        rowHeightAnimatedValue,
        removeRow,
        leftActionState,
        rightActionState,
      } = props;
  
      if (rightActionState) {
        Animated.timing(rowHeightAnimatedValue, {
          toValue: 0,
          duration: 200,
          useNativeDriver: false,
        }).start(() => {
          removeRow();
        });
      }
      
  
  
      return (
        <Animated.View
          style={[styles.rowFront, {height: rowHeightAnimatedValue}]}>
          <TouchableHighlight
            style={styles.rowFrontVisible}
           // onPress={() =>navigation.navigate('SelectedCons' ,{test1})}
            underlayColor={'#aaa'}>
            <View>
              <Text>
                {data.item.descriptionConsequance}
              </Text>
              <Text style={styles.details} numberOfLines={1}>
                catalogues des conséquences
             </Text>
            </View>
          </TouchableHighlight>
        </Animated.View>
      );
    };
  
   
  
    const renderItem = (data, rowMap) => {
      const rowHeightAnimatedValue = new Animated.Value(60);
  
  
  
  
  
      
      return (
        <VisibleItem
          data={data}
          rowHeightAnimatedValue={rowHeightAnimatedValue}
          removeRow={() => deleteRow(rowMap, data.item.key)}
        />
      );
    };
  
    const HiddenItemWithActions = props => {
      const {
        swipeAnimatedValue,
        leftActionActivated,
        rightActionActivated,
        rowActionAnimatedValue,
        rowHeightAnimatedValue,
        onClose,
        onDelete,
      } = props;
  
      if (rightActionActivated) {
        Animated.spring(rowActionAnimatedValue, {
          toValue: 500,
          useNativeDriver: false
        }).start();
      } else {
        Animated.spring(rowActionAnimatedValue, {
          toValue: 75,
          useNativeDriver: false
        }).start();
      }
  
  
      return (
  
        <Animated.View style={[styles.rowBack, {height: rowHeightAnimatedValue}]}>
          <Text>Left</Text>
          {!leftActionActivated && (
            <TouchableOpacity
              style={[styles.backRightBtn, styles.backRightBtnLeft]}
              onPress={() => navigation.navigate('Touch')}>
           <MaterialCommunityIcons 
                      name="update"
                      color='green'
                      size={20}
                  />
            </TouchableOpacity>
          )}
          {!leftActionActivated && (
            
            <Animated.View
              style={[
                styles.backRightBtn,
                styles.backRightBtnRight,
                {
                  flex: 1,
                  width: rowActionAnimatedValue,
                },
              ]}>
              <TouchableOpacity
                style={[styles.backRightBtn, styles.backRightBtnRight]}
                onPress={onDelete}>
                <Animated.View
                  style={[
                    styles.trash,
                    {
                      transform: [
                        {
                          scale: swipeAnimatedValue.interpolate({
                            inputRange: [-90, -45],
                            outputRange: [1, 0],
                            extrapolate: 'clamp',
                          }),
                        },
                      ],
                    },
                  ]}>
              <AntDesign
                      name="delete"
                      color='red'
                      size={20}
                  />
                </Animated.View>
              </TouchableOpacity>
            </Animated.View>
          )}
        </Animated.View>
      );
    };
  
    const renderHiddenItem = (data, rowMap) => {
      const rowActionAnimatedValue = new Animated.Value(75);
      const rowHeightAnimatedValue = new Animated.Value(60);
  
      return (
        <HiddenItemWithActions
          data={data}
          rowMap={rowMap}
          rowActionAnimatedValue={rowActionAnimatedValue}
          rowHeightAnimatedValue={rowHeightAnimatedValue}
          onClose={() => closeRow(rowMap, data.item.key)}
          onDelete={() => deleteRow(rowMap, data.item.key)}
        />
      );
    };
  
    return (
      <View style={styles.container}>
            <View style={styles.views}>
  
    
        <StatusBar barStyle="dark-content"/>
        {/* <StatusBar backgroundColor="#FF6347" barStyle="light-content"/> */}
        <SwipeListView
          data={listData}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          leftOpenValue={75}
          rightOpenValue={-150}
          disableRightSwipe
          onRowDidOpen={onRowDidOpen}
          leftActivationValue={100}
          rightActivationValue={-200}
          leftActionValue={0}
          rightActionValue={-500}
          onLeftAction={onLeftAction}
          onRightAction={onRightAction}
          onLeftActionStatusChange={onLeftActionStatusChange}
          onRightActionStatusChange={onRightActionStatusChange}
        />
  
      </View>
      </View>
    );
  };
  
  export default ListConsCa;
  
  
  
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f4f4f4',
      flex: 1,
    
  
    },
    views :{
  
      width:350,
  
    },
    
    rowFront: {
      backgroundColor: '#FFF',
      borderRadius: 5,
      height: 60,
      margin: 5,
      marginBottom: 10,
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
    rowBack: {
      alignItems: 'center',
      backgroundColor: '#DDD',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingLeft: 15,
      margin: 5,
      marginBottom: 15,
      borderRadius: 5,
    },
    backRightBtn: {
      alignItems: 'flex-end',
      bottom: 0,
      justifyContent: 'center',
      position: 'absolute',
      top: 0,
      width: 75,
      paddingRight: 17,
    },
      backRightBtnLeft: {
      //backgroundColor: '#1f65ff',
      right: 78,
      
  
  
    },
    backRightBtnRight: {
      //backgroundColor: 'red',
      right: 0,
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
              borderTopLeftRadius:4,
          borderBottomLeftRadius:4,
  
      //borderWidth:0.5,
    },
    trash: {
      height: 25,
      width: 25,
      marginRight: 7,
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
    ButtonAjouter: {
      backgroundColor: '#044D8C',
      margin: 20,
      padding: 10,
      width: 90,
      borderRadius:25,
      //marginRight:230,
      //marginStart:50
      
    },
  });