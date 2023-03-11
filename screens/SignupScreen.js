import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import SignupForm from "../components/Authentication/SignupForm";

const INSTAGRAM_LOGO = "../assets/icons/logo.png";

const SignupScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image
        source={require("../assets/icons/instagram.png")}
        style={{ height: 95, width: 95 }}
      />
    </View>
    <SignupForm navigation={navigation} />
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

export default SignupScreen;
