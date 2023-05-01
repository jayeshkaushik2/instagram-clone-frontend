import {
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";
import React, { useEffect, useState, memo } from "react";

const BottomTabs = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState("home");
  const [prevActiveTab, setPrevActiveTab] = useState("home");

  const handleClick = (page) => {
    console.log("route to page", page);
    setActiveTab(page);
  };

  useEffect(() => {
    console.log("active tab", activeTab, prevActiveTab);
    if (activeTab === prevActiveTab) {
      return;
    } else {
      console.log("update tab to", activeTab);
      setPrevActiveTab(activeTab);
      if (activeTab === "post") {
        navigation.push("NewPostScreen");
      } else if (activeTab === "home") {
        navigation.push("HomeScreen");
      } else if (activeTab === "profile") {
        navigation.push("ProfileScreen");
      } else if (activeTab === "search") {
        navigation.push("SearchScreen");
      } else if (activeTab === "reel") {
        navigation.push("ReelScreen");
      }
    }
  }, [activeTab, prevActiveTab]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity onPress={() => handleClick("home")}>
        <Image
          style={styles.footerIcon}
          source={
            activeTab === "home"
              ? require("../../assets/icons/home-filled.png")
              : require("../../assets/icons/home.png")
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleClick("search")}>
        <Image
          style={styles.footerIcon}
          source={
            activeTab === "search"
              ? require("../../assets/icons/search-filled.png")
              : require("../../assets/icons/search.png")
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleClick("post")}>
        <Image
          style={styles.footerIcon}
          source={require("../../assets/icons/more.png")}
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleClick("reel")}>
        <Image
          style={styles.footerIcon}
          source={
            activeTab === "reel"
              ? require("../../assets/icons/reel-filled.png")
              : require("../../assets/icons/reel.png")
          }
        />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleClick("profile")}>
        <Image
          source={{
            uri: "https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg",
          }}
          style={[
            activeTab === "profile" ? styles.activeProfile : styles.profile,
          ]}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 15 : 0,
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
  },
  footerIcon: { width: 25, height: 25 },
  profile: {
    width: 27,
    height: 27,
    borderRadius: 50,
  },
  activeProfile: {
    width: 27,
    height: 27,
    borderRadius: 50,
    borderColor: "white",
    borderWidth: 1.5,
  },
});

export default memo(BottomTabs);
