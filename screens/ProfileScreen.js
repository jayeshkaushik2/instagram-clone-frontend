import { SafeAreaView, Text } from "react-native";
import React from "react";
import GlobalStyles from "../styles/GlobalStyles";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <Text style={{ color: "white" }}>ProfileScreen</Text>
    </SafeAreaView>
  );
};

let userData = {
  id: 1,
  username: "jayesh.kaushik",
  first_name: "jayesh",
  last_name: "kaushik",
  bio: "Loram uses cookies to keep our sites reliable, improve performance, and to analyze how our sites are used.Loram does not implement any ad tracking and no personal information is collected, used, or sold.",
  profile_image:
    "https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg",
  posts: 24,
  followers: 202,
  following: 88,
};

let userPostData = {
  count: 5,
  results: [
    {
      id: 1,
      user_id: 1,
      post_image:
        "https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg",
    },
    {
      id: 2,
      user_id: 1,
      post_image:
        "https://tse2.mm.bing.net/th?id=OIP.GD_OPKsGFnK3UVtVuyLHvAHaLH&pid=Api&P=0",
    },
    {
      id: 3,
      user_id: 1,
      post_image: "https://wallpaperset.com/w/full/f/8/9/115079.jpg",
    },
    {
      id: 4,
      user_id: 1,
      post_image:
        "https://1.bp.blogspot.com/-B1rmxqEWSXA/XxqNnzQkD9I/AAAAAAAAAq4/cE76JlLYruIRx4I2C2GtKS2RjUGAn8XawCNcBGAsYHQ/s700/tom%2Bcruise.jpg",
    },
    {
      id: 5,
      user_id: 1,
      post_image:
        "https://images.saymedia-content.com/.image/t_share/MTc2MjcyNjkzMjM3NzIwMjM3/the-most-handsome-actors-in-indian-film-bollywood-industry.jpg",
    },
  ],
};

let userReelData = {
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

export default ProfileScreen;
