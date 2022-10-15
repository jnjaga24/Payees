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

const Admins = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.adminsPressable, style]}
      onPress={() => navigation.navigate("Admins")}
    >
      <Image
        style={styles.userAltIcon}
        resizeMode="cover"
        source={require("../assets/useralt.png")}
      />
      <Text style={[styles.adminsText, styles.ml21]}>Admins</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml21: {
    marginLeft: 21,
  },
  userAltIcon: {
    position: "relative",
    width: 25,
    height: 25,
    flexShrink: 0,
    overflow: "hidden",
  },
  adminsText: {
    position: "relative",
    fontSize: 25,
    lineHeight: 29,
    fontFamily: "Roboto Serif",
    color: "#fff",
    textAlign: "left",
  },
  adminsPressable: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Admins;
