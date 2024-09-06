import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const Screen1_a = () => {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <AntDesign
          name="smileo"
          size={150}
          color="black"
          style={{ marginTop: 50 }}
        />
      </View>

      <View style={[styles.view]}>
        <Text style={styles.text}>GROW {"\n"} YOUR BUSINESS</Text>
      </View>

      <View style={styles.view}>
        <Text style={styles.txt_desc}>
          We will hepl you to grow your business using online sever
        </Text>
      </View>

      <View style={{flex:1}}>
        <View style={styles.view_btn}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btn_Text}>LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btn_Text}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.viewBottom}>
          <Text style={styles.textBottom}>HOW WE WORK?</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  view: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "600",
    textAlign: "center",
  },
  txt_desc: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
  },
  view_btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "70%",
  },
  btn: {
    backgroundColor: "orange",
    paddingHorizontal: 25,
    paddingVertical: 12,
    width: 130,
    height: 50,
  },
  btn_Text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  viewBottom: {
    alignItems: "center",
    marginTop: 30,
  },
  textBottom: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Screen1_a;
