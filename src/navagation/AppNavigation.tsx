import { createStackNavigator } from "@react-navigation/stack";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";

const Stack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Main"} component={MainScreen} />

      <Stack.Screen name={"Post"} component={PostScreen} />
    </Stack.Navigator>
  );
};
