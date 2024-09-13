import { StatusBar } from "expo-status-bar";
import {
  Button,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Screen1_e from "./src/screen1_e";
import Screen2_a from "./src/screen2_a";
import EndScreen from "./src/endScreen";
import Screen2_b from "./src/screen2_b";
import Tiki_Ok from "./src/tiki_Ok";
import { useState } from "react";

export default function App() {
  return (
    // <View style={styles.container}>

    // </View>

    <SafeAreaView style={styles.screen_tiki}>
      <Tiki_Ok/>
      <StatusBar style="auto" />
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  screen_tiki: {
    flex: 1,
    backgroundColor: "#C4C4C4",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
});
