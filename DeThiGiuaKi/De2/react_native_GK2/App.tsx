import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './src/Screen1';
import Screen2 from './src/Screen2';
import Screen3 from './src/Screen3';
import Screen4 from './src/Screen4';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen1" component={Screen1} options={{headerShown: false}}/>
        <Stack.Screen name="Screen2" component={Screen2} options={{headerShown: true, headerTitle: ""}}/>
        <Stack.Screen name="Screen3" component={Screen3} options={{headerShown: false}}/>
        <Stack.Screen name="Screen4" component={Screen4} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}