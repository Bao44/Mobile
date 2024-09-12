import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1_e from './src/screen1_e';
import Screen2_a from './src/screen2_a';
import EndScreen from './src/endScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <EndScreen />
      <StatusBar style="auto" />
    </View>
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
