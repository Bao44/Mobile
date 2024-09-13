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
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>

    // </View>

    <SafeAreaView style={styles.screen_tiki}>
      <Tiki_Ok/>
      <StatusBar style="auto" />
    </SafeAreaView>


    // <NavigationContainer>
    //     <Stack.Navigator>
    //       <Stack.Screen name="Screen1" component={Screen1_e} />
    //       <Stack.Screen name="Screen2_a" component={Screen2_a} />
    //     </Stack.Navigator>
    // </NavigationContainer>

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
