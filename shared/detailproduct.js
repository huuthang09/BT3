import React from "react";
import { Text, Image} from "react-native";
import {
  widthPercentageToDP as wp,
  
} from "react-native-responsive-screen";
import { View } from "native-base";

export default function DetailProduct(props) {
  
  return (
    <View
      style={{ flexDirection: "row", marginLeft: wp("7%") }}>
      <Image
        style={{ width: 25, height: 25 }}
       
        source={props.image}
        resizeMode="contain"
      />
      <Text
        style={{
          fontSize: 16,
          fontWeight: "bold",
          marginLeft: 5,
          
          color: props.txtColor
        }}
      >
        {props.txt}
      </Text>
    </View>
  );
}
