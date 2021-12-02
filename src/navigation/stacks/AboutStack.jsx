import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//
import { AboutScreen } from "../../screens/AboutScreen";
//
import { DrawerButton } from "../../components/drawerButton";
import { DrawerActions } from "@react-navigation/native";
//
import names from "../names";
import { THEME } from "../../styles/theme";

const Stack = createStackNavigator();

export const AboutStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={names.AboutUs}
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.MAIN_COLOR,
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name={names.AboutUs}
        component={AboutScreen}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerLeft: () => (
            <DrawerButton
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};
