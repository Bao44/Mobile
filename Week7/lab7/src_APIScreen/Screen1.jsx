import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Feather from "@expo/vector-icons/Feather";

const Screen1 = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const validEmails = ['abc@gmail.com', 'a@gmail.com', 'b@gmail.com'];

  const handleEmailValidation = () => {
    if (validEmails.includes(email)) {
      navigation.navigate("Screen2", { email });
    } else {
      alert("Invalid email. Please try again.");
      setEmail(""); 
    }
  };
  return (
    <View>
      <Image source={require("../assets/Image 95.png")} style={styles.image}/>
      <Text style={styles.text}>MANAGE YOUR TASK</Text>
      <View style={styles.input}>
        <Feather name="mail" size={24} color="black" style={styles.icon}/>
        <TextInput
          placeholder="Enter your name"
          value={email}
          onChangeText={(newEmail) => setEmail(newEmail)}
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={handleEmailValidation}
      >
        <Text style={{ color: "white", fontSize: 20 }}>GET STARTED</Text>
        <Feather name="arrow-right" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    alignSelf: "center",
    marginTop: 100,
  },
  text: {
    color: "#8353E2",
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
    marginVertical: 40,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "gray",
    height: 60,
    width: 400,
    alignSelf: "center",
  },
  icon: {
    marginHorizontal: 15,
  },
  textInput: {
    fontSize: 20,
  },
  button: {
    backgroundColor: "#00BDD6",
    width: 200,
    height: 55,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: 60,
  },
});
