import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import LoginForm from "../components/Authentication/LoginForm";

const INSTAGRAM_LOGO = "../assets/icons/logo.png";

const LoginScreen = () => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        source={require("../assets/icons/instagram.png")}
        style={{ height: 95, width: 95 }}
      />
    </View>
    <LoginForm />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 12,
    backgroundColor: "white",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});

export default LoginScreen;
