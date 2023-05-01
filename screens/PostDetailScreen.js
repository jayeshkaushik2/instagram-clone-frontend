import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import BottomTabs from "../components/home/BottomTabs";
import Post from "../components/home/Post";
import { SafeAreaView } from "react-native-safe-area-context";
import GlobalStyles from "../styles/GlobalStyles";

const PostDetailScreen = ({ route, navigation }) => {
  const [postData, setPostData] = useState([
    {
      username: "shah rukh khan",
      id: 1,
      likes: 45,
      caption:
        "This is a Lorame 2mg Tablet is a prescription medicine used to treat symptoms of short term anxiety and anxiety disorders. It helps to decrease the abnormal and excessive activity of the nerve cells and calms the brain. caption, by jayesh.kaushik",
      image:
        "https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg",
      post_images: [
        {
          id: 1,
          image:
            "https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg",
        },
        {
          id: 1,
          image:
            "https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg",
        },
      ],
      comments: [
        {
          id: 1,
          username: "testing-0",
          comment:
            "Lorame 2mg Tablet is taken by mouth with or without food. 0",
        },
        {
          id: 2,
          username: "testing-1",
          comment:
            "Lorame 2mg Tablet is taken by mouth with or without food. 0",
        },
      ],
    },
  ]);
  const { post_id } = route.params;
  console.log("post_id", post_id);
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <ScrollView>
        {postData?.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};

export default PostDetailScreen;
