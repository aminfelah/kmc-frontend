import React, {useState} from 'react';
import {View, Button, Platform ,StyleSheet,Text} from 'react-native';
import Slider from "react-native-slider";
import I18n from "../I18n/i18n"
const TIME = {  min: 0,  max: 24 }
const SliderPad = 12;

// our time slider component
const Timepicker = ({}) => {
  const { min, max } = TIME;
  const [width, setWidth] = useState(280);
  const [selected, setSelected] = useState();
  const textTransformerTimes = (value) => {
    return value === 0 ? "12am" : (value < 13 ? value : value - 12) +    (value < 12 ? "am" : "pm");
  };
  if (!selected) {
    setSelected([min]); // we are only selected min, since it is single slider
  }

  // Callbacks
  const onLayout = (event) => {
    setWidth(event.nativeEvent.layout.width - SliderPad * 2);
  };
  const onValuesChangeFinish = (values) => {
    setSelected(values);
  };
  const [sliderValue, setSliderValue] = useState(15);

  return (
    <View onLayout={onLayout} style={styles.wrapper}>
      <View><Text style={styles.text_footer}>{I18n.t('Heure')} {selected}</Text>
</View>
        <Slider
          min={min}
          
          allowOverlap
          values={selected}
          sliderLength={width}
          onValuesChangeFinish={onValuesChangeFinish}
          enableLabel={true}
          trackStyle={{
            height: 10,
            borderRadius: 8,
          }}
          markerOffsetY={3}
          onValueChange={(selected) => setSelected(selected)}
          selectedStyle={{
            backgroundColor: "#D66E15",
          }}
          
        />
        
    </View>
  );
}
export default Timepicker;
const styles = StyleSheet.create({
  sliderLabel: {
      position: 'absolute',
      justifyContent: 'center',
      top: 30,
      width: 50,
      height: 50,
  },
  sliderLabelText: {
      textAlign: 'center',
      lineHeight: 100,
      flex: 1,
  },
  text_footer: {
    color: '#010B4e',
    fontSize: 12,
    marginStart:25,
    fontFamily:'sans-serif-medium',
    marginTop:20
    //margin:20,
    //marginLeft:50,

},
});