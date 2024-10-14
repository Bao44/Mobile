import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
emaillock;
const Screen1 = () => {
  return (
    <View style={{ paddingVertical: 30 }}>
      <AntDesign name="arrowleft" size={24} color="gray" />
      <View style={styles.center}>
        <Image
          source={require("../assets/Data/icon.png")}
          style={{ width: 200, height: 200 }}
        />
        <Text>Hello Again!</Text>
        <Text>Log into your account</Text>
        <View>
          <View style={styles.viewInputEmail}>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="gray"
            />
            <TextInput placeholder="Enter your email address" />
          </View>
          <View style={styles.viewInputPass}>
            <Fontisto name="locked" size={24} color="gray" />
            <TextInput placeholder="Enter your email address" />
            <MaterialCommunityIcons name="eye-outline" size={24} color="gray" />
          </View>
          <Text>Forgot Password?</Text>
        </View>
        <TouchableOpacity>
          <Text>Continue</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View>
          <Text>____________________</Text>
          <Text>or</Text>
          <Text>____________________</Text>
        </View>
        <View>
          <Image source={require("../assets/Data/google.png")} />
          <Image source={require("../assets/Data/face.png")} />
          <Image source={require("../assets/Data/apple.png")} />
        </View>
      </View>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({});
