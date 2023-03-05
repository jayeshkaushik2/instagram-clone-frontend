import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import FormikPostUploader from "./FormikPostUploader";

const AddNewPost = ({ navigation }) => (
  <View style={styles.container}>
    <Header navigation={navigation} />
    <FormikPostUploader navigation={navigation} />
  </View>
);

const Header = ({ navigation }) => (
  <View style={styles.headerContainer}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={require("../../assets/icons/back.png")}
        style={{ width: 25, height: 25 }}
      />
    </TouchableOpacity>
    <Text style={{ color: "white" }}>NEW POST</Text>
    <Text></Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginHrotizontal: 10,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerText: {
    color: "white",
    fontSize: 20,
    marginRight: 23,
    fontWeight: "700",
  },
});

export default AddNewPost;
