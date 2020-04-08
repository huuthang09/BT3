import React from "react";
import { View, Text} from "react-native";

import DetailProduct from "../shared/detailproduct";

function Product(props) {
  return (
    <View>
      <Text style={{color: '#7d7885', fontWeight: "bold", margin: 5 }}>PRODUCTS FOR</Text>
      <View style={{flexDirection:'row'}}>
        <DetailProduct 
        imagec={require("../assets/filter/men.png" )}
        image={require("../assets/filter/mende.png" )}
        txt="Men" />
        <DetailProduct  
        imagec={require("../assets/filter/womencheck.png" )}
        image={require("../assets/filter/women.png" )}
        txt="Women" />
        <DetailProduct
          imagec={require("../assets/filter/bothcheck.png" )}
        image={require("../assets/filter/both.png" )}
          txt="Both"
        />
      </View>
    </View>
  );
}

export default Product;
