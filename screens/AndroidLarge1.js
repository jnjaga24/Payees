import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const AndroidLarge1 = () => {
  return (
    <View style={styles.androidLarge1}>
      <View style={styles.frameView}>
        <Image
          style={styles.payLogoIcon}
          resizeMode="cover"
          source={require("../assets/pay-logo.png")}
        />
      </View>
      <View style={[styles.frameView1, styles.mt44]}>
        <Text style={styles.payeesText}>Payees</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt44: {
    marginTop: 44,
  },
  payLogoIcon: {
    position: "relative",
    width: 227,
    height: 227,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  payeesText: {
    position: "absolute",
    top: 13,
    left: 23,
    fontSize: 73,
    lineHeight: 29,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
    width: 300,
    height: 95,
  },
  frameView1: {
    position: "relative",
    width: 296,
    height: 67,
    flexShrink: 0,
    overflow: "hidden",
  },
  androidLarge1: {
    position: "relative",
    backgroundColor: "#2b0132",
    flex: 1,
    width: "100%",
    flexDirection: "column",
    paddingHorizontal: 13,
    paddingVertical: 210,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default AndroidLarge1;
