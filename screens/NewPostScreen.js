import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import AddNewPost from "../components/newPost/AddNewPost";
import GlobalStyles from "../styles/GlobalStyles";

const NewPostScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
  );
};

export default NewPostScreen;
