import React from 'react';
import {StyleSheet, Image} from 'react-native';

function CustomMarker(props) {
  return (
    <Image
      style={styles.image}
      source={
        require('../assets/filter/oval.png')
      }
      resizeMode="contain"
    />
  );
}

const styles = StyleSheet.create({
  image: {
    height: 30,
    width: 30,
  },
});

export default CustomMarker;
