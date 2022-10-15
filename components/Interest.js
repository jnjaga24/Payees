import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  Image,
  View,
} from "react-native";

const Interest = ({ style }) => {
  return (
    <View style={[styles.interestView, style]}>
      <View style={styles.groupView}>
        <Text style={styles.interestText}>Interest</Text>
        <Image
          style={styles.dollarSignIcon}
          resizeMode="cover"
          source={require("../assets/dollarsign.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  interestText: {
    position: "absolute",
    top: 15.09,
    left: 0,
    fontSize: 15,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff8f8",
    textAlign: "left",
  },
  dollarSignIcon: {
    position: "absolute",
    top: 0,
    left: 11.41,
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  groupView: {
    position: "absolute",
    top: 1.91,
    left: 15,
    width: 53,
    height: 44.09,
  },
  interestView: {
    position: "relative",
    width: 70,
    height: 42,
    flexShrink: 0,
    overflow: "hidden",
  },
});

export default Interest;
