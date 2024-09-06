import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

const Screen1_c = () => {
  return (
    <View>
      <View style={[styles.header]}>
        <Text style={styles.header_code}>CODE</Text>
        <Text style={styles.header_text}>VERIFICATION</Text>
      </View>
      <View style={[styles.nav]}>
        <Text style={styles.text_desc}>
          Enter ontime password sent on ++849092605798
        </Text>
      </View>
      <View style={[styles.nav]}>
        <View style={styles.nav_input}>
          <View>
            <TextInput style={styles.input} placeholderTextColor="#000" />
          </View>
          <View>
            <TextInput style={styles.input} placeholderTextColor="#000" />
          </View>
          <View>
            <TextInput style={styles.input} placeholderTextColor="#000" />
          </View>
          <View>
            <TextInput style={styles.input} placeholderTextColor="#000" />
          </View>
          <View>
            <TextInput style={styles.input} placeholderTextColor="#000" />
          </View>
          <View>
            <TextInput style={styles.input} placeholderTextColor="#000" />
          </View>
        </View>
      </View>
      <View style={[styles.nav]}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btn_text}>VERIFY CODE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  nav: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  header_code: {
    fontSize: 75,
    fontWeight: "bold",
    color: "black",
    marginTop: 30,
    width: 200,
    textAlign: "center",
  },
  header_text: {
    fontSize: 23,
    fontWeight: "bold",
    color: "black",
    marginTop: 50,
    width: 200,
    textAlign: "center",
  },
  text_desc: {
    fontSize: 20,
    width: 290,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
  nav_input: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  input: {
    height: 60,
    borderColor: "black", // Màu viền
    borderWidth: 1, // Độ dày của viền
    backgroundColor: "white",
    paddingHorizontal: 10,
    color: "black",
    width: 60,
    fontSize: 20,
  },
  btn: {
    backgroundColor: "orange",
    width: 300,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 100,
  },
  btn_text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Screen1_c;
