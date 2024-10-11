import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { getNotes, addNote, deleteNote, updateNote } from "../api.js";
import { useFocusEffect } from "@react-navigation/native";

const Screen2 = ({ navigation, route }) => {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);


  useFocusEffect(
    useCallback(() => {
      const fetchNotes = async () => {
        try {
          const data = await getNotes();
          setNotes(data);
          setFilteredData(data); 
        } catch (error) {
          console.error("Failed to fetch notes:", error);
        }
      };
      fetchNotes();
    }, [])
  );

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id)); // Update notes
      setFilteredData((prevFiltered) => prevFiltered.filter((note) => note.id !== id)); // Update filtered data
    } catch (error) {
      console.error("Failed to delete note:", error);
    }
  };

  const handleEdit = (note) => {
    navigation.navigate("Screen3", { note, title: "UPDATE YOUR JOB" });
  };


  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = notes.filter((item) => {
        const description = item.description ? item.description.toLowerCase() : "";
        return description.includes(query.toLowerCase());
      });
      setFilteredData(filtered);
    } else {
      setFilteredData(notes); // Show all notes if search query is empty
    }
  };

  const renderNotes = ({ item }) => (
    <View style={styles.viewNotes}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: "70%",
        }}
      >
        <TouchableOpacity>
          <Fontisto name="checkbox-active" size={24} color="green" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, paddingHorizontal: 10 }}>
          {item.description}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "20%",
        }}
      >
        <TouchableOpacity onPress={() => handleEdit(item)}>
          <FontAwesome6 name="pen-to-square" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
          <MaterialIcons name="delete" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View>
      {/* Search Input */}
      <View style={styles.input}>
        <AntDesign
          name="search1"
          size={24}
          color="black"
          style={{ marginHorizontal: 5 }}
        />
        <TextInput
          placeholder="Search"
          style={{ fontSize: 18, paddingRight: 250 }}
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>

      {/* Notes List */}
      <FlatList
        data={filteredData} // Show filtered notes
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderNotes}
      />

      {/* Add Button */}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Screen3", { title: "ADD YOUR JOB" })
        }
        style={styles.buttonAdd}
      >
        <AntDesign
          name="plus"
          size={32}
          color="white"
          style={{ textAlign: "center", marginTop: 13 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Screen2;

const styles = StyleSheet.create({
  input: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 40,
    marginHorizontal: 20,
    padding: 10,
  },
  viewNotes: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 30,
    backgroundColor: "lightgray",
    padding: 20,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  buttonAdd: {
    backgroundColor: "#00BDD6",
    borderRadius: 50,
    padding: 10,
    width: 80,
    height: 80,
    marginVertical: 40,
    alignSelf: "center",
  },
});
