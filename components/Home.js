import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const Home = ({ style }) => {
  return (
    <View style={[styles.homeView, style]}>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector4.png")}
      />
      <Text style={styles.homeText}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIcon: {
    position: "absolute",
    height: "46.29%",
    width: "54.35%",
    top: "11.9%",
    right: "17.39%",
    bottom: "41.8%",
    left: "28.26%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  homeText: {
    position: "absolute",
    top: 17,
    left: 15,
    fontSize: 15,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "rgba(255, 255, 255, 0.41)",
    textAlign: "left",
  },
  homeView: {
    position: "relative",
    width: 60,
    height: 42,
    flexShrink: 0,
    overflow: "hidden",
  },
});

export default Home;
