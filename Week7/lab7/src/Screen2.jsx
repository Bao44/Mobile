import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Screen2 = ({ navigation, route }) => {
  const { name } = route.params;
  const renderItem = (
    <View style={styles.viewNotes}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "70%",
        }}
      >
        <TouchableOpacity>
          <Fontisto name="checkbox-active" size={24} color="green" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, paddingHorizontal: 10 }}>
          To check email
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "20%",
        }}
      >
        <TouchableOpacity>
          <FontAwesome6 name="pen-to-square" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <View>
      <View style={styles.input}>
        <AntDesign
          name="search1"
          size={24}
          color="black"
          style={{ marginHorizontal: 5 }}
        />
        <TextInput
          placeholder="Search"
          style={{ fontSize: 18, paddingRight: 250 }}
        />
      </View>
      {/*  */}
      <View style={styles.viewNotes}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "70%",
          }}
        >
          <TouchableOpacity>
            <Fontisto name="checkbox-active" size={24} color="green" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, paddingHorizontal: 10 }}>
            To check email
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "20%",
          }}
        >
          <TouchableOpacity>
            <FontAwesome6 name="pen-to-square" size={24} color="red" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="delete" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.viewNotes}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "70%",
          }}
        >
          <TouchableOpacity>
            <Fontisto name="checkbox-active" size={24} color="green" />
          </TouchableOpacity>
          <Text style={{ fontSize: 20, paddingHorizontal: 10 }}>
            To check email
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            width: "20%",
          }}
        >
          <TouchableOpacity>
            <FontAwesome6 name="pen-to-square" size={24} color="red" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="delete" size={24} color="red" />
          </TouchableOpacity>
        </View>
      </View>
      {/*  */}
          <Text>xin chao {name}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("Screen3", {name})}
        style={styles.buttonAdd}
      >
        <AntDesign
          name="plus"
          size={32}
          color="white"
          style={{ textAlign: "center", marginTop: 13 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 40,
    marginHorizontal: 20,
    padding: 10,
  },
  viewNotes: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "lightgray",
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  buttonAdd: {
    backgroundColor: "#00BDD6",
    borderRadius: 50,
    padding: 10,
    width: 80,
    height: 80,
    marginVertical: 40,
    alignSelf: "center",
  },
});
