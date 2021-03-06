import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
//
import { CreateScreen } from "../../screens/CreateScreen";
//
import { DrawerButton } from "../../components/drawerButton";
import { DrawerActions } from "@react-navigation/native";
//
import names from "../names";
import { THEME } from "../../styles/theme";

const Stack = createStackNavigator();

export const CreateStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={names.Create}
      screenOptions={{
        headerStyle: {
          backgroundColor: THEME.MAIN_COLOR,
        },
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name={names.Create}
        component={CreateScreen}
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
