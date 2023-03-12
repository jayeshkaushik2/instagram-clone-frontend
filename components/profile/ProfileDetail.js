import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { StyleSheet } from "react-native-web";

const ProfileDetail = ({ navigation, profileData }) => {
  return (
    <View>
      <Profile profileData={profileData} />
      <ProfileBio profileData={profileData} />
      <ProfileEdit />
    </View>
  );
};

const Profile = ({ profileData }) => (
  <View style={styles.ProfileConatiner}>
    <View style={{ alignItems: "center" }}>
      <Image
        source={{ uri: profileData?.profile_image }}
        style={styles.profileImage}
      />
      <Text style={{ color: "white", fontWeight: "410", fontSize: 15 }}>
        {profileData?.first_name} {profileData?.last_name}
      </Text>
    </View>

    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "white", fontWeight: "500", fontSize: 20 }}>
        {profileData?.posts}
      </Text>
      <Text style={{ color: "white", fontWeight: "410", fontSize: 15 }}>
        Posts
      </Text>
    </View>

    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "white", fontWeight: "500", fontSize: 20 }}>
        {profileData?.followers}
      </Text>
      <Text style={{ color: "white", fontWeight: "410", fontSize: 15 }}>
        followers
      </Text>
    </View>

    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Text style={{ color: "white", fontWeight: "500", fontSize: 20 }}>
        {profileData?.following}
      </Text>
      <Text style={{ color: "white", fontWeight: "410", fontSize: 15 }}>
        following
      </Text>
    </View>
  </View>
);

const ProfileBio = ({ profileData }) => (
  <View style={{ margin: 12, marginTop: 0 }}>
    <Text style={{ color: "white" }}>{profileData?.bio}</Text>
  </View>
);

const ProfileEdit = ({}) => (
  <View style={styles.profileEditContainer}>
    <View style={styles.profileEditBtn}>
      <TouchableOpacity>
        <Text style={styles.profileEditBtnText}>Edit profile</Text>
      </TouchableOpacity>
    </View>

    <View style={styles.profileEditBtn}>
      <TouchableOpacity>
        <Text style={styles.profileEditBtnText}>Share profile</Text>
      </TouchableOpacity>
    </View>
  </View>
);

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

export default ProfileDetail;
