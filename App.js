import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import MemberListScreen from "./Screens/MemberListScreen";
import StartScreen from "./Screens/StartScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={StartScreen} />
        <Stack.Screen name="Active Members List" component={MemberListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
