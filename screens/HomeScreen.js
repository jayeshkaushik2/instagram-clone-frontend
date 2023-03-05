import { SafeAreaView, ScrollView } from "react-native";
import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import Header from "../components/home/Header";
import Stories from "../components/home/Stories";
import Post from "../components/home/Post";
import BottomTabs from "../components/home/BottomTabs";

const Posts = [
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
        comment: "Lorame 2mg Tablet is taken by mouth with or without food. 0",
      },
      {
        id: 2,
        username: "testing-1",
        comment: "Lorame 2mg Tablet is taken by mouth with or without food. 0",
      },
    ],
  },
  {
    username: "shah rukh khan",
    id: 2,
    likes: 90,
    caption:
      "This is Lorame 2mg Tablet is a prescription medicine used to treat symptoms of short term anxiety and anxiety disorders. It helps to decrease the abnormal and excessive activity of the nerve cells and calms the brain. a caption, by jayesh.kaushik",
    image:
      "https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg",
    post_images: [
      {
        id: 2,
        image:
          "https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg",
      },
      {
        id: 2,
        image:
          "https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg",
      },
    ],
    comments: [
      {
        id: 2,
        username: "testing-1",
        comment: "Lorame 2mg Tablet is taken by mouth with or without food. 1",
      },
      {
        id: 2,
        username: "testing-1",
        comment: "Lorame 2mg Tablet is taken by mouth with or without food. 1",
      },
      {
        id: 2,
        username: "testing-1",
        comment: "Lorame 2mg Tablet is taken by mouth with or without food. 1",
      },
      {
        id: 2,
        username: "testing-1",
        comment: "Lorame 2mg Tablet is taken by mouth with or without food. 1",
      },
    ],
  },
  {
    username: "Alia bhaat",
    id: 3,
    likes: 135,
    caption: "This is a caption, by jayesh.kaushik",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.18GxTA0qHcS6Pdi_08fsQAHaEo&pid=Api&P=0",
    post_images: [
      {
        id: 3,
        image:
          "https://tse1.mm.bing.net/th?id=OIP.18GxTA0qHcS6Pdi_08fsQAHaEo&pid=Api&P=0",
      },
      {
        id: 3,
        image:
          "https://tse1.mm.bing.net/th?id=OIP.18GxTA0qHcS6Pdi_08fsQAHaEo&pid=Api&P=0",
      },
    ],
    comments: [
      {
        id: 3,
        username: "testing-2",
        comment: "Lorame 2mg Tablet is taken by mouth with or without food. 2",
      },
    ],
  },
  {
    username: "Alia bing bing bing bhaat",
    id: 4,
    likes: 180,
    caption: "This is a caption, by jayesh.kaushik",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.YNQvd8Re-hdKS7nmNnjKgQHaHb&pid=Api&P=0",
    post_images: [
      {
        id: 4,
        image:
          "https://tse1.mm.bing.net/th?id=OIP.YNQvd8Re-hdKS7nmNnjKgQHaHb&pid=Api&P=0",
      },
      {
        id: 4,
        image:
          "https://tse1.mm.bing.net/th?id=OIP.YNQvd8Re-hdKS7nmNnjKgQHaHb&pid=Api&P=0",
      },
    ],
    comments: [
      {
        id: 4,
        username: "testing-3",
        comment: "Lorame 2mg Tablet is taken by mouth with or without food. 3",
      },
    ],
  },
  {
    username: "Testing age",
    id: 5,
    likes: 225,
    caption: "This is a caption, by jayesh.kaushik",
    image: "https://wallpapercave.com/wp/1lTVgTF.jpg",
    post_images: [
      { id: 5, image: "https://wallpapercave.com/wp/1lTVgTF.jpg" },
      { id: 5, image: "https://wallpapercave.com/wp/1lTVgTF.jpg" },
    ],
    comments: [
      {
        id: 5,
        username: "testing-4",
        comment: "Lorame 2mg Tablet is taken by mouth with or without food. 4",
      },
    ],
  },
  {
    username: "insta model",
    id: 6,
    likes: 270,
    caption: "This is a caption, by jayesh.kaushik",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.uMnbNkm8zAyYXz4JKxJRogHaNK&pid=Api&P=0",
    post_images: [
      {
        id: 6,
        image:
          "https://tse3.mm.bing.net/th?id=OIP.uMnbNkm8zAyYXz4JKxJRogHaNK&pid=Api&P=0",
      },
      {
        id: 6,
        image:
          "https://tse3.mm.bing.net/th?id=OIP.uMnbNkm8zAyYXz4JKxJRogHaNK&pid=Api&P=0",
      },
    ],
    comments: [
      {
        id: 6,
        username: "testing-5",
        comment: "Lorame 2mg Tablet is taken by mouth with or without food. 5",
      },
    ],
  },
  {
    username: "Alia bing bing bing bhaat",
    id: 7,
    likes: 315,
    caption: "This is a caption, by jayesh.kaushik",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.YNQvd8Re-hdKS7nmNnjKgQHaHb&pid=Api&P=0",
    post_images: [
      {
        id: 7,
        image:
          "https://tse1.mm.bing.net/th?id=OIP.YNQvd8Re-hdKS7nmNnjKgQHaHb&pid=Api&P=0",
      },
      {
        id: 7,
        image:
          "https://tse1.mm.bing.net/th?id=OIP.YNQvd8Re-hdKS7nmNnjKgQHaHb&pid=Api&P=0",
      },
    ],
    comments: [
      {
        id: 7,
        username: "testing-6",
        comment: "Lorame 2mg Tablet is taken by mouth with or without food. 6",
      },
    ],
  },
  {
    username: "shah rukh khan",
    id: 8,
    likes: 360,
    caption: "This is a caption, by jayesh.kaushik",
    image:
      "https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg",
    post_images: [
      {
        id: 8,
        image:
          "https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg",
      },
      {
        id: 8,
        image:
          "https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg",
      },
    ],
    comments: [
      {
        id: 8,
        username: "testing-7",
        comment: "Lorame 2mg Tablet is taken by mouth with or without food. 7",
      },
    ],
  },
  {
    username: "Alia bhaat",
    id: 9,
    likes: 405,
    caption: "This is a caption, by jayesh.kaushik",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.18GxTA0qHcS6Pdi_08fsQAHaEo&pid=Api&P=0",
    post_images: [
      {
        id: 9,
        image:
          "https://tse1.mm.bing.net/th?id=OIP.18GxTA0qHcS6Pdi_08fsQAHaEo&pid=Api&P=0",
      },
      {
        id: 9,
        image:
          "https://tse1.mm.bing.net/th?id=OIP.18GxTA0qHcS6Pdi_08fsQAHaEo&pid=Api&P=0",
      },
    ],
    comments: [
      {
        id: 9,
        username: "testing-8",
        comment: "Lorame 2mg Tablet is taken by mouth with or without food. 8",
      },
    ],
  },
  {
    username: "Alia bing bing bing bhaat",
    id: 10,
    likes: 450,
    caption: "This is a caption, by jayesh.kaushik",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.YNQvd8Re-hdKS7nmNnjKgQHaHb&pid=Api&P=0",
    post_images: [
      {
        id: 10,
        image:
          "https://tse1.mm.bing.net/th?id=OIP.YNQvd8Re-hdKS7nmNnjKgQHaHb&pid=Api&P=0",
      },
      {
        id: 10,
        image:
          "https://tse1.mm.bing.net/th?id=OIP.YNQvd8Re-hdKS7nmNnjKgQHaHb&pid=Api&P=0",
      },
    ],
    comments: [
      {
        id: 10,
        username: "testing-9",
        comment: "Lorame 2mg Tablet is taken by mouth with or without food. 9",
      },
      {
        id: 10,
        username: "testing-9",
        comment: "Lorame 2mg Tablet is taken by mouth with or without food. 9",
      },
      {
        id: 10,
        username: "testing-9",
        comment: "Lorame 2mg Tablet is taken by mouth with or without food. 9",
      },
      {
        id: 10,
        username: "testing-9",
        comment: "Lorame 2mg Tablet is taken by mouth with or without food. 9",
      },
      {
        id: 10,
        username: "testing-9",
        comment: "Lorame 2mg Tablet is taken by mouth with or without food. 9",
      },
      {
        id: 10,
        username: "testing-9",
        comment: "Lorame 2mg Tablet is taken by mouth with or without food. 9",
      },
    ],
  },
];
const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <Header />
      <ScrollView>
        <Stories />
        {Posts?.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};

export default HomeScreen;
