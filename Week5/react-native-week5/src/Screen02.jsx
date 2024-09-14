import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen02 = ({navigation}) => {
  return (
    <View>
      <Text>Screen02</Text>
      <Button
        title="Go to Screen03"
        onPress={() => navigation.navigate('Screen03')}
      />
    </View>
  )
}

export default Screen02

const styles = StyleSheet.create({})