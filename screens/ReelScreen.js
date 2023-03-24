import { SafeAreaView, Text } from "react-native";
import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import BottomTabs from "../components/home/BottomTabs";
import ReelView from "../components/Reel/ReelView";

const ReelScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <ReelView />
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};

export default ReelScreen;
