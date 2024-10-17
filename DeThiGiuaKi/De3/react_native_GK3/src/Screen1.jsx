import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Screen1 = ({ navigation }) => {
  return (
    <View style={{ paddingVertical: 30 }}>
      <Text style={styles.textHeader}>Order your favorite!</Text>
      <Image
        source={require("../assets/data/soda.png")}
        style={styles.imageDrink}
      />
      <Image
        source={require("../assets/data/containerVegetable.jpg")}
        style={styles.imageVegetable}
      />
      <Image
        source={require("../assets/data/cua.jpg")}
        style={styles.imageFood}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Screen2")}
      >
        <Text style={styles.textButton}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 36,
    color: "#00CD66",
    marginVertical: 30,
    marginLeft: 20,
  },
  imageDrink: {
    width: 200,
    height: 200,
    position: "absolute",
    right: 0,
    top: 130,
  },
  imageVegetable: {
    width: 260,
    height: 200,
    position: "absolute",
    left: 0,
    top: 300,
    left: 20,
  },
  imageFood: {
    width: 260,
    height: 200,
    position: "absolute",
    right: 20,
    top: 530,
  },
  button: {
    backgroundColor: "#00EE76",
    paddingVertical: 14,
    marginTop: 700,
    marginHorizontal: 120,
    alignItems: "center",
    borderRadius: 50,
  },
  textButton: {
    color: "#fff",
    fontSize: 24,
  },
});
