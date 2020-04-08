import React, { useState } from "react";
import { View, Text } from "react-native";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import CustomMarker from "../shared/CustomMarker";
function Price(props) {
  const [
    nonCollidingMultiSliderValue,
    setNonCollidingMultiSliderValue,
  ] = useState([0, 100]);
  const nonCollidingMultiSliderValuesChange = (values) =>
    setNonCollidingMultiSliderValue(values);
  return (
    <View style={{ flexDirection: "column" }}>
      <Text style={{ color: '#7d7885', fontWeight: "bold", margin: 5 }}>PRICE RANGE</Text>

      <View style={{ flexDirection: "row", alignItems:'center', justifyContent:'space-between' }}>
        <Text style={{ fontSize: 15 }}>${nonCollidingMultiSliderValue[0]}</Text>
        <MultiSlider
          selectedStyle={{ backgroundColor: "#e44549" }}
          values={[
            nonCollidingMultiSliderValue[0],
            nonCollidingMultiSliderValue[1],
          ]}
          sliderLength={250}
          onValuesChange={nonCollidingMultiSliderValuesChange}
          min={0}
          max={1500}
          step={10}
          customMarker={CustomMarker}
        />

        <Text style={{ fontSize: 15 }}>${nonCollidingMultiSliderValue[1]}</Text>
      </View>
    </View>
  );
}
export default Price;
