import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import { s } from "../styles";

export const PostScreen = ({ route }: any) => {
  const { Id, Text, Img, Booked, Date } = route.params;

  const onDeletePost = () =>
    Alert.alert("Delete post alert", "Are you sure?", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "YES",
        onPress: () => console.log("OK Pressed"),
        style: "destructive",
      },
    ]);

  return (
    <View>
      <ImageBackground style={s.postImage} source={{ uri: Img }}>
        <View style={s.postTextWrap}>
          <Text style={s.postTitle}>{Date}</Text>
        </View>
      </ImageBackground>
      <Text style={s.postName}>postName</Text>
      <Text style={s.postText}>{Text}</Text>
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
