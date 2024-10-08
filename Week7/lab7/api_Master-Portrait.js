import axios from "axios";

const API_URL = "https://67053a45031fd46a830f29cc.mockapi.io/api/MasterPortrait/MasterPortrait";

export const getItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

export const addItem = async (note) => {
  try {
    const response = await axios.post(API_URL, note);
    return response.data;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
};

export const deleteItem = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
};

export const updateItem = async (id, updatedNote) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, updatedNote);
    return response.data;
  } catch (error) {
    console.error("Error updating item:", error);
    throw error;
  }
};
