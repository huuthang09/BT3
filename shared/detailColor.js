import React, { useState } from "react";
import {TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function DetailColor(props) {
  const [check, setcheck] = useState({ like: false });
  const toggleCheck = () => setcheck({ like: !check.like });
  return (
    <TouchableOpacity
      style={{
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: wp("5%"),
        width: 30,
        height: 30,
        backgroundColor: props.color,
      }}
      onPress={toggleCheck}
    >
      <Image
        style={{ width: 20, height: 20, display: check.like ? "flex" : "none" }}
        source={require("../assets/filter/check.png")}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

