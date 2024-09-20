import {
  Button,
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
      <ScrollView>
        <View>
            <View style={{flexDirection: 'row'}}>
                <View style={{width: 180, height: 180, backgroundColor: 'red'}}>
                <AntDesign name="hearto" size={24} color="black" />
                <Image source={require("../../assets/imagesWeek6/bike_blue.png")}/>
                </View>
            </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Screen02;

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 40,
  },
  titteHeader: {
    color: "#E94141",
    fontSize: 28,
    fontWeight: "bold",
  },
  viewButton: {
    flexDirection: "row",
    justifyContent: "space-between",
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
});
