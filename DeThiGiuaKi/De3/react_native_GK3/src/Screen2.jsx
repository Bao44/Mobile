import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const Screen2 = ({ navigation }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option); // cập nhật giá trị selected
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
        <FontAwesome5 name="shopping-cart" size={28} color="#00CD66" />
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
        {["Vegetable", "Seafood", "Meat"].map((option) => (
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
              Vegetable
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* Text */}
      <View></View>
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
});
