import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import productsData from "../productsData";

const Screen4 = ({ navigation }) => {
  const [selectedProduct, setSelectedProduct] = useState(productsData[0]);

  const [selectedSize, setSelectedSize] = useState(null); // State để lưu size được chọn

  const [count, setCount] = useState(1); // State để lưu số lượng sản phẩm

  const [total, setTotal] = useState(selectedProduct.price); // State để lưu tổng giá

  const handleSizeSelect = (size) => {
    setSelectedSize(size); // Cập nhật size khi được nhấn
  };

  const handleTogglePlus = () => {
    setCount((prevCount) => prevCount + 1);
    setTotal((prevTotal) => (count + 1) * selectedProduct.price);
  };

  const handleToggleMinus = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
      setTotal((prevTotal) => (count - 1) * selectedProduct.price);
    }
  };

  // useEffect để cập nhật lại tổng giá mỗi khi sản phẩm được chọn thay đổi
  useEffect(() => {
    // Mỗi khi sản phẩm mới được chọn, cập nhật lại giá và đặt lại số lượng về 1
    setCount(1); // Reset lại số lượng về 1
    setTotal(selectedProduct.price); // Đặt lại tổng giá bằng giá của sản phẩm mới
  }, [selectedProduct]);

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
              onPress={() => setSelectedProduct(product)} // Cập nhật sản phẩm đã chọn
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
        <Text style={styles.textTitleSize}>Size</Text>
        <View style={styles.viewSize}>
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <TouchableOpacity
              key={size}
              style={[
                styles.sizeBox,
                selectedSize === size && styles.selectedSizeBox, // Đổi màu khi size được chọn
              ]}
              onPress={() => handleSizeSelect(size)}
            >
              <Text
                style={[
                  styles.textSize,
                  selectedSize === size && styles.selectedTextSize, // Đổi màu văn bản khi được chọn
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      {/* choose quantity */}
      <View>
        <Text style={[styles.textTitleSize, { marginVertical: 10 }]}>
          Quantity
        </Text>
        <View style={styles.viewQuantity}>
          <View style={styles.viewClickQuantity}>
            <TouchableOpacity onPress={handleToggleMinus}>
              <FontAwesome name="minus-circle" size={40} color="#00BDD6" />
            </TouchableOpacity>
            <Text style={styles.quantity}>{count}</Text>
            <TouchableOpacity onPress={handleTogglePlus}>
              <FontAwesome name="plus-circle" size={40} color="#00BDD6" />
            </TouchableOpacity>
          </View>
          <View style={styles.viewTotal}>
            <Text style={styles.total}>Total</Text>
            <Text style={styles.totalPrice}>${total.toFixed(2)}</Text>
          </View>
        </View>
      </View>
      {/* Size guide, Reviews */}
      <>
        <View style={styles.viewSizeGuide}>
          <Text style={styles.textSizeGuide}>Size guide</Text>
          <AntDesign
            name="right"
            size={22}
            color="gray"
            style={styles.textSizeGuideIconRight}
          />
        </View>
        <View style={styles.viewSizeGuide}>
          <Text style={styles.textSizeGuide}>Reviews (99)</Text>
          <AntDesign
            name="right"
            size={22}
            color="gray"
            style={styles.textSizeGuideIconRight}
          />
        </View>
      </>
      {/* Button Add */}
      <TouchableOpacity style={styles.buttonAdd}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15,
          }}
        >
          <AntDesign name="shoppingcart" size={24} color="white" />
          <Text style={styles.textButton}>Add to Cart</Text>
        </View>
      </TouchableOpacity>
      <View style={{ paddingBottom: 100 }}></View>
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
    marginVertical: 5,
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
  textTitleSize: {
    fontSize: 22,
    color: "#585858",
  },
  viewSize: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  sizeBox: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
  },
  selectedSizeBox: {
    backgroundColor: "#00BDD6", // Màu nền khi size được chọn
  },
  textSize: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  selectedTextSize: {
    color: "white", // Màu văn bản khi size được chọn
  },
  viewQuantity: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
    paddingBottom: 25,
  },
  viewClickQuantity: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantity: {
    fontSize: 28,
    marginHorizontal: 20,
    width: 35,
    color: "#585858",
    textAlign: "center",
  },
  viewTotal: {
    flexDirection: "row",
    alignItems: "center",
  },
  total: {
    fontSize: 20,
    color: "#585858",
  },
  totalPrice: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#585858",
    marginLeft: 10,
  },
  viewSizeGuide: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingBottom: 25,
  },
  textSizeGuide: {
    fontSize: 20,
    color: "#585858",
    justifyContent: "center",
    marginTop: 20,
    fontWeight: "bold",
  },
  textSizeGuideIconRight: {
    fontSize: 20,
    color: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    marginTop: 24,
  },
  buttonAdd: {
    backgroundColor: "#00BDD6",
    width: 400,
    height: 60,
    borderRadius: 10,
    marginTop: 40,
    alignSelf: "center",
  },
  textButton: {
    color: "white",
    fontSize: 22,
    marginLeft: 10,
  },
});
