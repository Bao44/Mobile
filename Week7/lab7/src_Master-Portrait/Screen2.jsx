import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const Screen2 = ({ navigation, route }) => {
  const { item } = route.params;
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(item.price);

  const handleAdd = () => {
    setCount((prevCount) => prevCount + 1);
    setTotal((prevTotal) => (count + 1) * item.price);
  };

  const handlePre = () => {
    if (count > 1) {
      setCount((prevCount) => prevCount - 1);
      setTotal((prevTotal) => (count - 1) * item.price);
    }
  };

  

  return (
    <View style={{ padding: 20 }}>
      <Image
        source={{ uri: item.image }}
        style={{ width: 400, height: 400, marginTop: 25 }}
      />
      <Text style={{ fontSize: 26, fontWeight: "bold", marginVertical: 15 }}>
        {item.name}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 30,
          marginHorizontal: 15,
        }}
      >
        <Text style={{ color: "#0000008A", fontSize: 18, fontWeight: "bold" }}>
          {item.description}
        </Text>
        <Text style={{ fontSize: 25, fontWeight: "bold" }}>{total}</Text>
      </View>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginBottom: 10 }}
      >
        <AntDesign name="clockcircleo" size={26} color="black" />
        <Text
          style={{
            color: "#0000008A",
            fontSize: 18,
            fontWeight: "bold",
            marginLeft: 15,
          }}
        >
          Delivery in
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 15,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>30 min</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: 120,
          }}
        >
          <TouchableOpacity
            style={{ backgroundColor: "#F1B000", borderRadius: 5, padding: 2 }}
            onPress={handlePre}
          >
            <AntDesign name="minus" size={24} color="white" />
          </TouchableOpacity>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>{count}</Text>
          <TouchableOpacity
            style={{ backgroundColor: "#F1B000", borderRadius: 5, padding: 2 }}
            onPress={handleAdd}
          >
            <AntDesign name="plus" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ marginVertical: 15, fontSize: 24, fontWeight: "bold" }}>
        Restaurants info
      </Text>
      <Text style={{ fontSize: 18 }}>
        Order a Large Pizza but the size is the equivalent of a medium/small
        from other places at the same price range.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Screen1")}
        style={{
          backgroundColor: "#F1B000",
          padding: 20,
          borderRadius: 8,
          marginTop: 100,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 26,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Add to cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({});
