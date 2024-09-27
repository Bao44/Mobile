import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Screen01 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Screen02")}
        style={styles.btn}
      >
        <Text style={styles.textBtn}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen01;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#E94141",
    padding: 20,
    borderRadius: 50,
    width: 370,
  },
  textBtn: {
    fontSize: 26,
    color: "white",
    textAlign: "center",
  },
});
