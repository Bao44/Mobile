import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const Screen4 = ({ navigation }) => {
  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate("Screen3")}
        style={styles.button}
      >
        <AntDesign name="left" size={26} color="gray" />
      </Pressable>
      <Text>Screen4</Text>
    </View>
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
});
