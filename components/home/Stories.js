import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";

const Users = [
  {
    username: "shah rukh khan",
    image:
      "https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg",
  },
  {
    username: "Ashwariar rai",
    image:
      "https://top10reviewof.com/wp-content/uploads/2016/03/1.Top-10-Richest-Bollywood-Actresses-in-2016.jpg",
  },
  {
    username: "insta model",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.uMnbNkm8zAyYXz4JKxJRogHaNK&pid=Api&P=0",
  },
  {
    username: "shah rukh khan",
    image:
      "https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg",
  },
  {
    username: "Alia bing bing bing bhaat",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.YNQvd8Re-hdKS7nmNnjKgQHaHb&pid=Api&P=0",
  },
  {
    username: "Alia bhaat",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.18GxTA0qHcS6Pdi_08fsQAHaEo&pid=Api&P=0",
  },
];

const Stories = () => {
  return (
    <View style={{ marginBottom: 13, marginTop: 15 }}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Users?.map((story, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image source={{ uri: story?.image }} style={styles.story} />
            <Text style={{ color: "white" }}>
              {story?.username.length > 9
                ? story.username.slice(0, 9).toLowerCase() + "..."
                : story.username}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginLeft: 8,
    borderWidth: 3,
    borderColor: "#ffc107",
  },
});

export default Stories;
