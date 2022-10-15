import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  Image,
  View,
} from "react-native";

const History1 = ({ style }) => {
  return (
    <View style={[styles.historyView, style]}>
      <View style={styles.groupView}>
        <Text style={styles.historyText}>History</Text>
        <Image
          style={styles.bufferIcon}
          resizeMode="cover"
          source={require("../assets/buffer.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  historyText: {
    position: "absolute",
    top: 16.16,
    left: 0,
    fontSize: 15,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "rgba(255, 255, 255, 0.34)",
    textAlign: "left",
  },
  bufferIcon: {
    position: "absolute",
    top: 0,
    left: 9.96,
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  groupView: {
    position: "absolute",
    top: 1.28,
    left: 8,
    width: 49,
    height: 45.16,
  },
  historyView: {
    position: "relative",
    width: 60,
    height: 42,
    flexShrink: 0,
    overflow: "hidden",
  },
});

export default History1;
