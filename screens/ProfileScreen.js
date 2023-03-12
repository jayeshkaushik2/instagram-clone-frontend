import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import ProfileDetail from "../components/profile/ProfileDetail";
import ProfilePost from "../components/profile/ProfilePost";
import { Divider } from "react-native-elements";

const ProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <ProfileHeader profileData={profileData} />
      <Divider />

      <ScrollView>
        <ProfileDetail navigation={navigation} profileData={profileData} />

        <ProfilePost
          navigation={navigation}
          profilePostData={profilePostData?.results}
          profileReelData={profileReelData}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const ProfileHeader = ({ profileData }) => (
  <View style={styles.container}>
    <TouchableOpacity>
      <Text style={{ color: "white", fontWeight: "599", fontSize: 25 }}>
        {profileData?.username}
      </Text>
    </TouchableOpacity>
    <View style={styles.iconContainer}>
      <TouchableOpacity>
        <Image
          source={require("../assets/icons/hambuger-more.png")}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  </View>
);

let profileData = {
  id: 1,
  username: "jayesh.kaushik",
  first_name: "Jayesh",
  last_name: "kaushik",
  bio: "Loram uses cookies to keep our sites reliable, improve performance, and to analyze how our sites are used.Loram does not implement any ad tracking and no personal information is collected, used, or sold.",
  profile_image:
    "https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg",
  posts: 24,
  followers: 202,
  following: 88,
};

let profilePostData = {
  count: 5,
  results: [
    {
      id: 1,
      user_id: 1,
      post_images: [
        {
          id: 1,
          image:
            "https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg",
        },
        {
          id: 2,
          image:
            "https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg",
        },
      ],
    },
    {
      id: 2,
      user_id: 1,
      post_images: [
        {
          id: 1,
          image:
            "https://tse2.mm.bing.net/th?id=OIP.GD_OPKsGFnK3UVtVuyLHvAHaLH&pid=Api&P=0",
        },
      ],
    },
    {
      id: 3,
      user_id: 1,
      post_images: [
        {
          id: 1,
          image: "https://wallpaperset.com/w/full/f/8/9/115079.jpg",
        },
      ],
    },
    {
      id: 4,
      user_id: 1,
      post_images: [
        {
          id: 1,
          image:
            "https://1.bp.blogspot.com/-B1rmxqEWSXA/XxqNnzQkD9I/AAAAAAAAAq4/cE76JlLYruIRx4I2C2GtKS2RjUGAn8XawCNcBGAsYHQ/s700/tom%2Bcruise.jpg",
        },
      ],
    },
    {
      id: 5,
      user_id: 1,
      post_images: [
        {
          id: 1,
          image:
            "https://images.saymedia-content.com/.image/t_share/MTc2MjcyNjkzMjM3NzIwMjM3/the-most-handsome-actors-in-indian-film-bollywood-industry.jpg",
        },
      ],
    },
    {
      id: 1,
      user_id: 1,
      post_images: [
        {
          id: 1,
          image:
            "https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg",
        },
        {
          id: 2,
          image:
            "https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg",
        },
      ],
    },
    {
      id: 2,
      user_id: 1,
      post_images: [
        {
          id: 1,
          image:
            "https://tse2.mm.bing.net/th?id=OIP.GD_OPKsGFnK3UVtVuyLHvAHaLH&pid=Api&P=0",
        },
      ],
    },
    {
      id: 3,
      user_id: 1,
      post_images: [
        {
          id: 1,
          image: "https://wallpaperset.com/w/full/f/8/9/115079.jpg",
        },
      ],
    },
    {
      id: 4,
      user_id: 1,
      post_images: [
        {
          id: 1,
          image:
            "https://1.bp.blogspot.com/-B1rmxqEWSXA/XxqNnzQkD9I/AAAAAAAAAq4/cE76JlLYruIRx4I2C2GtKS2RjUGAn8XawCNcBGAsYHQ/s700/tom%2Bcruise.jpg",
        },
      ],
    },
    {
      id: 5,
      user_id: 1,
      post_images: [
        {
          id: 1,
          image:
            "https://images.saymedia-content.com/.image/t_share/MTc2MjcyNjkzMjM3NzIwMjM3/the-most-handsome-actors-in-indian-film-bollywood-industry.jpg",
        },
      ],
    },
    {
      id: 1,
      user_id: 1,
      post_images: [
        {
          id: 1,
          image:
            "https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg",
        },
        {
          id: 2,
          image:
            "https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg",
        },
      ],
    },
    {
      id: 2,
      user_id: 1,
      post_images: [
        {
          id: 1,
          image:
            "https://tse2.mm.bing.net/th?id=OIP.GD_OPKsGFnK3UVtVuyLHvAHaLH&pid=Api&P=0",
        },
      ],
    },
    {
      id: 3,
      user_id: 1,
      post_images: [
        {
          id: 1,
          image: "https://wallpaperset.com/w/full/f/8/9/115079.jpg",
        },
      ],
    },
    {
      id: 4,
      user_id: 1,
      post_images: [
        {
          id: 1,
          image:
            "https://1.bp.blogspot.com/-B1rmxqEWSXA/XxqNnzQkD9I/AAAAAAAAAq4/cE76JlLYruIRx4I2C2GtKS2RjUGAn8XawCNcBGAsYHQ/s700/tom%2Bcruise.jpg",
        },
      ],
    },
    {
      id: 5,
      user_id: 1,
      post_images: [
        {
          id: 1,
          image:
            "https://images.saymedia-content.com/.image/t_share/MTc2MjcyNjkzMjM3NzIwMjM3/the-most-handsome-actors-in-indian-film-bollywood-industry.jpg",
        },
      ],
    },
    {
      id: 1,
      user_id: 1,
      post_images: [
        {
          id: 1,
          image:
            "https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg",
        },
        {
          id: 2,
          image:
            "https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg",
        },
      ],
    },
    {
      id: 2,
      user_id: 1,
      post_images: [
        {
          id: 1,
          image:
            "https://tse2.mm.bing.net/th?id=OIP.GD_OPKsGFnK3UVtVuyLHvAHaLH&pid=Api&P=0",
        },
      ],
    },
    {
      id: 3,
      user_id: 1,
      post_images: [
        {
          id: 1,
          image: "https://wallpaperset.com/w/full/f/8/9/115079.jpg",
        },
      ],
    },
    {
      id: 4,
      user_id: 1,
      post_images: [
        {
          id: 1,
          image:
            "https://1.bp.blogspot.com/-B1rmxqEWSXA/XxqNnzQkD9I/AAAAAAAAAq4/cE76JlLYruIRx4I2C2GtKS2RjUGAn8XawCNcBGAsYHQ/s700/tom%2Bcruise.jpg",
        },
      ],
    },
    {
      id: 5,
      user_id: 1,
      post_images: [
        {
          id: 1,
          image:
            "https://images.saymedia-content.com/.image/t_share/MTc2MjcyNjkzMjM3NzIwMjM3/the-most-handsome-actors-in-indian-film-bollywood-industry.jpg",
        },
      ],
    },
  ],
};

let profileReelData = {
  count: 3,
  results: [
    {
      id: 1,
      user_id: 1,
      thumb: "https://wallpaperset.com/w/full/f/8/9/115079.jpg",
      views: 126,
    },
    {
      id: 2,
      user_id: 1,
      thumb: "https://wallpaperset.com/w/full/f/8/9/115079.jpg",
      views: 126,
    },
    {
      id: 3,
      user_id: 1,
      thumb: "https://wallpaperset.com/w/full/f/8/9/115079.jpg",
      views: 126,
    },
  ],
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
  },
  iconContainer: {
    flexDirection: "row",
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  icon: {
    width: 25,
    height: 25,
    marginLeft: 15,
    resizeMode: "contain",
  },
  unReadBadge: {
    backgroundColor: "red",
    position: "absolute",
    left: 25,
    bottom: 18,
    width: 25,
    height: 18,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
  unReadBadgeText: {
    color: "white",
    fontWeight: "600",
  },

  ProfileConatiner: {
    margin: 12,
    marginTop: 20,
    marginBottom: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },

  profileEditContainer: {
    margin: 12,
    marginTop: 2,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  profileEditBtn: {
    backgroundColor: "#2e2e2e",
    alignItems: "center",
    borderRadius: 5,
    padding: 5,
    paddingHorizontal: 40,
    paddingHorizontal: 40,
  },
  profileEditBtnText: { color: "white", fontWeight: "500", fontSize: 15 },
});

export default ProfileScreen;
