import { SafeAreaView, Text } from "react-native";
import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import BottomTabs from "../components/home/BottomTabs";

const SearchScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <Text>ProfileScreen</Text>
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};

export default SearchScreen;
