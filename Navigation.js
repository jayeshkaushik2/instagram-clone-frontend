import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import NewPostScreen from "./screens/NewPostScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";
import ReelScreen from "./screens/ReelScreen";

const Stack = createStackNavigator();

const screenOptions = {
  headerShown: false,
};

const SignedInStack = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="ReelScreen"
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
        name="ProfileScreen"
        component={ProfileScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="ReelScreen"
        component={ReelScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={screenOptions}
      />

      {/* Authentication pages */}
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={screenOptions}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={screenOptions}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default SignedInStack;
