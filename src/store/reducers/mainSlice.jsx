import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const setData = async (value, key) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};

const getData = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const initialState = {
  allPosts: getData("allPosts") || [],
  bookmarksPosts: getData("bookedPosts") || [],
};

export const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    getPosts(state, action) {
      state.allPosts = action.payload;
      setData(state.allPosts, "allPosts");
    },
    getBookedPosts(state, action) {
      state.bookedPosts = action.payload.filter((post) => post.booked);
      setData(state.bookedPosts, "bookedPosts");
    },
    changeBookmarkStatus(state, action) {
      const itemIndex = state.allPosts.payload.findIndex(
        (item) => item.id === action.payload.id
      );

      state.allPosts.payload[itemIndex].booked =
        !state.allPosts.payload[itemIndex].booked;

      setData(state.bookedPosts, "bookedPosts");
    },

    addPost(state, action) {
      state.allPosts.push(action);
      setData(state.allPosts, "allPosts");
    },
    deletePost(state, action) {
      state.allPosts = state.allPosts.filter(
        (post) => post.id !== action.payload
      );
      setData(state.allPosts, "allPosts");
    },
  },
});

export default mainSlice.reducer;
