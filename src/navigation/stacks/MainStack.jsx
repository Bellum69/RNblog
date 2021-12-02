import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DrawerActions } from "@react-navigation/native";
//
import { MainScreen } from "../../screens/MainScreen";
import { PostScreen } from "../../screens/PostScreen";
//
import { BookmarkInPost } from "../../components/bookmarkInPost";
import { DrawerButton } from "../../components/drawerButton";

//
import names from "../names";
import { THEME } from "../../styles/theme";

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={names.Main}
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.MAIN_COLOR,
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name={names.Main}
        component={MainScreen}
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
            <BookmarkInPost
              bookmarkStatus={route.params.postBooked}
              postId={route.params.postId}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};
