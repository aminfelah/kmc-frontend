

// tabheader pour catalogue cause et consequence ajouté par l'administrateur ou la société 

import React from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    ScrollView,
    Image,
    Dimensions,TouchableHighlight,StyleSheet
} from "react-native";

const { width } = Dimensions.get("window");
import I18n from '../../I18n/i18n';

import SousConsCa from "./SousConsCa";
import SousCauseCa from "./SousCauseCa";


export default class TabHeaderCa extends React.Component {


    state = {
        active: 0,
        xTabOne: 0,
        xTabTwo: 0,
        translateX: new Animated.Value(0),
        translateXTabOne: new Animated.Value(0),
        translateXTabTwo: new Animated.Value(width),
        translateY: -1000
    };



    handleSlide = type => {
        let {
            active,
            xTabOne,
            xTabTwo,
            translateX,
            translateXTabOne,
            translateXTabTwo
        } = this.state;
        Animated.spring(translateX, {
            toValue: type,
            duration: 100
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: 0,
                    duration: 100,
                    useNativeDriver: false,

                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: width,
                    duration: 100
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    toValue: -width,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    toValue: 0,
                    duration: 100
                }).start()
            ]);
        }
    };

    render() {

        console.log("hiiiii")

        let {
            xTabOne,
            xTabTwo,
            translateX,
            active,
            translateXTabOne,
            translateXTabTwo,
            translateY
        } = this.state;

        
        return (

            
            <View style={{ flex: 1 }}>
            <View
                style={{
                    width: "90%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        marginTop:1,
                        marginBottom: 20,
                        height: 36,
                        position: "relative"
                    }}
                >
                    <Animated.View
                        style={{
                            position: "absolute",
                            width: "40%",
                            height: "20%",
                            top: 25,
                            left: 20,
                            backgroundColor: "#D66E15",
                            borderRadius: 4,
                            transform: [
                                {
                                    translateX
                                }
                            ]
                        }}
                    />
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            borderWidth: 1,
                            borderColor: "transparent",
                            borderRadius: 4,
                            borderRightWidth: 0,
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0
                        }}
                        onLayout={event =>
                            this.setState({
                                xTabOne: event.nativeEvent.layout.x
                            })
                        }
                        onPress={() =>
                            this.setState({ active: 0 }, () =>
                                this.handleSlide(xTabOne)
                            )
                        }
                    >
                        <Text
                            style={{
                                color: active === 0 ? "#010B4e" : "#D66E15"
                            }}
                        >
                          {I18n.t('souscause')} !!!!!
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center",
                            borderWidth: 1,
                            borderColor: "transparent",
                            borderRadius: 4,
                            borderLeftWidth: 0,
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0
                        }}
                        onLayout={event =>
                            this.setState({
                                xTabTwo: event.nativeEvent.layout.x
                            })
                        }
                        onPress={() =>
                            this.setState({ active: 1 }, () =>
                                this.handleSlide(xTabTwo)
                            )
                        }
                    >
                        <Text
                            style={{
                                color: active === 1 ? "#010B4e" : "#D66E15"
                            }}
                        >
{I18n.t('souscons')}                        </Text>
                    </TouchableOpacity>
                </View>

                <ScrollView>
                    <Animated.View
                        style={{
                            transform: [
                                {
                                    translateX: translateXTabOne
                                }
                            ]
                        }}
                        onLayout={event =>
                            this.setState({
                                translateY: event.nativeEvent.layout.height
                            })
                        }
                    >
                          {/* importer l' interface de SousCauseCa ici*/}    
                        <SousCauseCa/> 

                        </Animated.View>

                        <Animated.View
                            style={{
                                justifyContent: "center",
                                alignItems: "center",
                                transform: [
                                    {
                                        translateX: translateXTabTwo
                                    },
                                    {
                                        translateY: -translateY
                                    }
                                ]
                            }}
                        >
                      
                      <SousConsCa/> {/* importer l' interface de SousConsCa ici */}
                      </Animated.View>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
 
  wow: {
    backgroundColor: '#0948AE',
    margin: 20,
    padding: 10,
    width: 100,
    borderRadius:25,
    marginRight:230,
    
    
  },

});
