import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//
import { PostScreen } from "../../screens/PostScreen";
import { BookedScreen } from "../../screens/BookedScreen";
//
import { BookmarkInPost } from "../../components/bookmarkInPost";
import { DrawerButton } from "../../components/drawerButton";
import { DrawerActions } from "@react-navigation/native";
//
import names from "../names";
import { THEME } from "../../styles/theme";

const Stack = createStackNavigator();

export const BookmarksStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={names.Bookmarks}
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.MAIN_COLOR,
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name={names.Bookmarks}
        component={BookedScreen}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerLeft: () => (
            <DrawerButton
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          ),
        })}
      />
      <Stack.Screen
        name={names.Post}
        component={PostScreen}
        options={({ route }) => ({
          title: route.params.postId,
          headerTitleAlign: "center",
          headerRight: () => (
            <BookmarkInPost bookmarkStatus={route.params.postBooked} />
          ),
        })}
      />
    </Stack.Navigator>
  );
};
