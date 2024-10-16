import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const Screen4 = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState(
    require("../assets/Data/cake.png")
  );

  return (
    <ScrollView style={{ paddingVertical: 40, paddingHorizontal: 20 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Pressable
          onPress={() => navigation.navigate("Screen1")}
          style={styles.button}
        >
          <AntDesign name="left" size={26} color="gray" />
        </Pressable>
        <Text style={styles.textProductName}>Product name</Text>
      </View>
      {/* Images */}
      <View>
        <View style={styles.viewImageCenter}>
          <Image source={selectedImage} style={styles.imageCenter} />
        </View>
        {/* View row images */}
        <View style={styles.rowImages}>
          <TouchableOpacity
            onPress={() => setSelectedImage(require("../assets/Data/cake.png"))}
            style={styles.viewImageRow}
          >
            <Image source={require("../assets/Data/cake.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setSelectedImage(require("../assets/Data/cam.png"))}
            style={styles.viewImageRow}
          >
            <Image source={require("../assets/Data/cam.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setSelectedImage(require("../assets/Data/donut.png"))
            }
            style={styles.viewImageRow}
          >
            <Image source={require("../assets/Data/donut.png")} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setSelectedImage(require("../assets/Data/cherry.png"))
            }
            style={styles.viewImageRow}
          >
            <Image source={require("../assets/Data/cherry.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Screen4;

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.07)",
  },
  textProductName: {
    fontSize: 22,
    fontWeight: "bold",
    marginLeft: 20,
    color: "#696969",
  },
  viewImageCenter: {
    marginVertical: 20,
    backgroundColor: "rgba(0,0,0,0.07)",
    borderRadius: 20,
  },
  imageCenter: {
    width: 280,
    height: 280,
    alignSelf: "center",
  },
  rowImages: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  viewImageRow: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 10,
    padding: 10,
  },
});
