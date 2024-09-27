import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Screen01 from "./src/week6_1/Screen01";
import Screen02 from "./src/week6_1/Screen02";
import Screen03 from "./src/week6_1/Screen03";

// import Screen01 from '../react-native-week5/src/week5/Screen01';
// import Screen02 from '../react-native-week5/src/week5/Screen02';

// import Screen01 from "./src/week6_2/Screen01";
// import Screen02 from "./src/week6_2/Screen02";
// import Screen03 from "./src/week6_2/Screen03";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Week 5 */}
        {/* <Stack.Screen name="Screen01" options={{headerShown: false}} component={Screen01} />
        <Stack.Screen name="Screen02" options={{headerShown: false}} component={Screen02} /> */}

        {/* Week 6-lab1 */}
        <Stack.Screen name="Screen01" component={Screen01} options={{headerShown: false}} />
        <Stack.Screen name="Screen02" component={Screen02} options={{headerShown: true, title: 'Chat'}} />
        <Stack.Screen name="Screen03" component={Screen03} options={{headerShown: true, title: ""}} />


        {/* Week 6_lab2*/}
        {/* <Stack.Screen name="Screen01" component={Screen01} options={{headerShown: false}} />
        <Stack.Screen name="Screen02" component={Screen02} options={{headerShown: false}}/>
        <Stack.Screen name="Screen03" component={Screen03} options={{headerShown: false}}/> */}
      </Stack.Navigator>
    </NavigationContainer>
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
