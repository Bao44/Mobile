import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";

const Screen4 = ({ route, navigation }) => {
  const { selectedProducts } = route.params;

  const renderOrder = ({ item }) => {
    return (
      <View style={{ marginBottom: 10 }}>
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
                borderRadius: 50,
                padding: 5,
              }}
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
              {item.count}
            </Text>
            <TouchableOpacity
              style={{
                backgroundColor: "green",
                borderRadius: 50,
                padding: 5,
              }}
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
          onPress={() => navigation.navigate("Screen3")}
          style={styles.button}
        >
          <AntDesign name="left" size={26} color="gray" />
        </Pressable>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Your orders</Text>
        <AntDesign name="search1" size={30} color="green" />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 18,
          marginTop: 20,
          borderRadius: 10,
          backgroundColor: "#00BDD6",
        }}
      >
        <View style={{ padding: 20 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 15,
              color: "white",
            }}
          >
            CAFE
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            Order #18
          </Text>
        </View>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white", marginRight: 20 }}>
          $10
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 18,
          marginTop: 20,
          borderRadius: 10,
          backgroundColor: "#8353E2",
        }}
      >
        <View style={{ padding: 20 }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 15,
              color: "white",
            }}
          >
            CAFE
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            Order #18
          </Text>
        </View>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white", marginRight: 20 }}>
          $10
        </Text>
      </View>

      <FlatList
        data={selectedProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderOrder}
        style={{ padding: 15 }}
        showsVerticalScrollIndicator={false}
      />
      <TouchableOpacity
        style={{
          backgroundColor: "#F1B000",
          padding: 18,
          borderRadius: 10,
          marginHorizontal: 20,
          marginTop: 20,
        }}
        onPress={() => navigation.navigate("Screen4", { selectedProducts })}
      >
        <Text style={{ textAlign: "center", fontSize: 20, color: "white" }}>
          PAY NOW
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen4;

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.07)",
  },
});
