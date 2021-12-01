import React from "react";
import { ScrollView } from "react-native";
import { s } from "../styles";
import { DATA } from "../data";
import { Post } from "../components/post";
import names from "../navigation/names";

export const BookedScreen = ({ navigation }) => {
  const onOpen = (post) => {
    navigation.navigate(names.Post, {
      postId: post.id,
      postText: post.text,
      postImg: post.img,
      postBooked: post.booked,
      postDate: post.date,
    });
  };

  const bookedData = DATA.filter((post) => post.booked).map((item) => (
    <Post key={item.id} post={item} onOpen={onOpen} />
  ));

  return <ScrollView style={s.wrapper}>{bookedData}</ScrollView>;
};
