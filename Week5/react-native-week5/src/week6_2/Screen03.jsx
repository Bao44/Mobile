import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import AntDesign from "@expo/vector-icons/AntDesign";

const Screen03 = ({ navigation, route }) => {
  const { item } = route.params;
  const temp = item.price * 0.15 + item.price;
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <View style={{ backgroundColor: "#E941411A", height: 450 }}>
        <Image source={item.image} style={styles.image} />
      </View>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={{fontSize: 26, color: '#00000096'}}>
        15% OFF {item.price}$         <Text style={{fontSize: 24, color: 'black'}}>{temp}$</Text>
      </Text>
      <Text style={{fontSize: 26, color: 'black',marginVertical: 20}}>Description</Text>
      <Text style={{fontSize: 21, color: '#00000096'}}>
        It is a very important form of writing as we write almost everything in
        paragraphs, be it an answer, essay, story, emails, etc.
      </Text>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: 40,
        }}
      >
        <AntDesign
          name="hearto"
          size={35}
          color="black"
          style={styles.iconHeart}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate("Screen02")}
          style={styles.btn}
        >
          <Text style={styles.textBtn}>Add to card</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Screen03;

const styles = StyleSheet.create({
  image: {
    width: 350,
    height: 350,
    marginLeft: 25,
    marginTop: 50,
  },
  btn: {
    backgroundColor: "#E94141",
    padding: 13,
    borderRadius: 50,
    width: 300,
  },
  textBtn: {
    fontSize: 26,
    color: "white",
    textAlign: "center",
  },
  name: {
    fontSize: 45,
    marginTop: 15,
  },
});
