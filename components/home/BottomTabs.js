import {
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
} from "react-native";
import React from "react";

const BottomTabs = ({ navigation }) => {
  const [activeTab, setActiveTab] = React.useState("home");

  const handleClick = (page) => {
    setActiveTab(page);
    console.log("page is ", page, activeTab);
    if (page === "post") {
      navigation.push("NewPostScreen");
    } else if (page === "home") {
      navigation.push("HomeScreen");
    } else if (page === "profile") {
      navigation.push("ProfileScreen");
    } else if (page === "search") {
      navigation.push("SearchScreen");
    } else if (page === "reel") {
      navigation.push("ReelScreen");
    } else {
      navigation.push("HomeScreen");
    }
  };

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

export default BottomTabs;
