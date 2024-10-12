import {
  Button,
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { getProducts } from "../api_ex3";
import { useFocusEffect } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";

const Screen3 = ({ navigation }) => {
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState([]);

  const handleAdd = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handlePre = () => {
    setCount((prevCount) => prevCount - 1);
  };

  useFocusEffect(
    useCallback(() => {
      const fetchProduct = async () => {
        try {
          const data = await getProducts();
          setProduct(data);
        } catch (error) {
          console.error("Failed to fetch product:", error);
        }
      };
      fetchProduct();
    }, [])
  );

  const renderDrinks = ({ item }) => {
    return (
      <View style={{ marginBottom: 20 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 10,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Image
              source={{ uri: item.image }}
              style={{ width: 80, height: 80, borderRadius: 10 }}
            />
            <View style={{ justifyContent: "space-around", marginLeft: 30 }}>
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                {item.name}
              </Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Feather name="play" size={24} color="#ccc" />
                <Text style={{ color: "gray" }}>${item.price}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginRight: 15,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "green",
                borderRadius: 5,
                padding: 2,
              }}
              onPress={handlePre}
            >
              <AntDesign name="minus" size={24} color="white" />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
                paddingHorizontal: 20,
              }}
            >
              {count}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "green",
                borderRadius: 5,
                padding: 2,
              }}
              onPress={handleAdd}
            >
              <AntDesign name="plus" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={{ paddingVertical: 50 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Pressable
          onPress={() => navigation.navigate("Screen2")}
          style={styles.button}
        >
          <AntDesign name="left" size={26} color="gray" />
        </Pressable>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Drinks</Text>
        <AntDesign name="search1" size={30} color="green" />
      </View>
      <FlatList
        data={product}
        keyExtractor={(item) => item.id}
        renderItem={renderDrinks}
        style={{ padding: 15 }}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#F1B000",
          padding: 18,
          borderRadius: 10,
          marginHorizontal: 20,
        }}
        onPress={() => navigation.navigate("Screen4")}
      >
        <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
          GO TO CART
        </Text>
      </TouchableOpacity>
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
  },
});
