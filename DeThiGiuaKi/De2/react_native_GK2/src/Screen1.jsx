import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Screen1 = ({ navigation }) => {
  return (
    <View style={{ paddingVertical: 50 }}>
      <Image
        source={require("../assets/Data/Container 17.png")}
        style={{ alignSelf: "center" }}
      />
      <Text style={styles.textHeader}>Boost Productivity</Text>
      <Text style={styles.textDesciption}>Simplify tasks, boost productivity</Text>
      <TouchableOpacity style={styles.buttonSignUp} onPress={() => navigation.navigate("Screen2")}>
        <Text style={styles.textButton}>Sign up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonLogin} onPress={() => navigation.navigate("Screen3")}>
        <Text style={[styles.textButton, {color: 'gray'}]}>Login</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <View style={styles.dots}></View>
        <View
          style={[
            styles.dots,
            { backgroundColor: "#00BDD6", marginHorizontal: 10 },
          ]}
        ></View>
        <View style={styles.dots}></View>
      </View>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  dots: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#00BDD6",
    borderRadius: 50,
  },
  textHeader: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    marginLeft: 45,
  }, 
  textDesciption: {
    fontSize: 20,
    color: 'gray',
    marginTop: 20,
    marginLeft: 45,
  },
  buttonSignUp: {
    backgroundColor: "#00BDD6",
    width: 400,
    height: 60,
    borderRadius: 10,
    marginTop: 40,
    alignSelf: 'center'
  },
  buttonLogin: {
    width: 400,
    height: 60,
    marginTop: 20,
    alignSelf: 'center',
    marginBottom: 20,
  },
  textButton: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    marginTop: 15,
  },
});
