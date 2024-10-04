import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const Screen03 = ({ navigation, route }) => {
  const { data } = route.params;
  return (
    <View>
      <FlatList
        data={data}
        contentContainerStyle={{ paddingBottom: 180 }}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ padding: 8, marginBottom: 15 }}>
            <View style={{ width: 190, height: 190 }}>
              <Image
                source={{ uri: item.image }}
                style={{ width: 190, height: 120 }}
              />
              <View style={{ marginLeft: 20, marginTop: 5 }}>
                <Text style={{ fontSize: 16 }}>{item.product}</Text>
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("../../assets/star.png")}
                    style={{ width: 20, height: 20 }}
                  />
                  <Image
                    source={require("../../assets/star.png")}
                    style={{ width: 20, height: 20 }}
                  />
                  <Image
                    source={require("../../assets/star.png")}
                    style={{ width: 20, height: 20 }}
                  />
                  <Image
                    source={require("../../assets/star.png")}
                    style={{ width: 20, height: 20 }}
                  />
                  <Text>(15)</Text>
                </View>
                <Text style={{ fontWeight: "bold" }}>
                  69.900 đ{" "}
                  <Text style={{ color: "gray", fontWeight: "400" }}>-39%</Text>
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Screen03;

const styles = StyleSheet.create({});
