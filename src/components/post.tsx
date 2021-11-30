import React, { FC } from "react";
import { View, Text, ImageBackground } from "react-native";
import { s } from "../styles";

interface IPost {
  id: string;
  img: string;
  text: string;
  date: string;
  booked: boolean;
}

export const Post: FC<IPost> = ({ id, img, text, date, booked }) => {
  return (
    <View style={s.post}>
      <ImageBackground style={s.postImage} source={{ uri: img }}>
        <View style={s.postTextWrap}>
          <Text style={s.postTitle}>{date}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
