import React from 'react';
import {View} from 'react-native';
import Card from '../component/card';
import Product from '../component/productFor';
import Price from '../component/priceRange';
import Color from '../component/colorFilter';
export default function Filters(props) {
  return (
    <View style={{flex:1}}>
      <Product />
      <Card
        header={'BRANDS'}
        header1={'Parfois'}
        header2={'Adidas'}
        header3={'Imara'}
        header4={'Fyxed'}

      />
      <Card
        header={'CATEGORIES'}
        header1={'Tops'}
        header2={'T-Shirts'}
        header3={'Tunics'}
      />
      <Price />
      <Color />
    </View>
  );
}

