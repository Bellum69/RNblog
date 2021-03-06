import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerMain } from "../components/drawerMain";
import { Dimensions } from "react-native";
//
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faCode, faBullhorn } from "@fortawesome/free-solid-svg-icons";
//
import { AboutStack } from "./stacks/AboutStack";
import { TabStack } from "./stacks/TabStack";
import { CreateStack } from "./stacks/CreateStack";
import names from "./names";

//

import { THEME } from "../styles/theme";

const { width } = Dimensions.get("screen");
const Drawer = createDrawerNavigator();

export const AppNavigation = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        width: width - 56,
      }}
      drawerContentOptions={{
        activeTintColor: "#fff",
        activeBackgroundColor: THEME.MAIN_COLOR,
        inactiveTintColor: "black",
        labelStyle: { fontSize: 24 },
      }}
      drawerContent={(props) => <DrawerMain {...props} />}
    >
      <Drawer.Screen
        name={names.Main}
        component={TabStack}
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faHome}
              size={30}
              color={focused ? "white" : "black"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={names.AboutUs}
        component={AboutStack}
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faCode}
              size={30}
              color={focused ? "white" : "black"}
            />
          ),
        }}
      />
      <Drawer.Screen
        name={names.Create}
        component={CreateStack}
        options={{
          drawerIcon: ({ focused }) => (
            <FontAwesomeIcon
              icon={faBullhorn}
              size={30}
              color={focused ? "white" : "black"}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
