import React from 'react';
import {View, Text} from 'react-native';

import DetailColor from '../shared/detailColor';
export default function Color(props) {
  
  return (
    <View style={{margin:5}}>
      
        <Text style={{color: '#7d7885',fontWeight: "bold"}}>COLORS</Text>
    
      <View style={{flexDirection:'row'}}>
        <DetailColor color="#1bb869" button="button1" />
        <DetailColor color="#ea97fb" button="button2" />
        <DetailColor color="#f6b63a" button="button3" />
        <DetailColor color="#ef8642" button="button4" />
        <DetailColor color="#e44549" button="button5" />
        <DetailColor color="#bf4e79" button="button6" />
        <DetailColor color="#70bcdb" button="button7" />
      </View>
    </View>
  );
}
