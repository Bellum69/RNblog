import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ScrollView } from "react-native";
import { s } from "../styles";
import { Post } from "../components/post";
import names from "../navigation/names";
import { mainSlice } from "../store/reducers/mainSlice";

export const BookedScreen = ({ navigation }) => {
  const { getBookedPosts } = mainSlice.actions;
  const dispatch = useDispatch();
  const allPosts = useSelector((state) => state.mainReducer.allPosts.payload);
  useEffect(() => {
    dispatch(getBookedPosts(allPosts));
  }, [allPosts]);

  const bookedPosts = useSelector((state) => state.mainReducer.bookedPosts);
  const onOpen = (post) => {
    navigation.navigate(names.Post, {
      postId: post.id,
      postText: post.text,
      postImg: post.img,
      postBooked: post.booked,
      postDate: post.date,
    });
  };
  if (bookedPosts.length < 1) return null;
  console.log(allPosts);
  console.log(bookedPosts);

  const mappedPosts = bookedPosts.map((item) => (
    <Post key={item.id} post={item} onOpen={onOpen} />
  ));

  return <ScrollView style={s.wrapper}>{mappedPosts}</ScrollView>;
};
