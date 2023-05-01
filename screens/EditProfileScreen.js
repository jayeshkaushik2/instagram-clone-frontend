import React, { useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import GlobalStyles from "../styles/GlobalStyles";
import * as Icon from "react-native-vector-icons";
import * as ImagePicker from "react-native-image-picker";

const EditProfileScreen = ({ navigation }) => {
  const [profileData, setProfileData] = useState({
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
  });
  const [profileImage, setProfileImage] = useState(profileData?.profile_image);
  const [name, setName] = useState(
    profileData?.first_name + " " + profileData?.last_name
  );
  const [username, setUsername] = useState(profileData?.username);
  const [bio, setBio] = useState(profileData?.bio);

  const handlePictureUpload = () => {
    /*
    opens the image library for selecting the image from local
    */
    const options = {
      mediaType: "photo",
      maxWidth: 300,
      maxHeight: 300,
      quality: 0.8,
      allowsEditing: true,
      aspectRatio: [1, 1],
      storageOptions: {
        skipBackup: true,
        path: "images",
        cameraRoll: true,
        waitUntilSaved: true,
      },
      includeBase64: false,
    };
    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        setProfileImage(response.uri);
      }
    });
  };

  const handleDiscard = () => {
    /*
    remove all changes that are done yet
    set the fetched value (from api) to the states
    */
    setName(profileData?.first_name + " " + profileData?.last_name);
    setUsername(profileData?.username);
    setBio(profileData?.bio);
    setProfileImage(profileData?.profile_image);
    navigation.goBack();
  };

  const handleSubmit = () => {
    /*
    submit the changed data to the api and update the profile
    */
    console.log(profileImage, name, username, bio);
  };

  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <EditProfileHeader
        handleSubmit={handleSubmit}
        handleDiscard={handleDiscard}
      />
      <EditProfileImage
        profileImage={profileImage}
        handlePictureUpload={handlePictureUpload}
      />
      <EditProfileDetail
        name={name}
        setName={setName}
        username={username}
        setUsername={setUsername}
        bio={bio}
        setBio={setBio}
      />
    </SafeAreaView>
  );
};

const EditProfileHeader = ({ handleSubmit, handleDiscard }) => (
  <View style={styles.editProfileHeaderContainer}>
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={handleDiscard}>
        <Icon.Entypo
          name="cross"
          style={{
            color: "white",
            fontSize: 35,
          }}
        />
      </TouchableOpacity>
      <Text
        style={{
          color: "white",
          fontWeight: "500",
          fontSize: 25,
          marginLeft: 40,
        }}
      >
        Edit profile
      </Text>
    </View>

    <View style={styles.iconContainer}>
      <TouchableOpacity onPress={handleSubmit}>
        <Icon.MaterialIcons
          name="done"
          style={{
            color: "#0096F6",
            fontSize: 35,
          }}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const EditProfileImage = ({ profileImage, handlePictureUpload }) => (
  <View style={{ alignItems: "center", padding: 40 }}>
    <Image
      source={{
        uri: profileImage,
      }}
      style={styles.profileImage}
    />
    <Pressable style={styles.loginButton} onPress={handlePictureUpload}>
      <Text style={styles.loginButtonText}>Edit picture</Text>
    </Pressable>
  </View>
);

const EditProfileDetail = ({
  name,
  username,
  bio,
  setName,
  setUsername,
  setBio,
}) => (
  <View>
    <TextInput
      placeholderTextColor="#444"
      placeholder="Name"
      autoCapitalize="none"
      keyboardType="name"
      textContentType="name"
      autoFocus={false}
      style={styles.editProfileDetailTextInput}
      value={name}
      onChangeText={(e) => {
        setName(e);
      }}
    />
    <TextInput
      placeholderTextColor="#444"
      placeholder="Username"
      autoCapitalize="none"
      keyboardType="username"
      textContentType="username"
      autoFocus={false}
      style={styles.editProfileDetailTextInput}
      value={username}
      onChangeText={(e) => {
        setUsername(e);
      }}
    />
    <TextInput
      placeholderTextColor="#444"
      placeholder="Bio"
      autoCapitalize="none"
      keyboardType="bio"
      textContentType="bio"
      autoFocus={false}
      style={styles.editProfileDetailTextInput}
      value={bio}
      onChangeText={(e) => {
        setBio(e);
      }}
    />
    {/* TODO have to create a gender section as well */}
  </View>
);

const styles = StyleSheet.create({
  editProfileHeaderContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 10,
  },
  loginButton: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    marginTop: 13,
    borderRadius: 4,
  },
  loginButtonText: {
    color: "#0096F6",
    fontWeight: "600",
    fontSize: 17,
  },
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
    width: 80,
    height: 80,
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
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 50,
  },
  profileEditBtnText: { color: "white", fontWeight: "500", fontSize: 15 },

  editProfileDetailTextInput: {
    paddingLeft: 5,
    color: "white",
    fontSize: 20,
    marginBottom: 10,
    borderBottomColor: "white",
    borderBottomWidth: 0.6,
    height: 45,
  },
});

export default EditProfileScreen;
