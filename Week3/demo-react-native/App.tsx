import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import FirstScreen from "./src/firstScreen";
import Screen1_a from "./src/screen1_a";
import Screen1_b from "./src/screen1_b";
import Screen1_c from "./src/screen1_c";

export default function App() {
  return (
    <View style={styles.container}>
      <Screen1_c />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
