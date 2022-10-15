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

const Dashboard = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.dashboardPressable, style]}
      onPress={() =>
        navigation.navigate("BottomTabsRoot", { screen: "Dashboard" })
      }
    >
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector11.png")}
      />
      <Text style={[styles.dashboardText, styles.ml21]}>Dashboard</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml21: {
    marginLeft: 21,
  },
  vectorIcon: {
    position: "relative",
    width: 20.2,
    height: 21.88,
    flexShrink: 0,
  },
  dashboardText: {
    position: "relative",
    fontSize: 25,
    lineHeight: 29,
    fontFamily: "Roboto Serif",
    color: "#fff",
    textAlign: "left",
  },
  dashboardPressable: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Dashboard;
