import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { data } from "../data/data";

const Screen3 = ({ navigation }) => {
  const [quantities, setQuantities] = useState(
    data.reduce((acc, item) => {
      acc[item.id] = 0;
      return acc;
    }, {})
  );

  const handleIncrease = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const handleDecrease = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] > 0 ? prevQuantities[id] - 1 : 0,
    }));
  };

  const calculateTotal = () => {
    return data.reduce((total, item) => {
      return total + item.price * quantities[item.id];
    }, 0);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.viewItem}>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={item.image}
            style={{ width: 140, height: 140, borderRadius: 10 }}
          />
          <View style={{ marginLeft: 10 }}>
            <Text style={styles.price}>$ {item.price}</Text>
            <Text style={styles.des}>{item.description}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.rating}>{item.rating}</Text>
              <Image
                source={require("../assets/data/Rating 3.png")}
                style={{ width: 30, height: 30 }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContentL: "center",
            alignItems: "center",
            marginRight: 10,
          }}
        >
          <TouchableOpacity
            style={styles.buttonPlusMinus}
            onPress={() => handleDecrease(item.id)}
          >
            <AntDesign name="minus" size={24} color="white" />
          </TouchableOpacity>
          <Text
            style={{
              width: 40,
              textAlign: "center",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {quantities[item.id]}
          </Text>
          <TouchableOpacity
            style={styles.buttonPlusMinus}
            onPress={() => handleIncrease(item.id)}
          >
            <AntDesign name="plus" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{ paddingVertical: 40, marginBottom: 220 }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Screen2")}
        style={styles.button}
      >
        <AntDesign name="left" size={26} color="gray" />
      </TouchableOpacity>
      <Text style={styles.textHeader}>My Basket</Text>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 20,
            marginVertical: 15,
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#9932CC" }}>
            Total:{" "}
          </Text>
          <Text style={{ fontSize: 30, fontWeight: "bold", color: "#9932CC" }}>
            $ {calculateTotal().toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#00CD66",
            borderRadius: 50,
            marginHorizontal: 20,
            paddingVertical: 14,
          }}
        >
          <Text style={{ textAlign: "center", color: "white", fontSize: 20 }}>
            Payment
          </Text>
        </TouchableOpacity>
      </View>
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
  buttonPlusMinus: {
    backgroundColor: "green",
    borderRadius: 50,
    padding: 5,
  },
  viewItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    marginVertical: 10,
    borderWidth: 0.2,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 2,
  },
  price: {
    marginTop: 5,
    fontSize: 30,
    color: "green",
  },
  des: {
    fontSize: 18,
    color: "gray",
    paddingVertical: 5,
  },
  rating: {
    fontSize: 24,
    color: "red",
  },
});
