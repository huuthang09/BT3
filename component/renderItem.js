import React from "react";
import { View, Text, Image } from "react-native";
import { Icon } from "native-base";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default function renderItem(item) {
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "#FFF",
        marginBottom: 10,
      }}
    >
      <View style={{ flexDirection: "row", margin: 5 }}>
        <Image
          source={{ uri: item.avatar }}
          style={{ width: 50, height: 50, borderRadius: 65 }}
        />
        <View style={{ flexDirection: "row", marginLeft: 10 }}>
          <View style={{ flexDirection: "column" }}>
            <Text
              style={{ fontSize: 16, fontWeight: "bold", color: "#7d7885" }}
            >
              {item.name}
            </Text>
            <Text style={{ fontSize: 14, color: "#7d7885" }}>
              {item.status}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginLeft: wp("30%"),
              alignItems: "center",
            }}
          >
            <Icon type="AntDesign" name="clockcircleo" size={10} />
            <Text style={{ fontSize: 16, marginLeft: 5 }}>{item.time}</Text>
          </View>
        </View>
      </View>
      
      <View>
      <Image
        style={{
          borderRadius: 3,
          width: "95%",
          height: hp("30%"),
          alignSelf:'center',
        }}
        source={{ uri: item.image }}
      />
      <Text style={{color:'#FFF', fontWeight:'bold', fontSize:18, position:'absolute', marginTop:hp("25%"), marginLeft:wp("5%")}}>{item.title}</Text>
      <View style={{flexDirection:'row', position:'absolute', alignItems:'center', marginTop:hp("25%"), marginLeft:wp("75%")}}>
      <Text style={{color:'#FFF', fontWeight:'bold', fontSize:18}}>{item.price}</Text>
      <Image
            style={{width:20, height: 20, marginLeft: 5}}
            source={require("../assets/feed/h7.png")}
            resizeMode="contain"
          />
      </View>
      
      </View>

      <View style={{ flexDirection: "row", margin: 10 }}>
        <Image
          source={require("../assets/feed/h4.png")}
          resizeMode="contain"
          style={{ width: 25, height: 25 }}
        />

        <Text
          style={{
            fontWeight: "bold",
            fontSize: 15,
            color: "#e44549",
            marginLeft: 5,
          }}
        >
          2K
        </Text>

        <View style={{ marginLeft: wp("25%"), flexDirection: "row" }}>
          <Image
            source={require("../assets/feed/h5.png")}
            resizeMode="contain"
            style={{ width: 25, height: 25 }}
          />

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              color: "#7d7885",
              marginLeft: 5,
            }}
          >
            98
          </Text>
        </View>

        <View style={{ marginLeft: wp("25%"), flexDirection: "row" }}>
          <Image
            source={require("../assets/feed/h6.png")}
            resizeMode="contain"
            style={{ width: 25, height: 25 }}
          />

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 15,
              color: "#7d7885",
              marginLeft: 5,
            }}
          >
            69
          </Text>
        </View>
      </View>
    </View>
  );
}
