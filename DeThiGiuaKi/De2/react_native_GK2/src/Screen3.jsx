import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import users from "../json/users.json";

const Screen3 = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validEmail = users.map((user) => user.email);
  const validPassword = users.map((user) => user.password);

  const handleValidation = () => {
    if (validEmail.includes(email) && validPassword.includes(password)) {
      navigation.navigate("Screen4");
    } else {
      alert("Invalid email or password");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <View style={{ paddingVertical: 40 }}>
      <Image
        source={require("../assets/Data/Image 20.png")}
        style={{ width: "100%" }}
      />
      <View style={{ paddingHorizontal: 30 }}>
        <Text style={styles.textHeader}>Welcome!</Text>
        <Text style={styles.textInput}>Email</Text>
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
        <Text style={styles.textInput}>Password</Text>
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
      </View>
      <TouchableOpacity style={styles.buttonLogin} onPress={handleValidation}>
        <Text style={styles.textButton}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 50,
    fontWeight: "bold",
    marginBottom: 50,
    marginTop: 20,
  },
  textInput: {
    fontSize: 20,
    fontWeight: "bold",
    color: "gray",
    marginVertical: 10,
  },
  viewInputEmail: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 12,
    borderRadius: 15,
    marginBottom: 30,
  },
  viewInputPass: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 12,
    borderRadius: 15,
    marginBottom: 30,
  },
  buttonLogin: {
    backgroundColor: "#00BDD6",
    width: 400,
    height: 60,
    borderRadius: 30,
    marginTop: 40,
    alignSelf: "center",
  },
  textButton: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    marginTop: 15,
  },
});
