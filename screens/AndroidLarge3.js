import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";

const AndroidLarge3 = () => {
  return (
    <View style={styles.androidLarge3}>
      <View style={styles.frameView}>
        <View style={styles.payLogoView} />
      </View>
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector12.png")}
      />
      <Text style={styles.payeesText}>Payees</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  payLogoView: {
    position: "relative",
    width: 227,
    height: 227,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView: {
    position: "absolute",
    top: 121,
    left: 67,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  vectorIcon: {
    position: "absolute",
    height: "28.37%",
    width: "63.06%",
    top: "15.12%",
    right: "18.33%",
    bottom: "56.5%",
    left: "18.61%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  payeesText: {
    position: "absolute",
    top: 475,
    left: 119,
    fontSize: 44,
    lineHeight: 29,
    fontFamily: "Roboto Flex",
    color: "#fff",
    textAlign: "left",
  },
  androidLarge3: {
    position: "relative",
    backgroundColor: "#2b0132",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default AndroidLarge3;
