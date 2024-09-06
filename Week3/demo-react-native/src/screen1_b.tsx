import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Screen1_b = () => {
  return (
    <View>
      <View style={[styles.header]}>
        <MaterialIcons name="lock" size={200} color="black" />
        <Text style={styles.header_text}>FORGET PASSWORD</Text>
      </View>
      <View style={[styles.nav]}>
        <Text style={styles.text_desc}>
          Procide your account's email for which you want to reset your password
        </Text>
      </View>
      <View style={[styles.nav]}>
        <View style={styles.input_email}>
          <MaterialCommunityIcons
            name="email-outline"
            size={30}
            color="black"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#000"
          />
        </View>
      </View>
      <View style={[styles.nav]}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btn_text}>NEXT</Text>
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
  header_text: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginTop: 30,
    width: 200,
    textAlign: "center",
  },
  text_desc: {
    fontSize: 20,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
  input_email: {
    display: "flex",
    flexDirection: "row",
  },
  icon: {
    zIndex: 1,
    position: "absolute",
    padding: 10,
    marginLeft: 5,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    backgroundColor: "#ccc",
    paddingHorizontal: 10,
    color: "black",
    width: 300,
    fontSize: 20,
    paddingLeft: 60,
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

export default Screen1_b;
