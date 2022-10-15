import * as React from "react";
import {
  Pressable,
  StyleProp,
  ViewStyle,
  Image,
  StyleSheet,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Logout = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.logoutPressable, style]}
      onPress={() => navigation.navigate("LoginScreen")}
    >
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector9.png")}
      />
      <Text style={[styles.logoutText, styles.ml21]}>Logout</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml21: {
    marginLeft: 21,
  },
  vectorIcon: {
    position: "relative",
    width: 24.22,
    height: 24.61,
    flexShrink: 0,
  },
  logoutText: {
    position: "relative",
    fontSize: 25,
    lineHeight: 29,
    fontFamily: "Roboto Serif",
    color: "#fff",
    textAlign: "left",
  },
  logoutPressable: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Logout;
