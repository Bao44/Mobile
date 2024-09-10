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
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Screen1_d = () => {
  return (
    <View style={styles.container}>
      {/* Login */}
      <View style={[{ flex: 1 , justifyContent: 'center'}]}>
        <Text style={{fontSize: 50, fontWeight:'bold'}}>LOGIN</Text>
      </View>
      {/* Input */}
      <View style={[{ flex: 1, justifyContent: "center" }]}>
        <View style={styles.viewEmail}>
          <TextInput placeholder="Email" style={{ fontSize: 18 }} />
        </View>
        <View style={styles.viewPassword}>
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={{ fontSize: 18, flex: 1 }}
          />
          <AntDesign name="eye" size={30} color="black" />
        </View>
      </View>
      {/* Button */}
      <View style={[{ flex: 1, alignItems: "center" }]}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ fontWeight: "bold", fontSize: 25, color: "white" }}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text}>
            When you agree to terms and conditions
          </Text>
          <Text style={[styles.text, { color: "blue" }]}>
            For got your password?
          </Text>
          <Text style={styles.text}>Or login with</Text>
        </View>
      </View>
      {/* Footer */}
      <View style={[{ flex: 1, justifyContent: "center" }]}>
        <View style={{ flexDirection: "row" }}>
          <View>
            <FontAwesome
              name="facebook-f"
              size={40}
              color="white"
              style={[
                styles.viewIcon,
                { backgroundColor: "#3b5998", paddingTop: 10 },
              ]}
            />
          </View>
          <View>
            <FontAwesome6
              name="z"
              size={40}
              color="white"
              style={[
                styles.viewIcon,
                { backgroundColor: "#0077b5", paddingTop: 7 },
              ]}
            />
          </View>
          <View>
            <AntDesign
              name="google"
              size={45}
              color="white"
              style={[
                styles.viewIcon,
                {
                  color: "black",
                  borderWidth: 2,
                  borderColor: "#0077b5",
                  paddingTop: 5,
                },
              ]}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Screen1_d;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewEmail: {
    height: 50,
    width: 360,
    justifyContent: "center",
    borderWidth: 0.2,
    paddingHorizontal: 18,
    marginBottom: 30,
  },
  viewPassword: {
    height: 50,
    width: 360,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.2,
    paddingHorizontal: 18,
    flexDirection: "row",
  },
  button: {
    height: 55,
    width: 360,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  text: {
    textAlign: "center",
    marginTop: 18,
    fontSize: 16,
  },
  viewIcon: {
    width: 120,
    height: 55,
    textAlign: "center",
  },
});
