import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';


import Screen1 from './src_APIScreen_ex3/Screen1';
import Screen2 from './src_APIScreen_ex3/Screen2';
import Screen3 from './src_APIScreen_ex3/Screen3';
import Screen4 from './src_APIScreen_ex3/Screen4';


// import Screen1 from './src_Master-Portrait/Screen1';
// import Screen2 from './src_Master-Portrait/Screen2';


// import Screen1 from './src_APIScreen/Screen1';
// import Screen2 from './src_APIScreen/Screen2';
// import Screen3 from './src_APIScreen/Screen3';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Screen1" component={Screen1} options={{headerShown: false}}/>
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} options={{headerShown: true}} /> */}

        <Stack.Screen name="Screen1" component={Screen1} options={{headerShown: false}}/>
        <Stack.Screen name="Screen2" component={Screen2} options={{headerShown: false}}/>
        <Stack.Screen name="Screen3" component={Screen3} options={{headerShown: false}}/>
        <Stack.Screen name="Screen4" component={Screen4} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
