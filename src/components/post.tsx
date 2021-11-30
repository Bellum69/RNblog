import React, { FC } from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

import { IPost } from "../screens/types";
import { s } from "../styles";

interface IPostProps {
  post: IPost;
  onOpen: any;
}

export const Post: FC<IPostProps> = ({ post, onOpen }) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={() => onOpen(post)}>
      <View style={s.post}>
        <ImageBackground style={s.postImage} source={{ uri: post.img }}>
          <View style={s.postTextWrap}>
            <Text style={s.postTitle}>{post.date}</Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};
