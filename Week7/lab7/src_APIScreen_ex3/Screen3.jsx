import { Button, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const Screen3 = ({ navigation }) => {
  return (
    <View>
      <Pressable
        onPress={() => navigation.navigate("Screen2")}
        style={styles.button}
      >
        <AntDesign name="left" size={26} color="gray" />
      </Pressable>
      <Text>Screen3</Text>
      <Button
        title="Go to Screen4"
        onPress={() => navigation.navigate("Screen4")}
      />
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.07)",
  },
});
