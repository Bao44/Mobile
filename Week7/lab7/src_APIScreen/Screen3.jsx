// import {
//   Image,
//   StyleSheet,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import React, { useEffect, useState } from "react";
// import AntDesign from "@expo/vector-icons/AntDesign";
// import { getNotes, addNote, deleteNote, updateNote } from "../api.js";

// const Screen3 = ({ navigation, route }) => {
//   const { name, title, note } = route.params;
//   const [newNote, setNewNote] = useState("");
//   const [description, setDescription] = useState("");

//   const handleAddNote = async () => {
//     if (newNote.trim()) {
//       try {
//         await addNote({ description: newNote });
//         navigation.navigate("Screen2", { name }); // Quay lại Screen2 sau khi thêm
//       } catch (error) {
//         console.error("Failed to add note:", error);
//       }
//     }
//   };

//   useEffect(() => {
//     if (note) {
//       setDescription(note.description); // Nếu có note thì hiển thị nội dung cần sửa
//     }
//   }, [note]);

//   const handleSave = async () => {
//     if (note) {
//       // Nếu có note thì cập nhật
//       await updateNote(note.id, { description });
//     } else {
//       // Nếu không có note thì thêm mới
//       await addNote({ content });
//     }
//     navigation.navigate("Screen2"); // Quay lại Screen2 sau khi cập nhật xong
//   };
//   return (
//     <View>
//       <Text style={styles.textHeader}>{title}</Text>
//       <View style={styles.input}>
//         <AntDesign name="filetext1" size={28} color="green" />
//         <TextInput
//           value={newNote}
//           onChangeText={setNewNote}
//           style={{ paddingRight: 250, paddingLeft: 10, fontSize: 18 }}
//         />
//       </View>
//       <TouchableOpacity style={styles.button} onPress={handleAddNote}>
//         <Text style={{ color: "white", fontSize: 20 }}>FINISH</Text>
//       </TouchableOpacity>
//       <Image source={require("../assets/Image 95.png")} style={styles.image} />
//     </View>
//   );
// };

// export default Screen3;

// const styles = StyleSheet.create({
//   textHeader: {
//     color: "#8353E2",
//     fontWeight: "bold",
//     fontSize: 40,
//     textAlign: "center",
//     marginVertical: 40,
//     marginTop: 150,
//   },
//   input: {
//     flexDirection: "row",
//     alignItems: "center",
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: "gray",
//     marginVertical: 40,
//     marginHorizontal: 30,
//     padding: 10,
//   },
//   button: {
//     backgroundColor: "#00BDD6",
//     width: 150,
//     height: 50,
//     borderRadius: 12,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "center",
//     alignSelf: "center",
//   },
//   image: {
//     alignSelf: "center",
//     marginTop: 100,
//   },
// });

import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { addNote, updateNote } from "../api.js";

const Screen3 = ({ navigation, route }) => {
  const { name, title, note } = route.params;
  const [noteContent, setNoteContent] = useState(""); // Sử dụng chung cho cả thêm và cập nhật

  // Khi màn hình mở ra, kiểm tra nếu có note để cập nhật thì hiển thị giá trị ban đầu
  useEffect(() => {
    if (note) {
      setNoteContent(note.description); // Hiển thị ghi chú cần sửa
    }
  }, [note]);

  // Thêm hoặc cập nhật ghi chú
  const handleSave = async () => {
    if (noteContent.trim()) {
      try {
        if (note) {
          // Cập nhật ghi chú nếu đang sửa
          await updateNote(note.id, { description: noteContent });
        } else {
          // Thêm mới nếu không có ghi chú
          await addNote({ description: noteContent });
        }
        navigation.navigate("Screen2", { name }); // Quay lại Screen2 sau khi thêm/cập nhật
      } catch (error) {
        console.error("Failed to save note:", error);
      }
    }
  };
  

  return (
    <View>
      <Text style={styles.textHeader}>{title}</Text>
      <View style={styles.input}>
        <AntDesign name="filetext1" size={28} color="green" />
        <TextInput
          value={noteContent}
          onChangeText={setNoteContent}
          style={{ paddingRight: 250, paddingLeft: 10, fontSize: 18 }}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={{ color: "white", fontSize: 20 }}>
          {note ? "UPDATE" : "FINISH"}
        </Text>
      </TouchableOpacity>
      <Image source={require("../assets/Image 95.png")} style={styles.image} />
    </View>
  );
};

export default Screen3;

const styles = StyleSheet.create({
  textHeader: {
    color: "#8353E2",
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    marginVertical: 40,
    marginTop: 150,
  },
  input: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "gray",
    marginVertical: 40,
    marginHorizontal: 30,
    padding: 10,
  },
  button: {
    backgroundColor: "#00BDD6",
    width: 150,
    height: 50,
    borderRadius: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  image: {
    alignSelf: "center",
    marginTop: 100,
  },
});
