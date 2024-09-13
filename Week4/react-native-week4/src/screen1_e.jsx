import {
  Button,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React from "react";
  
  import AntDesign from "@expo/vector-icons/AntDesign";
  
  const Screen1_e = () => {
    return (
      <View style={styles.container}>
        {/* REGISTER */}
        <View style={[{ flex: 1, justifyContent: "center" }]}>
          <Text style={{ fontSize: 50, fontWeight: "bold" }}>REGISTER</Text>
        </View>
        {/* Input */}
        <View
          style={[
            { flex: 2, justifyContent: "space-between", alignItems: "center" },
          ]}
        >
          <View style={styles.viewInput}>
            <TextInput placeholder="Name" style={{ fontSize: 18 }} />
          </View>
          <View style={styles.viewInput}>
            <TextInput placeholder="Phone" style={{ fontSize: 18 }} />
          </View>
          <View style={styles.viewInput}>
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
          <View style={styles.viewInput}>
            <TextInput placeholder="Birthday" style={{ fontSize: 18 }} />
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: 'center',justifyContent: 'space-between' , marginRight: 60}}>
              <View style={styles.radioButton}></View>
              <Text style={{fontSize: 18}}>Male</Text>
              <View style={styles.radioButton}></View>
              <Text style={{fontSize: 18}}>Female</Text>
            </View>
          </View>
        </View>
        {/* Button */}
        <View
          style={[{ flex: 1, alignItems: "center", justifyContent: "center" }]}
        >
          <TouchableOpacity style={styles.button}>
            <Text style={{ fontWeight: "bold", fontSize: 25, color: "white" }}>
              REGISTER
            </Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.text}>
              When you agree to terms and conditions
            </Text>
          </View>
        </View>
      </View>
    );
  };
  
  export default Screen1_e;
  
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
      borderWidth: 0.2,
      paddingHorizontal: 18,
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
    radioButton: {
      height: 30,
      width: 30,
      borderRadius: 100,
      borderWidth: 1,
      marginHorizontal: 20,
    },
  });
  