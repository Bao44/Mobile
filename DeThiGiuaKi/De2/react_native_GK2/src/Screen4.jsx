import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import productsData from "../productsData";

const Screen4 = ({ navigation }) => {
  const [selectedProduct, setSelectedProduct] = useState(productsData[0]);

  return (
    <ScrollView style={{ paddingVertical: 40, paddingHorizontal: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Pressable
          onPress={() => navigation.navigate("Screen1")}
          style={styles.button}
        >
          <AntDesign name="left" size={26} color="gray" />
        </Pressable>
        <Text style={styles.textProductName}>Product name</Text>
      </View>
      {/* Images */}
      <View>
        <View style={styles.viewImageCenter}>
          <Image source={selectedProduct.image} style={styles.imageCenter} />
        </View>
        {/* View row images */}
        <View style={styles.rowImages}>
          {productsData.map((product) => (
            <TouchableOpacity
              key={product.id}
              style={styles.viewImageRow}
              onPress={() => setSelectedProduct(product)} // Update the selected product
            >
              <Image source={product.image} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/* Price */}
      <View style={styles.viewPrice}>
        <Text style={styles.price}>${selectedProduct.price}</Text>
        <View style={styles.viewBuyPrice}>
          <Text style={styles.textBuy}>Buy 1 get 1</Text>
        </View>
      </View>
      {/* Name product */}
      <View style={styles.viewNameProduct}>
        <View>
          <Text style={styles.textName}>{selectedProduct.name}</Text>
          <Text style={styles.textDescription}>
            Occaecat est desrrunt tempor offici
          </Text>
        </View>
        <View style={styles.viewRating}>
          <Image source={require("../assets/Data/Rating 3.png")} />
          <Text style={styles.textRating}>{selectedProduct.rating}</Text>
        </View>
      </View>
      {/* Size */}
      <View>
        
      </View>
    </ScrollView>
  );
};

export default Screen4;

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.07)",
  },
  textProductName: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20,
    color: "#696969",
  },
  viewImageCenter: {
    marginVertical: 20,
    backgroundColor: "rgba(0,0,0,0.07)",
    borderRadius: 20,
  },
  imageCenter: {
    width: 280,
    height: 280,
    alignSelf: "center",
  },
  rowImages: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  viewImageRow: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 10,
    padding: 10,
  },
  viewPrice: {
    flexDirection: "row",
    alignItems: "center",
    width: "65%",
    justifyContent: "space-between",
  },
  price: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#00BDD6",
  },
  viewBuyPrice: {
    backgroundColor: "#FFDAB9",
    paddingVertical: 5,
    paddingHorizontal: 12,
    borderRadius: 15,
  },
  textBuy: {
    fontSize: 16,
    color: "#FF6347",
  },
  viewNameProduct: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 20,
  },
  textName: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#585858",
  },
  textDescription: {
    fontSize: 18,
    color: "gray",
    marginVertical: 10
  },
  viewRating: {
    flexDirection: "row",
    alignItems: "center",
  },
  textRating: {
    fontSize: 20,
    color: "#585858",
    fontWeight: "bold",
    marginLeft: 10,
  },
});
