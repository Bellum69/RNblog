import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import names from "./names";
import { THEME } from "../styles/theme";
const Stack = createStackNavigator();

export const AppNavigation = () => {
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
        options={{
          title: names.Main,
        }}
      />
      <Stack.Screen
        name={names.Post}
        component={PostScreen}
        options={({ route }) => ({ title: route.params.Id })}
      />
    </Stack.Navigator>
  );
};
