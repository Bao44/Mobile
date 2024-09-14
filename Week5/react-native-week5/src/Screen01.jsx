import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Screen01 = ({navigation}) => {
  return (
    <View style={{paddingTop: 40}}>
      
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Image source={require('../assets/vs_blue.png')}/>
      </View>

      <View>
        <Text>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      </View>


      <Button
        title="Go to Screen02"
        onPress={() => navigation.navigate('Screen02')}
        />
    </View>
  )
}

export default Screen01

const styles = StyleSheet.create({})