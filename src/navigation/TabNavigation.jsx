import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//
import names from "./names";
import { MainStack } from "./MainStack";
import { BookmarksStack } from "./BookmarksStack";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome, faBookOpen } from "@fortawesome/free-solid-svg-icons";

const Tab = createBottomTabNavigator();

const screenOptions = (route, color) => {
  let iconName;

  switch (route.name) {
    case names.Main:
      iconName = faHome;
      break;
    case names.Bookmarks:
      iconName = faBookOpen;
      break;
    default:
      break;
  }

  return <FontAwesomeIcon size={30} icon={iconName} color="red" />;
};

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => screenOptions(route, color),
      })}
    >
      <Tab.Screen name={names.Main} component={MainStack} />
      <Tab.Screen name={names.Bookmarks} component={BookmarksStack} />
    </Tab.Navigator>
  );
};
