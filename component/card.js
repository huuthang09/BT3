import React from "react";
import { View, Text, Alert } from "react-native";
import { Icon } from "native-base";
import { Chip } from "react-native-paper";
function Card(props) {
  return (
    <View style={{ margin: 5 }}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ color: "#7d7885", fontWeight: "bold" }}>
          {props.header}
        </Text>
        <Icon
          type="Feather"
          name="more-horizontal"
          style={{ color: "#9a999b" }}
        />
      </View>
      <View style={{ flexDirection: "row", flexWrap:'wrap' }}>
        <Chip
          style={{ margin: 5 }}
          icon="close"
          onPress={() => Alert.alert(props.header1)}
        >
          {props.header1}
        </Chip>
        <Chip
          style={{ margin: 5 }}
          icon="close"
          onPress={() => Alert.alert(props.header2)}
        >
          {props.header2}
        </Chip>
        <Chip
          style={{ margin: 5 }}
          icon="close"
          onPress={() => Alert.alert(props.header3)}
        >
          {props.header3}
        </Chip>

        <Chip
          style={{ margin: 5, display: props.header4!=null?'flex':'none' }}
          icon="close"
          onPress={() => Alert.alert(props.header4)}
        >
          {props.header4}
        </Chip>
      </View>
    </View>
  );
}

export default Card;
