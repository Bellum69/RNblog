import React from "react";
import { ScrollView } from "react-native";
import { s } from "../styles";
import { DATA } from "../data";
import { Post } from "../components/post";

export const MainScreen = () => {
  const mappedData = DATA.map((item) => (
    <Post
      key={item.id}
      id={item.id}
      img={item.img}
      text={item.text}
      date={item.date}
      booked={item.booked}
    />
  ));

  return <ScrollView style={s.wrapper}>{mappedData}</ScrollView>;
};
