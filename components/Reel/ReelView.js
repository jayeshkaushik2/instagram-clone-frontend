import React from "react";
import { Text, StyleSheet, View } from "react-native";
// import Video from "react-native-video";

const ReelView = () => {
  return (
    <View>
      <Text style={{ color: "white" }}>test</Text>
      {/* <Video
        source={require("../../testing_media/test.mp4")}
        style={{ width: "100%", height: 300 }}
        controls={true}
        paused={false}
        repeat={true}
        onEnd={() => console.log("Video ended")}
      /> */}
    </View>
  );
};

("https://www.instagram.com/reel/CoXsxxMDZnP/?igshid=MDJmNzVkMjY=");

const styles = StyleSheet.create({});

export default ReelView;
