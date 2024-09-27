import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const Screen02 = ({ navigation }) => {
  const data = [
    {
      image: require("../../assets/imagesWeek6/bike_blue_small.png"),
      name: "Pinarello",
      price: 1800,
    },
    {
      image: require("../../assets/imagesWeek6/bike_DrarkRed.png"),
      name: "Pina Mountai",
      price: 1700,
    },
    {
      image: require("../../assets/imagesWeek6/bike_purple.png"),
      name: "Pina Bike",
      price: 1500,
    },
    {
      image: require("../../assets/imagesWeek6/bike_red.png"),
      name: "Pinarello",
      price: 1900,
    },
    {
      image: require("../../assets/imagesWeek6/bike_purple.png"),
      name: "Pinarello",
      price: 2700,
    },
    {
      image: require("../../assets/imagesWeek6/bike_DrarkRed.png"),
      name: "Pinarello",
      price: 1350,
    },
    {
      image: require("../../assets/imagesWeek6/bike_purple.png"),
      name: "Pina Bike",
      price: 1500,
    },
    {
      image: require("../../assets/imagesWeek6/bike_red.png"),
      name: "Pinarello",
      price: 1900,
    },
    {
      image: require("../../assets/imagesWeek6/bike_purple.png"),
      name: "Pina Bike",
      price: 1500,
    },
    {
      image: require("../../assets/imagesWeek6/bike_red.png"),
      name: "Pinarello",
      price: 1900,
    },
  ];

  return (
    <View style={{ paddingTop: 50, paddingHorizontal: 10 }}>
      {/* header */}
      <View style={styles.header}>
        <Text style={styles.titteHeader}>The world's Best Bike</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Screen01")}>
          <AntDesign
            name="home"
            size={34}
            color="#E94141"
            style={{ marginRight: 10 }}
          />
        </TouchableOpacity>
      </View>

      {/* Button */}
      <View style={styles.viewButton}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Roadbike</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Mountain</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <FlatList
        data={data}
        numColumns={2} // Hiển thị 2 sản phẩm mỗi hàng
        contentContainerStyle={{ paddingBottom: 180 }}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1, // Đảm bảo mỗi item chiếm 1 phần đều nhau trong hàng
              marginBottom: 10, // Khoảng cách giữa các sản phẩm
            }}
          >
            <TouchableOpacity
              style={styles.viewProduct}
              onPress={() => navigation.navigate("Screen03", { item })}
            >
              <AntDesign
                name="hearto"
                size={24}
                color="gray"
                style={styles.iconHeart}
              />
              <Image source={item.image} style={styles.image} />
              <View>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.product$}>
                  $ <Text style={styles.productPrice}>{item.price}</Text>
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Screen02;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titteHeader: {
    color: "#E94141",
    fontSize: 28,
    fontWeight: "bold",
  },
  viewButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 40,
  },
  button: {
    padding: 7,
    width: 100,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#E94141",
  },
  textButton: {
    color: "#E94141",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  viewProduct: {
    width: 185,
    height: 220,
    backgroundColor: "#F7BA8326",
    borderRadius: 10,
  },
  iconHeart: {
    position: "absolute",
    left: 10,
    top: 10,
  },
  image: {
    alignSelf: "center",
    marginTop: 10,
  },
  productName: {
    textAlign: "center",
    marginTop: 5,
    fontSize: 20,
    color: "#00000099",
  },
  product$: {
    textAlign: "center",
    fontSize: 26,
    color: "#F7BA83",
  },
  productPrice: {
    fontSize: 24,
    color: "black",
  },
});
