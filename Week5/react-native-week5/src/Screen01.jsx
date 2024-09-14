import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import { useRoute } from "@react-navigation/native";

const Screen01 = ({ navigation }) => {
  const router = useRoute();
  const { selectedColor } = router.params || { selectedColor: "blue" }; // Lấy giá trị màu hoặc mặc định là màu xanh

  const images = {
    blue: require("../assets/vs_blue.png"),
    red: require("../assets/vs_red.png"),
    black: require("../assets/vs_black.png"),
    silver: require("../assets/vs_silver.png"),
  };

  return (
    <View style={{ paddingTop: 40 }}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={images[selectedColor]}/>
      </View>

      <View>
        <Text style={styles.textHeader}>
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
      </View>

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 10,
          }}
        >
          <Image
            source={require("../assets/star.png")}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={require("../assets/star.png")}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={require("../assets/star.png")}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={require("../assets/star.png")}
            style={{ width: 40, height: 40 }}
          />
          <Image
            source={require("../assets/star.png")}
            style={{ width: 40, height: 40 }}
          />
        </View>
        <Text style={{ fontSize: 20, paddingTop: 5 }}>(Xem 828 đánh giá)</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          paddingVertical: 15,
          paddingHorizontal: 18,
        }}
      >
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>1.790.000 đ</Text>
        <Text
          style={{
            textDecorationLine: "line-through",
            fontSize: 22,
            color: "#00000094",
            paddingLeft: 50,
            paddingTop: 3,
          }}
        >
          1.790.000 đ
        </Text>
      </View>
      <View style={{ flexDirection: "row", paddingHorizontal: 18 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "red",
            paddingRight: 10,
          }}
        >
          Ở ĐÂU RẺ HƠN HOÀN TIỀN
        </Text>
        <AntDesign name="questioncircleo" size={28} color="black" />
      </View>

      <View style={{ paddingVertical: 30, paddingHorizontal: 20 }}>
        <TouchableOpacity
          style={styles.buttonOptions}
          onPress={() => navigation.navigate("Screen02")}
        >
          <Text style={{ fontSize: 18, marginHorizontal: 90 }}>
            4 MÀU-CHỌN MÀU
          </Text>
          <AntDesign name="right" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={{ paddingVertical: 30, paddingHorizontal: 20 }}>
        <TouchableOpacity style={styles.buttonBuy}>
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
              textAlign: "center",
              color: "white",
            }}
          >
            CHỌN MUA
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen01;

const styles = StyleSheet.create({
  textHeader: {
    textAlign: "center",
    fontSize: 20,
    paddingVertical: 10,
  },
  buttonOptions: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 15,
    height: 50,
  },
  buttonBuy: {
    backgroundColor: "red",
    justifyContent: "center",
    borderRadius: 15,
    height: 55,
  },
});
