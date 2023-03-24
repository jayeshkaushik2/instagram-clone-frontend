import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import GlobalStyles from "../styles/GlobalStyles";
import BottomTabs from "../components/home/BottomTabs";
import { SimpleGrid } from "react-native-super-grid";

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

const SearchScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <SearchHeader />
      <SearchGrid profilePostData={profilePostData?.results} />
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};

const SearchHeader = () => (
  <View
    style={{
      width: "100%",
      alignItems: "center",
      paddingLeft: 10,
      paddingRight: 10,
    }}
  >
    <TextInput
      placeholderTextColor="gray"
      placeholder="Search"
      autoCapitalize="none"
      keyboardType="search"
      textContentType="Search"
      autoFocus={false}
      style={{
        width: "98%",
        backgroundColor: "#2e2e2e",
        borderRadius: 10,
        color: "white",
        padding: 5,
        paddingLeft: 15,
        fontSize: 17,
        fontWeight: "500",
      }}
    />
  </View>
);

const SearchGrid = ({ profilePostData }) => (
  <ScrollView style={{ marginTop: 10 }}>
    <SimpleGrid
      itemDimension={100}
      data={profilePostData}
      spacing={2}
      style={{ width: "100%" }}
      renderItem={({ item }) => (
        <TouchableOpacity>
          {item?.post_images?.length > 1 ? (
            <View
              style={{
                width: 20,
                height: 20,
                position: "absolute",
                left: 100,
                top: 8,
                alignItems: "center",
                zIndex: 100,
              }}
            >
              <Image
                source={require("../assets/icons/gallery.png")}
                style={{
                  width: 16,
                  height: 16,
                }}
              />
            </View>
          ) : null}
          <Image
            source={{
              uri: item?.post_images?.[0]?.image,
            }}
            style={{ width: "100%", height: 110 }}
          />
        </TouchableOpacity>
      )}
    />
  </ScrollView>
);

export default SearchScreen;
