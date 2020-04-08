import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default function Header({ navigation, title }) {
  const openMenu = () => {
    navigation.openDrawer();
  };
  return (
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
      <TouchableOpacity 
      onPress={openMenu}>
        <Image
          style={{ width: 25, height: 25 }}
          source={require("../assets/feed/hi1.png")}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <Text style={{fontSize: 20, color:'#FFF', fontWeight:'bold', marginLeft:wp("30%")}}>{title}</Text>
      <Image
        style={{width: 25, height: 25, marginLeft:wp("30%") }}
        source={require("../assets/feed/hi2.png")}
        resizeMode="contain"
      />
    </View>
  );
}
