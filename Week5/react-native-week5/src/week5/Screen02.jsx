import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const Screen02 = ({ navigation }) => {
  const images = {
    blue: require("../../assets/vs_blue.png"),
    red: require("../../assets/vs_red.png"),
    black: require("../../assets/vs_black.png"),
    silver: require("../../assets/vs_silver.png"),
  };

  const [color, setColor] = useState("blue");
  const [textColor, setTextColor] = useState("xanh dương");
  const navigator = useNavigation();

  function handleSelectColor() {
    navigation.navigate('Screen01', { selectedColor: color });
  }

  function changeColorBlue() {
    setColor("blue");
    setTextColor("xanh dương");
  }

  function changeColorRed() {
    setColor("red");
    setTextColor("đỏ");
  }

  function changeColorBlack() {
    setColor("black");
    setTextColor("đen");
  }

  function changeColorSilver() {
    setColor("silver");
    setTextColor("trắng xanh");
  }

  return (
    <View style={{ paddingTop: 40 }}>
      <View
        style={{
          flexDirection: "row",
          paddingHorizontal: 15,
          paddingVertical: 15,
          backgroundColor: "white",
        }}
      >
        <Image source={images[color]} style={{ width: 120, height: 150 }} />
        <View
          style={{
            flex: 1,
            justifyContent: "space-around",
            paddingHorizontal: 12,
          }}
        >
          <Text style={styles.textHeader}>
            Điện Thoại Vsmart Joy 3 Hàng chính hãng
          </Text>
          <Text style={styles.textHeader}>
            Màu: <Text style={styles.textHeader_Font}>{textColor}</Text>
          </Text>
          <Text style={styles.textHeader}>
            Cung cấp bởi:{" "}
            <Text style={styles.textHeader_Font}>Tiki Tradding</Text>
          </Text>
          <Text style={[styles.textHeader, { fontWeight: "bold" }]}>
            1.790.000 đ
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 22, padding: 15 }}>
          Chọn một màu bên dưới:
        </Text>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity
            onPress={changeColorSilver}
            style={{
              width: 105,
              height: 100,
              backgroundColor: "#C5F1FB",
              marginVertical: 10,
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={changeColorRed}
            style={{
              width: 105,
              height: 100,
              backgroundColor: "#F30D0D",
              marginVertical: 10,
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={changeColorBlack}
            style={{
              width: 105,
              height: 100,
              backgroundColor: "black",
              marginVertical: 10,
            }}
          ></TouchableOpacity>
          <TouchableOpacity
            onPress={changeColorBlue}
            style={{
              width: 105,
              height: 100,
              backgroundColor: "#234896",
              marginVertical: 10,
            }}
          ></TouchableOpacity>
        </View>
      </View>
      <View>
        <TouchableOpacity onPress={handleSelectColor} style={styles.button}>
          <Text style={{ fontSize: 28, fontWeight: "bold", color: "white" }}>
            XONG
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen02;

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 19,
  },
  textHeader_Font: {
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#1952E2",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    margin: 15,
    marginTop: 45,
    borderRadius: 15,
  },
});
