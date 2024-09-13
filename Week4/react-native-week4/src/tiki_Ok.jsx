import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const Tiki_Ok = () => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(141.8);

  function inCrease() {
    setCount(count + 1);
    setPrice(price + 141.8);
  }
  function reduce() {
    setCount(count - 1);
    setPrice(price - 141.8);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.header}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Image source={require("../assets/book.png")} />
            <View style={styles.headerText}>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Nguyên hàm tích phân và ứng dụng
              </Text>
              <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                Cung cấp bởi Tiki Trading
              </Text>
              <Text style={{ fontSize: 22, fontWeight: "bold", color: "red" }}>
                {price.toFixed(3)} đ
              </Text>
              <Text style={styles.textLine}>141.000 đ</Text>
              <View>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.viewButton}>
                    <TouchableOpacity style={styles.button} onPress={reduce}>
                      <Text style={styles.textButton}>-</Text>
                    </TouchableOpacity>
                    <Text style={{ fontSize: 25 }}>{count}</Text>
                    <TouchableOpacity style={styles.button} onPress={inCrease}>
                      <Text style={styles.textButton}>+</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.viewTextBuy}>
                    <TouchableOpacity>
                      <Text style={{ color: "blue", fontSize: 24 }}>
                        Mua sau
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", paddingVertical: 25 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", paddingRight: 30 }}>
            Mã giảm giá đã lưu
          </Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 18, color: "blue" }}>Xem tại đây</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.view2button}>
            <TouchableOpacity style={styles.view2button_1}>
              <View
                style={{ backgroundColor: "#F2DD1B", width: 40, height: 20 }}
              ></View>
              <Text style={styles.text2button}>Mã giảm giá</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ backgroundColor: "#0A5EB7", width: 130, height: 60 }}
            >
              <Text style={styles.text2button_1}>Áp dụng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{ backgroundColor: "white", marginTop: 20, paddingVertical: 30 }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text style={{ fontWeight: "bold" }}>
            Bạn có phiếu quà tặng Tiki/Got it/Urbox?
          </Text>
          <TouchableOpacity>
            <Text style={{ fontWeight: "bold", color: "blue" }}>
              Nhập tại đây?
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{ backgroundColor: "white", marginTop: 20, paddingVertical: 20 }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 18,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Tạm tính</Text>

          <Text style={{ fontSize: 20, fontWeight: "bold", color: "red" }}>
            {price.toFixed(3)} đ
          </Text>
        </View>
      </View>

      <View style={styles.bottomView}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "gray" }}>
            Thành tiền
          </Text>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "red" }}>
            {price.toFixed(3)} đ
          </Text>
        </View>
        <TouchableOpacity style={styles.buttonFooter}>
          <Text style={styles.textButtonFooter}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Tiki_Ok;

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
    padding: 20,
  },
  headerText: {
    paddingHorizontal: 20,
  },
  textLine: {
    textDecorationLine: "line-through",
    fontSize: 18,
    color: "gray",
  },
  viewButton: {
    flexDirection: "row",
    width: 130,
    justifyContent: "space-around",
  },
  button: {
    backgroundColor: "#808080",
    width: 30,
    marginTop: 5,
  },
  textButton: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
  },
  viewTextBuy: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  view2button: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  view2button_1: {
    borderWidth: 1,
    width: 220,
    paddingVertical: 15,
    paddingHorizontal: 15,
    alignItems: "center",
    flexDirection: "row",
  },
  text2button: {
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: 15,
  },
  text2button_1: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingTop: 15,
  },
  bottomView: {
    position: "absolute",
    bottom: 0, // Dính sát phần dưới cùng của màn hình
    left: 0,
    right: 0,
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  buttonFooter: {
    backgroundColor: "#E53935",
    paddingVertical: 10,
    alignItems: "center",
  },
  textButtonFooter: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
});
