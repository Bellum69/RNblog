import React from "react";
import { Pressable, View } from "react-native";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBookmark, faAd } from "@fortawesome/free-solid-svg-icons";
import { mainSlice } from "../store/reducers/mainSlice";

export const BookmarkInPost = ({ bookmarkStatus, postId }) => {
  const { changeBookmarkStatus } = mainSlice.actions;
  const dispatch = useDispatch();
  const onPress = () => {
    dispatch(
      changeBookmarkStatus({
        id: postId,
        bookmarkStatus: bookmarkStatus,
      })
    );
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
