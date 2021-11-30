import React from "react";
import { ScrollView } from "react-native";
import { s } from "../styles";
import { DATA } from "../data";
import { Post } from "../components/post";
import names from "../navigation/names";
import { IPost } from "./types";

export const MainScreen = ({ navigation }: any): JSX.Element => {
  const onOpen = (post: IPost) => {
    navigation.navigate(names.Post, {
      Id: post.id,
      Text: post.text.toUpperCase(),
      Img: post.img,
      Booked: post.booked,
      Date: post.date,
    });
  };

  const mappedData = DATA.map((item) => (
    <Post key={item.id} post={item} onOpen={onOpen} />
  ));

  return <ScrollView style={s.wrapper}>{mappedData}</ScrollView>;
};
