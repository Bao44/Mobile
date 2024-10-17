import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import data from "../data/data";

const Screen3 = ({ navigation }) => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  
  const renderItem = ({ item }) => {
    return (
      <View>
        <Image source={item.image} style={{ width: 200, height: 200 }} />
        <View>
          <Text>${item.price}</Text>
          <Text>{item.description}</Text>
        </View>
      </View>
    )
  };

  return (
    <View style={{ paddingVertical: 40 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Screen2")}
        style={styles.button}
      >
        <AntDesign name="left" size={26} color="gray" />
      </TouchableOpacity>
      <Text style={styles.textHeader}>My Basket</Text>
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.07)",
    marginHorizontal: 20,
  },
  textHeader: {
    fontSize: 36,
    color: "#00CD66",
    marginHorizontal: 20,
    marginVertical: 20,
  },
});
