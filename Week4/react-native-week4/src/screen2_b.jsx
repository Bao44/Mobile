import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Screen2_b = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", flex: 1, alignItems: "center" }}>
        <Image
          source={require("../assets/usb1.png")}
          style={{ width: 100, height: 100 }}
        />
        <Text style={styles.textHeader}>
          USB Bluetooth Music Receiver HJX-001-Biến loa thường thành lao
          Bluetooth
        </Text>
      </View>
      <View style={{ flex: 3, justifyContent: "space-around" }}>
        <View>
          <Text style={styles.textReview}>Cực kì hài lòng</Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Image
              source={require("../assets/star.png")}
              style={{ width: 60, height: 60 }}
            />
            <Image
              source={require("../assets/star.png")}
              style={{ width: 60, height: 60 }}
            />
            <Image
              source={require("../assets/star.png")}
              style={{ width: 60, height: 60 }}
            />
            <Image
              source={require("../assets/star.png")}
              style={{ width: 60, height: 60 }}
            />
            <Image
              source={require("../assets/star.png")}
              style={{ width: 60, height: 60 }}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.viewButtonAddImage}>
          <FontAwesome name="camera" size={45} color="black" />
          <Text style={{ fontSize: 22, fontWeight: "bold", paddingLeft: 12 }}>
            Thêm hình ảnh
          </Text>
        </TouchableOpacity>
        <TextInput
          multiline={true}
          numberOfLines={10}
          placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
          style={styles.textInput}
        />
        <TouchableOpacity style={styles.viewButton}>
          <Text style={{color:'white', fontSize: 25, fontWeight: 'bold'}}>Gửi</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen2_b;

const styles = StyleSheet.create({
  textHeader: {
    width: 280,
    fontSize: 18,
    fontWeight: "bold",
    paddingLeft: 15,
    paddingTop: 15,
  },
  textReview: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 15,
  },
  viewButtonAddImage: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "blue",
    width: 380,
    height: 80,
    borderRadius: 5,
  },
  textInput: {
    height: 200,
    textAlignVertical: "top",
    borderWidth: 1,
    padding: 15,
    fontSize: 24,
    width: 380,
  },
  viewButton: {
    backgroundColor: "#3b5998",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    width: 380,
    borderRadius: 5,
  },
});
