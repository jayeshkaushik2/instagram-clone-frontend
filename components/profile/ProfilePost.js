import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { FlatGrid, SimpleGrid } from "react-native-super-grid";

const ProfilePost = ({ navigation, profilePostData, profileReelData }) => {
  const [activePage, setActivePage] = React.useState("posts");
  const handlePageChange = ({ page }) => {
    if (page !== activePage) {
      setActivePage(page);
    }
  };

  const handlePostClick = (post_id) => {
    console.log("clicked image", post_id);
    navigation.push("PostDetailScreen", {
      post_id: post_id,
      navigation: navigation,
    });
  };

  return (
    <View>
      <DataPages activePage={activePage} handlePageChange={handlePageChange} />
      {activePage === "posts" ? (
        <Posts
          profilePostData={profilePostData}
          handlePostClick={handlePostClick}
        />
      ) : null}

      {activePage === "reels" ? (
        <Reels profileReelData={profileReelData} />
      ) : null}
    </View>
  );
};

const DataPages = ({ handlePageChange, activePage }) => (
  <View style={styles.dataPagesContainer}>
    <TouchableOpacity
      style={
        activePage === "posts"
          ? styles.iconActiveContainer
          : styles.iconContainer
      }
      onPress={() => handlePageChange({ page: "posts" })}
    >
      <Image
        style={styles.icon}
        source={
          activePage === "posts"
            ? require("../../assets/icons/profile-grid-active.png")
            : require("../../assets/icons/profile-grid.png")
        }
      />
    </TouchableOpacity>

    <TouchableOpacity
      style={
        activePage === "reels"
          ? styles.iconActiveContainer
          : styles.iconContainer
      }
      onPress={() => handlePageChange({ page: "reels" })}
    >
      <Image
        style={styles.icon}
        source={
          activePage === "reels"
            ? require("../../assets/icons/profile-reel-active.png")
            : require("../../assets/icons/profile-reel.png")
        }
      />
    </TouchableOpacity>
    <TouchableOpacity
      style={
        activePage === "saved"
          ? styles.iconActiveContainer
          : styles.iconContainer
      }
      onPress={() => handlePageChange({ page: "saved" })}
    >
      <Image
        style={styles.icon}
        source={
          activePage === "saved"
            ? require("../../assets/icons/profile-save-active.png")
            : require("../../assets/icons/profile-save.png")
        }
      />
    </TouchableOpacity>
  </View>
);

const Posts = ({ profilePostData, handlePostClick }) => (
  <View>
    <SimpleGrid
      itemDimension={100}
      data={profilePostData}
      spacing={2}
      style={{ width: "100%" }}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handlePostClick(item?.id)}>
          {item?.post_images?.length > 1 ? (
            <View
              style={{
                width: 20,
                height: 20,
                position: "absolute",
                left: 97,
                top: 8,
                alignItems: "center",
                zIndex: 100,
              }}
            >
              <Image
                source={require("../../assets/icons/gallery.png")}
                style={{
                  width: 20,
                  height: 20,
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
  </View>
);

const Reels = ({ profileReelData }) => (
  <View>
    <SimpleGrid
      itemDimension={100}
      data={profileReelData}
      spacing={2}
      style={{ width: "100%" }}
      renderItem={({ item }) => (
        <TouchableOpacity>
          <View
            style={{
              width: 90,
              height: 20,
              position: "absolute",
              left: -3,
              top: 155,
              alignItems: "center",
              zIndex: 100,
            }}
          >
            <Text
              style={{
                color: "white",
                textShadowColor: "rgba(0, 0, 0, 0.75)",
                textShadowOffset: { width: 1, height: 1 },
                textShadowRadius: 5,
              }}
            >
              {item?.views} views
            </Text>
          </View>
          <Image
            source={{
              uri: item?.thumb,
            }}
            style={{ width: "100%", height: 180 }}
          />
        </TouchableOpacity>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  dataPagesContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 20,
  },
  iconContainer: {
    width: "33.3%",
    alignItems: "center",
    height: 35,
  },
  iconActiveContainer: {
    borderBottomColor: "white",
    borderWidth: 1,
    width: "33.3%",
    alignItems: "center",
    height: 35,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default ProfilePost;
