import React from "react";
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";

import { s } from "../styles";

export const Post = ({ post, onOpen }) => {
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
