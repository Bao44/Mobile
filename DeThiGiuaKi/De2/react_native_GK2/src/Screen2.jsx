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
import AntDesign from "@expo/vector-icons/AntDesign";
import addUser from "../crud.js";

const Screen2 = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    if (userName === "" || email === "" || password === "") {
      alert("Please fill all the fields");
    } else {
      addUser({ newName: userName, newEmail: email, newPass: password });
      navigation.navigate("Screen3");
      console.log(userName, email, password);
    }
  };

  return (
    <View>
      <View style={{ marginTop: 80 }}>
        <Image
          source={require("../assets/Data/Image 19.png")}
          style={{ alignSelf: "center" }}
        />
        <Text style={styles.textHeader}>Nice to see you!</Text>
        <Text style={styles.textDesciption}>Create your account</Text>
      </View>
      <View style={{ marginVertical: 20, marginHorizontal: 30, marginTop: 80 }}>
        <View style={styles.viewInputUser}>
          <AntDesign
            name="user"
            size={24}
            color="gray"
            style={{ paddingHorizontal: 10 }}
          />
          <TextInput
            placeholder="Enter your user name"
            value={userName}
            onChangeText={(newUserName) => setUserName(newUserName)}
            style={{ paddingRight: 180, paddingLeft: 5 }}
          />
        </View>
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

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <AntDesign name="checksquare" size={24} color="blue" />
          <Text> I agree with</Text>
          <Text style={{ color: "blue" }}> Terms & Conditions</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.buttonSignUp} onPress={handleSignUp}>
        <Text style={styles.textButton}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  textDesciption: {
    fontSize: 20,
    color: "gray",
    textAlign: "center",
  },
  viewInputUser: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 12,
    borderRadius: 15,
  },
  viewInputEmail: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 12,
    borderRadius: 15,
    marginVertical: 20,
  },
  viewInputPass: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "gray",
    paddingVertical: 12,
    borderRadius: 15,
    marginBottom: 30,
  },
  buttonSignUp: {
    backgroundColor: "#00BDD6",
    width: 400,
    height: 60,
    borderRadius: 15,
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
