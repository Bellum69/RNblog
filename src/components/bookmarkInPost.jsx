import React from "react";
import { Pressable, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBookmark, faAd } from "@fortawesome/free-solid-svg-icons";

export const BookmarkInPost = ({ bookmarkStatus }) => {
  const onPress = () => {
    console.log(bookmarkStatus);
  };
  return (
    <Pressable onPress={onPress || {}} onLongPress={onPress || {}}>
      <View style={{ marginRight: 15 }}>
        {bookmarkStatus ? (
          <FontAwesomeIcon size={30} icon={faBookmark} color={"white"} />
        ) : (
          <FontAwesomeIcon size={30} icon={faAd} color={"white"} />
        )}
      </View>
    </Pressable>
  );
};
