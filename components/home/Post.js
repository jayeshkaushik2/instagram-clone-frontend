import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 30 }}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{ marginTop: 15, marginBottom: 15 }}>
        <PostFooter />
        <Likes post={post} />
        <Caption post={post} />
        {post?.comments?.length > 0 ? (
          <>
            <CommentSection post={post} />
            <Comments post={post} />
          </>
        ) : (
          ""
        )}
      </View>
    </View>
  );
};

const PostHeader = ({ post }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 5,
      alignItems: "center",
    }}
  >
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Image source={{ uri: post.image }} style={styles.profile} />
      <Text style={{ color: "white", marginLeft: 5, fontWeight: "700" }}>
        {post.username}
      </Text>
    </View>

    <Text style={{ color: "white", fontWeight: "900" }}>...</Text>
  </View>
);

const PostImage = ({ post }) => (
  // {post?.post_images?.map(image, index) => (
  <View style={{ width: "100%", height: 450 }}>
    <Image
      source={{ uri: post.image }}
      style={{ height: "100%", resizeMode: "cover" }}
    />
  </View>
  // )}
);

const PostFooter = () => (
  <View style={{ flexDirection: "row" }}>
    <View style={styles.leftFooterIcon}>
      <TouchableOpacity>
        <Image
          style={styles.footerIcon}
          source={require("../../assets/icons/heart.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.footerIcon}
          source={require("../../assets/icons/bubble-chat.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          style={styles.footerIcon}
          source={require("../../assets/icons/send.png")}
        />
      </TouchableOpacity>
    </View>
    <View style={styles.rightFooterIcon}>
      <TouchableOpacity>
        <Image
          style={styles.footerIcon}
          source={require("../../assets/icons/save.png")}
        />
      </TouchableOpacity>
    </View>
  </View>
);

const Likes = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white", fontWeight: "600" }}>
      {post?.likes} likes
    </Text>
  </View>
);

const Caption = ({ post }) => (
  <View style={{ flexDirection: "row", marginTop: 4 }}>
    <Text style={{ color: "white" }}>
      <Text style={{ fontWeight: "600" }}>{post?.username}</Text>
      <Text> {post?.caption}</Text>
    </Text>
  </View>
);

const CommentSection = ({ post }) => (
  <View style={{ marginTop: 5 }}>
    <Text style={{ color: "gray" }}>
      View {post?.comments?.length > 1 ? "all " : ""}
      {post?.comments?.length}{" "}
      {post?.comments?.length > 1 ? "comments" : "comment"}
    </Text>
  </View>
);

const Comments = ({ post }) => (
  <View>
    {post?.comments?.slice(0, 2).map((comment, index) => (
      <View key={index}>
        <Text style={{ color: "white" }}>
          <Text style={{ fontWeight: "600" }}>{comment?.username}</Text>{" "}
          {comment?.comment}
        </Text>
      </View>
    ))}
  </View>
);

const styles = StyleSheet.create({
  profile: {
    width: 40,
    height: 40,
    borderRadius: 50,
    marginLeft: 8,
  },
  footerIcon: { width: 25, height: 25 },
  leftFooterIcon: {
    flexDirection: "row",
    width: "30%",
    justifyContent: "space-between",
  },
  rightFooterIcon: {
    alignItems: "flex-end",
    flex: 1,
  },
});

export default Post;
