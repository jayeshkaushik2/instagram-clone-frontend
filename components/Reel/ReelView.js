import React from "react";
import { Text, StyleSheet, View } from "react-native";
import "react-native-vector-icons";
import VideoPlayer from "react-native-video-player";

const ReelView = () => {
  return (
    <View>
      <Text style={{ color: "white" }}>test</Text>
      <VideoPlayer
        video={{
          uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        }}
        videoWidth={1600}
        videoHeight={900}
        thumbnail={{ uri: "https://i.picsum.photos/id/866/1600/900.jpg" }}
      />
    </View>
  );
};

("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4");

const styles = StyleSheet.create({});

export default ReelView;
