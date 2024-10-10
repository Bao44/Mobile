import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Screen1 = ({ navigation }) => {
  return (
    <View style={{ alignItems: "center", paddingVertical: 50 }}>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginVertical: 50 }}>
        Welcome to Cafe world
      </Text>
      <Image
        source={require("../assets/Image.png")}
        style={{
          width: 350,
          height: 100,
          marginVertical: 30,
          borderRadius: 10,
        }}
      />
      <Image
        source={require("../assets/Image (1).png")}
        style={{
          width: 350,
          height: 100,
          marginVertical: 30,
          borderRadius: 10,
        }}
      />
      <Image
        source={require("../assets/Image (3).png")}
        style={{ marginVertical: 30, borderRadius: 10 }}
      />
      <TouchableOpacity
        onPress={() => navigation.navigate("Screen2")}
        style={styles.button}
      >
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          GET STARTED
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00BDD6",
    paddingHorizontal: 130,
    paddingVertical: 25,
    borderRadius: 10,
    marginTop: 150,
  },
});
