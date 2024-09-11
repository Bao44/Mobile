import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen1_e from './src/screen1_e';
import Screen2_a from './src/screen2_a';

export default function App() {
  return (
    <View style={styles.container}>
      <Screen2_a />
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
