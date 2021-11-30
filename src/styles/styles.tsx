import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    padding: 30,
  },
  post: {
    marginBottom: 15,
    overflow: "hidden",
  },
  postImage: {
    width: "100%",
    height: 200,
  },
  postTextWrap: {
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    width: "100%",
  },
  postTitle: {
    color: "white",
  },
  postText: {
    marginLeft: 5,
    fontSize: 15,
  },
  postDeleteButton: {
    backgroundColor: "red",
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  postTextDeleteButton: {
    color: "white",
    fontSize: 30,
  },
  postName: {
    fontSize: 30,
    alignSelf: "center",
  },
});
