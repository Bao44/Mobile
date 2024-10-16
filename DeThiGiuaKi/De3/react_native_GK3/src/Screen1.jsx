import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Screen1 = ({ navigation }) => {
  return (
    <View style={{ paddingVertical: 30 }}>
      <Text>Screen1</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Screen2")}>
        <Text>Go to Screen2</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
