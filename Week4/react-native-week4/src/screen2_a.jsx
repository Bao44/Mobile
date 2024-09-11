import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";

const Screen2_a = () => {
  return (
    <View style={styles.container}>
      {/* REGISTER */}
      <View
        style={[
          {
            flex: 2,
            alignItems: "center",
            flexDirection: "row",
            marginRight: 200,
          },
        ]}
      >
        <Text style={{ fontSize: 50, fontWeight: "bold" }}>LOGIN</Text>
      </View>
      {/* Input */}
      <View
        style={[
          { flex: 1, justifyContent: "space-around", alignItems: "center" },
        ]}
      >
        <View style={styles.viewInputIcon}>
          <FontAwesome name="user" size={30} color="black" />
          <TextInput placeholder="Name" style={{ fontSize: 18, flex: 1, paddingLeft: 15}} />
        </View>
        <View style={styles.viewInputIcon}>
          <Fontisto name="locked" size={30} color="black" />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={{ fontSize: 18, flex: 1 , paddingLeft: 15 }}
          />
          <AntDesign name="eye" size={30} color="black" />
        </View>
      </View>
      {/* Button */}
      <View
        style={[{ flex: 2, alignItems: "center", justifyContent: "center" }]}
      >
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontWeight: "bold", fontSize: 25, color: "white" }}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text}>CTEATE ACCOUNT</Text>
        </View>
      </View>
    </View>
  );
};

export default Screen2_a;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewInputIcon: {
    height: 50,
    width: 360,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.2,
    paddingHorizontal: 18,
    flexDirection: "row",
  },
  button: {
    height: 55,
    width: 360,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  text: {
    textAlign: "center",
    marginTop: 18,
    fontSize: 20,
    fontWeight: "bold",
  },
});
