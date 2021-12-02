import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView } from "react-native";
import { s } from "../styles";
import { Post } from "../components/post";
import names from "../navigation/names";
import { DATA } from "../data";
import { mainSlice } from "../store/reducers/mainSlice";

export const MainScreen = ({ navigation }) => {
  const { getPosts } = mainSlice.actions;
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.mainReducer.allPosts);
  useEffect(() => {
    if (allPosts.length < 1) {
      dispatch(getPosts(DATA));
    }
  }, []);

  const onOpen = (post) => {
    navigation.navigate(names.Post, {
      postId: post.id,
      postText: post.text,
      postImg: post.img,
      postBooked: post.booked,
      postDate: post.date,
    });
  };
  if (allPosts.length < 1) return null;

  const mappedPosts = allPosts.payload.map((item) => (
    <Post key={item.id} post={item} onOpen={onOpen} />
  ));

  return <ScrollView style={s.wrapper}>{mappedPosts}</ScrollView>;
};
