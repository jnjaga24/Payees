import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  Image,
  View,
} from "react-native";

const Rate = ({ style }) => {
  return (
    <View style={[styles.rateView, style]}>
      <View style={styles.groupView}>
        <Text style={styles.rateText}>Rate</Text>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector3.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rateText: {
    position: "absolute",
    top: 12,
    left: 0,
    fontSize: 15,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "rgba(255, 255, 255, 0.34)",
    textAlign: "left",
  },
  vectorIcon: {
    position: "absolute",
    height: "45.73%",
    width: "80.65%",
    top: "0%",
    right: "12.9%",
    bottom: "54.27%",
    left: "6.45%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView: {
    position: "absolute",
    top: 5,
    left: 19,
    width: 31,
    height: 41,
  },
  rateView: {
    position: "relative",
    width: 60,
    height: 42,
    flexShrink: 0,
    overflow: "hidden",
  },
});

export default Rate;
