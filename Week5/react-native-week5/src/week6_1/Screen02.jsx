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
import json from "../../assets/data_week6_1.json";

const Screen01 = ({ navigation }) => {
  const data = json;
  return (
    <View>
      <Text style={{ padding: 15 }}>
        Bạn có thắc mắc với sản phẩm vừa xem. Đừng ngại chat với shop!
      </Text>

      <FlatList
        data={data}
        contentContainerStyle={{ paddingBottom: 180 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              borderWidth: 0.5,
              alignItems: "center",
              borderColor: "gray",
              padding: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Image
                src={item.image}
                style={{ width: 100, height: 100, marginHorizontal: 10 }}
              />

              <View>
                <Text>{item.product}</Text>
                <Text style={{ color: "gray", marginTop: 10 }}>
                  Shop <Text style={{ color: "black" }}>{item.nameShop}</Text>
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.viewBtn}
              onPress={() => navigation.navigate("Screen03")}
            >
              <Text style={styles.textBtn}>Chat</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Screen01;

const styles = StyleSheet.create({
  viewBtn: {
    backgroundColor: "#E94141",
    height: 50,
    width: 100,
    marginRight: 15,
  },
  textBtn: {
    color: "white",
    textAlign: "center",
    lineHeight: 45,
    fontSize: 18,
  },
});
