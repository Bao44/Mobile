import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const Screen3 = ({ navigation, route }) => {
  const { name } = route.params;
  return (
    <View>
      <Text style={styles.textHeader}>ADD YOUR JOB</Text>
      <View style={styles.input}>
        <AntDesign name="filetext1" size={28} color="green" />
        <TextInput
          style={{ paddingRight: 250, paddingLeft: 10, fontSize: 18 }}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Screen2", { name })}
      >
        <Text style={{ color: "white", fontSize: 20 }}>FINISH</Text>
      </TouchableOpacity>
      <Image source={require("../assets/Image 95.png")} style={styles.image} />
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  textHeader: {
    color: "#8353E2",
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    marginVertical: 40,
    marginTop: 150,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    marginVertical: 40,
    marginHorizontal: 30,
    padding: 10,
  },
  button: {
    backgroundColor: "#00BDD6",
    width: 150,
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  image: {
    alignSelf: "center",
    marginTop: 100,
  },
});
