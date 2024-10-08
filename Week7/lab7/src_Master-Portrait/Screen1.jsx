import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import React, { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getItems } from "../api_Master-Portrait";

const Screen1 = ({ navigation }) => {
  const [product, setProduct] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const fetchProduct = async () => {
        try {
          const data = await getItems();
          setProduct(data);
        } catch (error) {
          console.error("Failed to fetch product:", error);
        }
      };
      fetchProduct();
    }, [])
  );

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image source={{ uri: item.image }} style={{width: 100, height: 100}}/>
        <View>
          <Text>{item.name}</Text>
          <Text>{item.description}</Text>
          <Text>{item.price}</Text>
        </View>
        <TouchableOpacity>
          <FontAwesome5 name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.textHeader}>Welcome, Jala!</Text>
      <Text style={styles.textTitleHeader}>Choice you Best food</Text>
      <View style={styles.viewInputText}>
        <TextInput placeholder="Search food" style={styles.inputText} />
      </View>
      <View style={styles.viewNav}>
        <TouchableOpacity
          style={[
            styles.buttonNav,
            {
              backgroundColor: "#F1B000",
            },
          ]}
        >
          <Text style={styles.textButton}>Donut</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonNav}>
          <Text style={styles.textButton}>Pink Donut</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonNav}>
          <Text style={styles.textButton}>Floating</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={product}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  textHeader: {
    marginTop: 30,
    fontSize: 24,
    fontWeight: "bold",
    color: "gray",
  },
  textTitleHeader: {
    fontSize: 26,
    fontWeight: "bold",
  },
  viewInputText: {
    borderWidth: 1,
    borderColor: "gray",
    marginVertical: 20,
    paddingVertical: 15,
    marginRight: 80,
  },
  inputText: {
    fontSize: 20,
    marginLeft: 10,
  },
  viewNav: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonNav: {
    padding: 10,
    borderRadius: 7,
    width: 120,
    borderWidth: 1,
    borderColor: "gray",
  },
  textButton: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
