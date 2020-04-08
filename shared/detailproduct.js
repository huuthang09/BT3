import React, {useState} from 'react';
import {Text, TouchableOpacity, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function DetailProduct(props) {
  const [color, setcolor] = useState({like: false});
  const toggleLike = () => setcolor({like: !color.like});
  return (
    <TouchableOpacity
      style={{flexDirection:'row', marginLeft:wp("7%")}}
      onPress={toggleLike}>
      <Image
            style={{width:25, height:25}}
            source={color.like?props.imagec:props.image}
            resizeMode="contain"
          />
      <Text style={{fontSize:16, fontWeight:'bold', marginLeft:5,  color:color.like?'#e44549':"#bebac2"}}>{props.txt}</Text>
    </TouchableOpacity>
  );
}
