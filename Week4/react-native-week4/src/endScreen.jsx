import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const EndScreen = () => {
  return (
    <View style={styles.container}>
      {/* Login */}
      <View style={[{ flex: 2, justifyContent: "center" }]}>
        <Fontisto name="eye" size={70} color="black" />
      </View>
      {/* Input */}
      <View style={[{ flex: 2, justifyContent: "center" }]}>
        <View style={styles.viewInput}>
          <AntDesign name="user" size={40} color="blue" />
          <TextInput
            placeholder="Please input user name"
            style={{ fontSize: 22, flex: 1, marginLeft: 10 }}
          />
        </View>
        <View style={styles.viewInput}>
          <AntDesign name="lock1" size={40} color="blue" />
          <TextInput
            placeholder="Please input password"
            secureTextEntry
            style={{ fontSize: 22, flex: 1, marginLeft: 10 }}
          />
        </View>
      </View>
      {/* Button */}
      <View style={[{ flex: 1 }]}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontSize: 25, color: "white" }}>LOGIN</Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.text}>Register</Text>
          <Text style={styles.text}>Forgot password</Text>
        </View>
      </View>
      <View
        style={[
          {
            flex: 1,
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
          },
        ]}
      >
        <Text style={{ fontSize: 20, color: "blue", marginTop: -15 }}>
          _________
        </Text>
        <Text style={{ fontSize: 20 }}>Other Login Methods</Text>
        <Text style={{ fontSize: 20, color: "blue", marginTop: -15 }}>
          _________
        </Text>
      </View>
      {/* Footer */}
      <View style={[{ flex: 1, width: 350 }]}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View>
            <FontAwesome5
              name="user-plus"
              size={60}
              color="white"
              style={[
                styles.viewIcon,
                { backgroundColor: "#3399ff", paddingTop: 17, paddingLeft: 5 },
              ]}
            />
          </View>
          <View>
            <FontAwesome
              name="wifi"
              size={70}
              color="white"
              style={[
                styles.viewIcon,
                { backgroundColor: "#F09C42", paddingTop: 17 },
              ]}
            />
          </View>
          <View>
            <FontAwesome
              name="facebook-f"
              size={80}
              color="white"
              style={[
                styles.viewIcon,
                { backgroundColor: "#3b5998", paddingTop: 17 },
              ]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default EndScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewInput: {
    height: 50,
    width: 360,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.2,
    marginBottom: 30,
    flexDirection: "row",
  },
  button: {
    height: 55,
    width: 360,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1769ff",
    borderRadius: 12,
  },
  text: {
    marginTop: 18,
    fontSize: 20,
  },
  viewIcon: {
    width: 100,
    height: 100,
    textAlign: "center",
    borderRadius: 15,
  },
});
