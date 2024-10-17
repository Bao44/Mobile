import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { data, getAllVegetables } from "../data/data";

const Screen2 = ({ navigation }) => {
  const [selected, setSelected] = useState("Vegetable");
  const [filteredData, setFilteredData] = useState(getAllVegetables);
  const [visibleCount, setVisibleCount] = useState(6); // Ban đầu hiển thị 6 sản phẩm

  const handleSelect = (option) => {
    setSelected(option); // cập nhật giá trị selected
    filterData(option); // lọc dữ liệu
  };

  const filterData = (category) => {
    const filtered = data.filter((item) => item.type === category);
    setFilteredData(filtered);
    setVisibleCount(6); // Reset lại số lượng hiển thị
  };

  const handleSeeAll = () => {
    setVisibleCount(filteredData.length); // Hiển thị tất cả sản phẩm
  };

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={styles.viewItem}
        onPress={() => navigation.navigate("Screen3")}
      >
        <Image source={item.image} style={{ width: 200, height: 200 }} />
        <Text style={styles.textItem}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ paddingVertical: 40 }}>
      <View style={styles.viewHeader}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Screen1")}
          style={styles.button}
        >
          <AntDesign name="left" size={26} color="gray" />
        </TouchableOpacity>
        <FontAwesome5
          name="shopping-cart"
          size={28}
          color="#00CD66"
          onPress={() => navigation.navigate("Screen3")}
        />
      </View>
      {/* Search */}
      <View>
        <View style={styles.viewTextInput}>
          <TextInput
            placeholder="Search"
            style={{ padding: 10, fontSize: 18 }}
          />
        </View>
      </View>
      {/* Options */}
      <View style={styles.viewOptions}>
        {["Vegetable", "Seafood", "Drinks"].map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.buttonOption,
              selected === option && styles.selectedOption,
            ]}
            onPress={() => handleSelect(option)}
          >
            <Text
              style={[
                styles.textOptions,
                selected === option && styles.textSelectedOption,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Text */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 20,
        }}
      >
        <Text style={{ fontSize: 26, color: "#00CD66" }}>
          Order your favorite!
        </Text>
        <TouchableOpacity onPress={handleSeeAll}>
          <Text style={{ fontSize: 26, color: "orange" }}>See all</Text>
        </TouchableOpacity>
      </View>
      {/* List item */}
      <FlatList
        data={filteredData.slice(0, visibleCount)}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{ paddingHorizontal: 5 }}
        style={{ marginBottom: 240 }}
      />
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  viewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  },
  button: {
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.07)",
  },
  viewTextInput: {
    backgroundColor: "white",
    marginHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.2)",
  },
  viewOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 30,
    marginHorizontal: 20,
  },
  buttonOption: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: "rgba(0,0,0,0.2)",
  },
  textOptions: {
    fontSize: 20,
    paddingHorizontal: 10,
    color: "#00CDCD",
  },
  selectedOption: {
    backgroundColor: "#00CD66",
  },
  textSelectedOption: {
    color: "white",
  },
  viewItem: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  textItem: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 10,
  },
});
