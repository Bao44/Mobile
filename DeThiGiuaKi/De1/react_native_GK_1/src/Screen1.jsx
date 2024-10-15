import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import users from "../data/users.json";

const Screen1 = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validEmail = users.map((user) => user.email);
  const validPassword = users.map((user) => user.password);

  const handleValidation = () => {
    if (validEmail.includes(email) && validPassword.includes(password)) {
      navigation.navigate("Screen2");
    } else {
      alert("Email or Password is incorrect");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <View style={{ paddingVertical: 30 }}>
      <AntDesign name="arrowleft" size={24} color="gray" />
      <View style={styles.center}>
        <Image
          source={require("../assets/Data/icon.png")}
          style={{ width: 200, height: 200 }}
        />
        <Text style={{ fontSize: 40, fontWeight: "bold", marginVertical: 20 }}>
          Hello Again!
        </Text>
        <Text style={{ fontSize: 20, color: "gray" }}>
          Log into your account
        </Text>
        <View style={{ marginVertical: 20 }}>
          <View style={styles.viewInputEmail}>
            <MaterialCommunityIcons
              name="email-outline"
              size={24}
              color="gray"
              style={{ paddingHorizontal: 10 }}
            />
            <TextInput
              placeholder="Enter your email address"
              value={email}
              onChangeText={(newEmail) => setEmail(newEmail)}
              style={{ paddingRight: 180, paddingLeft: 5 }}
            />
          </View>
          <View style={styles.viewInputPass}>
            <Fontisto
              name="locked"
              size={24}
              color="gray"
              style={{ paddingHorizontal: 10 }}
            />
            <TextInput
              placeholder="Enter your password"
              value={password}
              onChangeText={(newPassword) => setPassword(newPassword)}
              style={{ paddingRight: 180, paddingLeft: 5 }}
            />
            <MaterialCommunityIcons name="eye-outline" size={24} color="gray" />
          </View>
          <Text style={{ textAlign: "right", color: "#00BDD6" }}>
            Forgot Password?
          </Text>
        </View>
        <TouchableOpacity
          onPress={handleValidation}
          style={{
            backgroundColor: "#00BDD6",
            paddingHorizontal: 150,
            paddingVertical: 15,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "white", fontSize: 24 }}>Continue</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Text style={styles.textFooter}>____________________</Text>
          <Text style={[styles.textFooter, { fontSize: 20 }]}>or</Text>
          <Text style={styles.textFooter}>____________________</Text>
        </View>
        <View style={styles.buttonFooter}>
          <Image source={require("../assets/Data/google.png")} />
          <Image source={require("../assets/Data/face.png")} />
          <Image source={require("../assets/Data/apple.png")} />
        </View>
      </View>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  center: {
    marginTop: 50,
    alignItems: "center",
  },
  viewInputEmail: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 12,
    borderRadius: 15,
  },
  viewInputPass: {
    marginVertical: 20,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 12,
    borderRadius: 15,
  },
  footer: {
    marginTop: 50,
  },
  textFooter: {
    color: "gray",
    marginHorizontal: 10,
  },
  buttonFooter: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
});
