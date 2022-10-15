import * as React from "react";
import {
  StyleProp,
  ViewStyle,
  Text,
  StyleSheet,
  Image,
  View,
} from "react-native";

const Expense2 = ({ style }) => {
  return (
    <View style={[styles.expenseView, style]}>
      <View style={styles.groupView}>
        <Text style={styles.expenseText}>Expense</Text>
        <Image
          style={styles.vectorIcon}
          resizeMode="cover"
          source={require("../assets/vector.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  expenseText: {
    position: "absolute",
    top: 14,
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
    height: "50.87%",
    width: "27.41%",
    top: "0%",
    right: "37.5%",
    bottom: "49.13%",
    left: "35.09%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView: {
    position: "absolute",
    top: 3,
    left: 3,
    width: 57,
    height: 43,
  },
  expenseView: {
    position: "relative",
    width: 65,
    height: 42,
    flexShrink: 0,
    overflow: "hidden",
  },
});

export default Expense2;
