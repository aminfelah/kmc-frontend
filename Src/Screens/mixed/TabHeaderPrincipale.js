// tabheader  principale qui contient  details, gestion , analyse
import React, { Component, useState, useEffect  } from 'react'
import { Animated, Dimensions, StyleSheet, Text, TouchableOpacity, View,ScrollView } from 'react-native';
import Analyse from '../mixed/Analyse';
import FormulairePrincipale from './Formulaire';
import GestionPersonne from './Gestionpersonne';

import I18n from '../../I18n/i18n';// pour la traduction

const { width } = Dimensions.get('window');


export default class HeaderTab extends Component {
    
  state = {
    active: 0,
    xTab1: 0,
    xTab2: 0,
    xTab3: 0,
    translateX: new Animated.Value(0),
    translateXTab1: new Animated.Value(0),
    translateXTab2: new Animated.Value(width),
    translateXTab3: new Animated.Value(2 * width),
    translateY: -1000
  }

  handleSlide(xCordinate){
    let { active, xTab1, xTab2, xTab3, translateX, translateXTab1, translateXTab2, translateXTab3, translateY } = this.state;
    
    // Tab Bar
    Animated.spring(translateX, {
      toValue: xCordinate,
      duration: 100,
      useNativeDriver: true,
    }).start();

    // Content
    if (active === 0){
      // Tab 1 -> 0
      // Tab 2 -> width
      // Tab 3 -> 2x width
      this.handleContentSlide(0, width, 2 * width);
    }

    else if (active === 1){
      // Tab 1 -> -width
      // Tab 2 -> 0
      // Tab 3 -> width
      this.handleContentSlide(-width, 0, width);
    }

    else {
      // Tab 1 -> -2x width
      // Tab 2 -> -width
      // Tab 3 -> 0
      this.handleContentSlide(-2 * width, -width, 0);
    }
  }

  
  handleContentSlide(tab1, tab2, tab3){
    let {translateXTab1, translateXTab2, translateXTab3} = this.state;

    Animated.parallel([
      Animated.spring(translateXTab1, {
        toValue: tab1,
        duration: 100,
        useNativeDriver: true,
      }).start(),

      Animated.spring(translateXTab2, {
        toValue: tab2,
        duration: 100,
        useNativeDriver: true,
      }).start(),

      Animated.spring(translateXTab3, {
        toValue: tab3,
        duration: 100,
        useNativeDriver: true,
      }).start(),
    ])

  }

  
  render() {
    let { active, xTab1, xTab2, xTab3, translateX, translateXTab1, translateXTab2, translateXTab3, translateY} = this.state;
    return (
      <View  >
        <View style={styles.container} >     
          
          {/* TAB BAR */}
          <View style={styles.tabContainer}>
            
            {/* Slidebar */}
            <Animated.View style={[ { transform: [{translateX}] }, styles.overlay]}/>

            {/* Tab 1 */}
            <TouchableOpacity style={[styles.tab, styles.tab1]}
                              onLayout={event => this.setState({xTab1: event.nativeEvent.layout.x})}
                              onPress={() =>
                                  this.setState({ active: 0 }, () =>
                                      this.handleSlide(xTab1)
                              )}>
                          <Text style={{color: active === 0? '#FFFFFF' : '#007AFF'}}>{I18n.t('Detaille')}</Text>

            </TouchableOpacity>

            {/* Tab 2 */}
            <TouchableOpacity style={[styles.tab, styles.tab2]}
                              onLayout={event => this.setState({xTab2: event.nativeEvent.layout.x})}
                              onPress={() =>
                                  this.setState({ active: 1 }, () =>
                                      this.handleSlide(xTab2)
                              )}>
                              
                  <Text style={{color: (active === 1)? '#FFFFFF' : '#007AFF'}}>{I18n.t('Gestion')}</Text>
            </TouchableOpacity>

            {/* Tab 3 */}
            <TouchableOpacity style={[styles.tab, styles.tab3]}
                              onLayout={event => this.setState({xTab3: event.nativeEvent.layout.x})}
                              onPress={() =>
                                  this.setState({ active: 2 }, () =>
                                      this.handleSlide(xTab3)
                              )}>
                              
                  <Text style={{color: (active === 2)? '#FFFFFF' : '#007AFF'}}>{I18n.t('Analyse')}</Text>
            </TouchableOpacity>

          </View>





          {/* CONTENT */}  
          <View 
              >
   <ScrollView  >
            {/* Tab 1 Content */}
            <Animated.View 
              style={{ 
                justifyContent: 'center',
                alignItems: 'center',
                
                
                transform:[{
                  translateX: translateXTab1
                }]
              }}
              onLayout={event => this.setState({translateY: event.nativeEvent.layout.height})}
            >
  <FormulairePrincipale/>               
            </Animated.View>

            {/* Tab 2 Content */}
            <Animated.View style={{ 
            
              justifyContent: 'center',
              alignItems: 'center',
              transform:[
                { translateX: translateXTab2 },
                { translateY: -translateY}
              ]
            }}>
     <GestionPersonne/>
  </Animated.View>

            {/* Tab 3 Content */}
            <Animated.View style={{ 
          
              justifyContent: 'center',
              alignItems: 'center',
              transform:[
                { translateX: translateXTab3 },
                { translateY: -2 * translateY}
              ]
            }}>
<Analyse />            
</Animated.View>
</ScrollView>
          </View>

        </View>
      </View>
    )
  }
}
    
    const styles = StyleSheet.create({
      container: {
        width: '90%',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
    
      // Tab Selector Styles
      tabContainer:{
        flexDirection: 'row',
        height: 36,
        marginTop: 10, 
        marginBottom: 10,
        position: 'relative',
      },
    
      
      overlay:{
        position: 'absolute',
        width: '33.33%',
        height: '100%',
        top: 0,
        left: 0,
        backgroundColor: '#044D8C',
        borderRadius: 4
      },
    
      tab:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0,
        borderColor: 'transparent',
      },
    
      tab1:{
        borderRightWidth: 0,
        //borderTopLeftRadius: 4,
        //borderBottomLeftRadius: 4,
      },
    
      tab2:{
        borderLeftWidth: 0,
        //borderRightWidth: 0,
        //borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
    
      },
    
      tab3:{
        borderLeftWidth:0.5,
        borderTopRightRadius: 4,
        borderBottomRightRadius: 4,
        borderRadius:3
      },
    
      // Content Styles
      contentContainter:{
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      contentText: {
        color: 'white',
        fontSize: 25
      } 
    });
    
