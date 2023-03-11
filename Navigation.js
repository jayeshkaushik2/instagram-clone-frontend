import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";
import LoginScreen from "./screens/LoginScreen";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={screenOptions}
    >
      <Stack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="NewPostScreen"
        component={NewPostScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default SignedInStack;
