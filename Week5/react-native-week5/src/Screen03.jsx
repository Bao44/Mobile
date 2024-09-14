import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen03 = ({navigation}) => {
  return (
    <View>
      <Text>Screen03</Text>
      <Button
        title='Go to Screen01'
        onPress={() => navigation.navigate('Screen01')}
      />
    </View>
  )
}

export default Screen03

const styles = StyleSheet.create({})