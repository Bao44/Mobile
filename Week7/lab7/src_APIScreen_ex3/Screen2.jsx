import {
  Button,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const Screen2 = ({ navigation }) => {
  return (
    <View style={{ paddingVertical: 50 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Pressable
          onPress={() => navigation.navigate("Screen1")}
          style={styles.button}
        >
          <AntDesign name="left" size={26} color="gray" />
        </Pressable>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Shops Near Me</Text>
        <AntDesign name="search1" size={30} color="green" />
      </View>
      <ScrollView showsHorizontalScrollIndicator={false}>

        <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('Screen3')}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/Image (3).png")}
              style={{ borderRadius: 10, width: 420, height: 150 }}
            />
          </View>
          <View style={styles.flexDirection}>
            <View style={[styles.flexDirection, {backgroundColor: 'rgba(0,0,0,0.07)'}]}>
              <Entypo name="check" size={28} color="green" />
              <Text style={{color: 'green', fontSize: 18}}>Accepting Orders</Text>
            </View>
            <View style={[styles.flexDirection, {backgroundColor: 'rgba(0,0,0,0.07)'}]}>
              <AntDesign name="clockcircleo" size={24} color="green" />
              <Text style={{color: 'red', fontSize: 18, marginLeft: 5}}>5-10 minutes</Text>
            </View>
            <Ionicons name="location-sharp" size={26} color="green" />
          </View>
          <Text style={{fontSize: 20, fontWeight:  'bold', marginLeft: 10}}>Kitanda Espresso & Acai-U District</Text>
          <Text style={{fontSize: 16, padding: 10}}>1121 NE 45 St</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('Screen3')}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/Image.png")}
              style={{ borderRadius: 10, width: 420, height: 150 }}
            />
          </View>
          <View style={styles.flexDirection}>
            <View style={[styles.flexDirection, {backgroundColor: 'rgba(0,0,0,0.07)'}]}>
            <FontAwesome6 name="bag-shopping" size={24} color="red"/>
              <Text style={{color: 'red', fontSize: 18, marginLeft: 10}}>Tempory Unavailable</Text>
            </View>
            <View style={[styles.flexDirection, {backgroundColor: 'rgba(0,0,0,0.07)'}]}>
              <AntDesign name="clockcircleo" size={24} color="green" />
              <Text style={{color: 'red', fontSize: 18, marginLeft: 5}}>10-15 minutes</Text>
            </View>
            <Ionicons name="location-sharp" size={26} color="green" />
          </View>
          <Text style={{fontSize: 20, fontWeight:  'bold', marginLeft: 10}}>Jewel Box Cafe</Text>
          <Text style={{fontSize: 16, padding: 10}}>1145 GE 54 St</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('Screen3')}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/Image (1).png")}
              style={{ borderRadius: 10, width: 420, height: 150 }}
            />
          </View>
          <View style={styles.flexDirection}>
            <View style={[styles.flexDirection, {backgroundColor: 'rgba(0,0,0,0.07)'}]}>
            <FontAwesome6 name="bag-shopping" size={24} color="red"/>
              <Text style={{color: 'red', fontSize: 18, marginLeft: 10}}>Tempory Unavailable</Text>
            </View>
            <View style={[styles.flexDirection, {backgroundColor: 'rgba(0,0,0,0.07)'}]}>
              <AntDesign name="clockcircleo" size={24} color="green" />
              <Text style={{color: 'red', fontSize: 18, marginLeft: 5}}>15-29 minutes</Text>
            </View>
            <Ionicons name="location-sharp" size={26} color="green" />
          </View>
          <Text style={{fontSize: 20, fontWeight:  'bold', marginLeft: 10}}>Javasti Cafe</Text>
          <Text style={{fontSize: 16, padding: 10}}>1167 GE 54 St</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate('Screen3')}>
          <View style={{ alignItems: "center" }}>
            <Image
              source={require("../assets/Image (5).png")}
              style={{ borderRadius: 10, width: 420, height: 150 }}
            />
          </View>
          <View style={styles.flexDirection}>
            <View style={[styles.flexDirection, {backgroundColor: 'rgba(0,0,0,0.07)'}]}>
            <FontAwesome6 name="bag-shopping" size={24} color="red"/>
              <Text style={{color: 'red', fontSize: 18, marginLeft: 10}}>Tempory Unavailable</Text>
            </View>
            <View style={[styles.flexDirection, {backgroundColor: 'rgba(0,0,0,0.07)'}]}>
              <AntDesign name="clockcircleo" size={24} color="green" />
              <Text style={{color: 'red', fontSize: 18, marginLeft: 5}}>15-29 minutes</Text>
            </View>
            <Ionicons name="location-sharp" size={26} color="green" />
          </View>
          <Text style={{fontSize: 20, fontWeight:  'bold', marginLeft: 10}}>Javasti Cafe</Text>
          <Text style={{fontSize: 16, padding: 10}}>1167 GE 54 St</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  button: {
    alignSelf: "flex-start",
    padding: 5,
    borderRadius: 10,
    backgroundColor: "rgba(0,0,0,0.07)",
  },
  touchable: {
    marginHorizontal: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 30,
  },
  flexDirection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
});