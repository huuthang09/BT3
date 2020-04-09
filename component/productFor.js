import React, { useState } from "react";
import { View, Text} from "react-native";

import DetailProduct from "../shared/detailproduct";
import { TouchableOpacity } from "react-native-gesture-handler";

export function Product(props) {
  const [women, setwomen] = useState({
    womenLike: false
  });

  const toggleWomen = () => {
    setboth({ bothLike: false })
    setmen({ menLike: false })
    setwomen({ womenLike: !women.womenLike })
  };

  const [men, setmen] = useState({
    menLike: false
  });

  const toggleMen = () => {
    setboth({ bothLike: false })
    setmen({ menLike: !men.menLike })
    setwomen({ womenLike: false })
  };
  const [both, setboth] = useState({
    bothLike: false
  });

  const toggleBoth = () => {
    setboth({ bothLike: !both.bothLike })
    setmen({ menLike: false })
    setwomen({ womenLike: false })
  };

  return (
    <View>
      <Text style={{ color: "#7d7885", fontWeight: "bold", margin: 5 }}>
        PRODUCTS FOR
      </Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity onPress={toggleMen}>
          <DetailProduct
            image={
              men.menLike
                ? require("../assets/filter/men.png")
                : require("../assets/filter/mende.png")
            }
            txtColor={men.menLike? "#e44549" : "#bebac2"}
            txt="Men"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleWomen}>
          <DetailProduct
            image={
              women.womenLike
                ? require("../assets/filter/womencheck.png")
                : require("../assets/filter/women.png")
            }
            txtColor={women.womenLike ? "#e44549" : "#bebac2"}
            txt="Women"
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={toggleBoth}>
          <DetailProduct
            image={
              both.bothLike
                ? require("../assets/filter/bothcheck.png")
                : require("../assets/filter/both.png")
            }
            txtColor={both.bothLike? "#e44549" : "#bebac2"}
            txt="Both"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Product;
