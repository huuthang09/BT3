import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text } from "native-base";
import { StyleSheet, Image, Alert } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Navigator from "./homeStack";
const Drawer = createDrawerNavigator();

export default function RootStack() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Feed"
        drawerContent={(props) => CustomDrawerContent(props)}
        options
      >
        <Drawer.Screen name="Feed" component={Navigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
function CustomDrawerContent(props) {
  return (
    <SafeAreaView>
      <View
        style={{
          height: hp("35%"),
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#ff6c70",
        }}
      >
        <Image
          style={{ height: 120, width: 120 }}
          source={require("../assets/menu/h12.png")}
        />
        <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
          Christine Turner
        </Text>
        <Text style={{fontSize: 13,
    fontWeight: "bold",
    color: "#ffc4c6"}}>Fashion Designer</Text>
        <View />
        <View style={{flexDirection: "row",}}>
          <Image
            style={styles.icon}
            source={require("../assets/menu/h8.png")}
            resizeMode="contain"
          />
          <Image
            style={styles.icon}
            source={require("../assets/menu/h7.png")}
            resizeMode="contain"
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.touch}
        onPress={() => props.navigation.navigate('Feed')}>
      
        <Image
          style={styles.icon}
          source={require("../assets/menu/h9.png")}
          resizeMode="contain"
        />
        <Text style={styles.txtitem}>Feed</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touch}
        onPress={() => Alert.alert("Events")}
      >
        <Image
          style={styles.icon}
          source={require("../assets/menu/h5.png")}
          resizeMode="contain"
        />
        <Text style={styles.txtitem}>Events</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touch}
        onPress={() => Alert.alert("Post")}>
        <Image
          style={styles.icon}
          source={require("../assets/menu/h4.png")}
          resizeMode="contain"
        />
        <Text style={styles.txtitem}>Post</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touch}
        onPress={() => Alert.alert("Notifications")}
      >
        <Image
          style={styles.icon}
          source={require("../assets/menu/h3.png")}
          resizeMode="contain"
        />
        <Text style={styles.txtitem}>Notifications</Text>

        <View style={{ paddingLeft: wp("25%") }}>
          <Image
            style={styles.icon}
            source={require("../assets/menu/three.png")}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touch}
        onPress={() => Alert.alert("Account")}
      >
        <Image
          style={styles.icon}
          source={require("../assets/menu/h2.png")}
          resizeMode="contain"
        />
        <Text style={styles.txtitem}>Account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.touch}
        onPress={() => Alert.alert("Logout")}
      >
        <Image
          style={styles.icon}
          source={require("../assets/menu/hi1.png")}
          resizeMode="contain"
        />
        <Text style={styles.txtitem}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  

  icon: {
    margin: 5,
    width: 25,
    height: 25,
  },

  touch: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  txtitem: {
    fontSize: 16,
    marginLeft: 10,
    color: "#7d7885",
    fontWeight: "bold",
  },
});
