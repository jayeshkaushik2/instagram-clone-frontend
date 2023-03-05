import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.logo}
          source={require("../../assets/icons/header-logo.png")}
        />
      </TouchableOpacity>
      <View style={styles.iconContainer}>
        {/* <TouchableOpacity>
          <Image
            source={require("../../assets/icons/add.png")}
            style={styles.icon}
          />
        </TouchableOpacity> */}

        <TouchableOpacity>
          <Image
            source={require("../../assets/icons/heart.png")}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.unReadBadge}>
            <Text style={styles.unReadBadgeText}>11</Text>
          </View>
          <Image
            source={require("../../assets/icons/chat.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 20,
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
});

export default Header;
