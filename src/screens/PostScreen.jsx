import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDispatch } from "react-redux";
import { mainSlice } from "../store/reducers/mainSlice";
import { s } from "../styles";

export const PostScreen = ({ route }) => {
  const { postId, postText, postImg, postBooked, postDate } = route.params;
  const { deletePost } = mainSlice.actions;

  const dispatch = useDispatch();

  const onDeletePost = () =>
    Alert.alert("Delete post alert", "Are you sure?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "YES",
        onPress: () => dispatch(deletePost(postId)),
        style: "destructive",
      },
    ]);

  return (
    <View>
      <ImageBackground style={s.postImage} source={{ uri: postImg }}>
        <View style={s.postTextWrap}>
          <Text style={s.postTitle}>{postDate}</Text>
        </View>
      </ImageBackground>
      <Text style={s.postName}>postName</Text>
      <Text style={s.postText}>{postText}</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        style={s.postDeleteButton}
        onPress={onDeletePost}
      >
        <Text style={s.postTextDeleteButton}>Delete post?</Text>
      </TouchableOpacity>
    </View>
  );
};
