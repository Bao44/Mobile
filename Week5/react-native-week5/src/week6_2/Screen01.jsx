import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Screen01 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>
        A premium online store for sporter and their stylish choice
      </Text>
      <View style={styles.viewImage}>
        <Image source={require("../../assets/imagesWeek6/bike_blue.png")} />
      </View>
      <Text style={styles.textFooter}>POWER BIKE SHOP</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Screen02")} style={styles.btn}>
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
  textHeader: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
  },
  viewImage: {
    marginVertical: 20,
    paddingVertical: 65,
    backgroundColor: "#E941411A",
    padding: 50,
    borderRadius: 50,
  },
  textFooter: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    margin: 20,
    width: 200,
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
