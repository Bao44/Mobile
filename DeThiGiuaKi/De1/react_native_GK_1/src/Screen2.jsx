import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import categories from "../data/categories.json";

const Screen2 = ({ navigation }) => {
  const [showAll, setShowAll] = useState(false);
  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };

  const displayed = showAll ? categories.slice(0, 3) : categories.slice(0, 6);

  const renderCategories = ({ item }) => {
    return (
      <TouchableOpacity>
        <Image
          source={{ uri: item.image }}
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            marginHorizontal: 10,
          }}
        />
      </TouchableOpacity>
    );
  };

  const renderBestSellers = () => {};

  const renderMatched = () => {};

  const renderPopular = () => {};

  return (
    <View style={{ paddingVertical: 30 }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable
            onPress={() => navigation.navigate("Screen1")}
            style={styles.button}
          >
            <AntDesign name="left" size={26} color="gray" />
          </Pressable>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>Electronics</Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Pressable>
            <Feather name="shopping-cart" size={26} color="gray" />
          </Pressable>
          <AntDesign
            name="user"
            size={26}
            color="black"
            style={{
              padding: 10,
              backgroundColor: "#ccc",
              borderRadius: 50,
              marginHorizontal: 20,
            }}
          />
        </View>
      </View>
      {/* Search */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.07)",
            marginLeft: 20,
            marginTop: 40,
          }}
        >
          <AntDesign
            name="search1"
            size={24}
            color="gray"
            style={{ paddingLeft: 10 }}
          />
          <TextInput
            placeholder="Search"
            style={{
              paddingRight: 250,
              paddingLeft: 10,
              paddingVertical: 8,
              fontSize: 18,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: "rgba(0,0,0,0.07)",
            padding: 8,
            marginHorizontal: 15,
            marginTop: 40,
          }}
        >
          <MaterialIcons name="filter-list" size={24} color="black" />
        </View>
      </View>
      {/* Categories */}
      <View style={{ marginVertical: 30, marginHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
          <View>
            {showAll && (
              <TouchableOpacity onPress={handleToggleShowAll}>
                <Text style={{ color: "gray", fontSize: 18 }}>See all</Text>
              </TouchableOpacity>
            )}
            {!showAll && (
              <TouchableOpacity onPress={handleToggleShowAll}>
                <Text style={{ color: "gray", fontSize: 18 }}>Hiden</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
        <FlatList
          data={displayed}
          renderItem={renderCategories}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ marginTop: 20 }}
        />
      </View>

      {/* List product */}
      <View>
        {/* Button */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 10,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "rgba(0,0,0,0.05)",
              paddingHorizontal: 20,
              paddingVertical: 8,
              borderRadius: 15,
            }}
          >
            <Text style={{color: '#00BDD6'}}>Best Sales</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgba(0,0,0,0.05)",
              paddingHorizontal: 20,
              paddingVertical: 8,
              borderRadius: 15,
            }}
          >
            <Text style={{color: '#00BDD6'}}>Best Matched</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "rgba(0,0,0,0.05)",
              paddingHorizontal: 20,
              paddingVertical: 8,
              borderRadius: 15,
            }}
          >
            <Text style={{color: '#00BDD6'}}>Popular</Text>
          </TouchableOpacity>
        </View>
        {/* List */}
      </View>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.07)",
    marginHorizontal: 20,
  },
});
