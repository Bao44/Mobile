import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen2 = ({navigation}) => {
  return (
    <View>
      <Text>Screen2</Text>
      <Button title="Go to Screen1" onPress={() => navigation.navigate("Screen1")} />
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({})