import * as React from "react";
import { useState } from "react";
import Dashboard from "../components/Dashboard";
import Payments from "../components/Payments";
import Admins from "../components/Admins";
import Logout from "../components/Logout";
import {
  Image,
  StyleSheet,
  Text,
  Pressable,
  View,
  SafeAreaView,
} from "react-native";

const SideMenu = ({ state, navigation }) => {
  const [drawerItemsNormal] = useState([
    <Dashboard style={styles.mt34} />,
    <Payments style={styles.mt34} />,
    <Admins style={styles.mt34} />,
    <Logout style={styles.mt34} />,
  ]);
  const [drawerItemsActive] = useState([
    <Dashboard style={styles.mt34} />,
    <Payments style={styles.mt34} />,
    <Admins style={styles.mt34} />,
    <Logout style={styles.mt34} />,
  ]);
  const stateIndex = !state ? 0 : state.index - 1;
  return (
    <SafeAreaView style={styles.sideMenuSafeAreaView}>
      <View style={styles.view}>
        <View style={styles.frameView3}>
          <View style={styles.frameView}>
            <Image
              style={styles.sidemenuHeaderIcon}
              resizeMode="cover"
              source={require("../assets/sidemenuheadericon.png")}
            />
            <Text style={styles.jagadeeshText}>Jagadeesh</Text>
            <Text style={styles.superAdminText}>Super Admin</Text>
            <Pressable
              style={styles.windowClosePressable}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={styles.icon}
                resizeMode="cover"
                source={require("../assets/windowclose.png")}
              />
            </Pressable>
          </View>
          <View style={styles.frameView2}>
            <View style={styles.frameView1}>
              {stateIndex === 0 ? drawerItemsActive[0] : drawerItemsNormal[0]}
              {stateIndex === 1 ? drawerItemsActive[1] : drawerItemsNormal[1]}
              {stateIndex === 2 ? drawerItemsActive[2] : drawerItemsNormal[2]}
              {stateIndex === 3 ? drawerItemsActive[3] : drawerItemsNormal[3]}
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ml21: {
    marginLeft: 21,
  },
  mt34: {
    marginTop: 34,
  },
  sideMenuSafeAreaView: {
    flex: 1,
    backgroundColor: "#fbf9f9",
  },
  sidemenuHeaderIcon: {
    position: "absolute",
    top: 12,
    left: 4,
    width: 124,
    height: 90,
  },
  jagadeeshText: {
    position: "absolute",
    top: 37,
    left: 132,
    fontSize: 29,
    lineHeight: 29,
    fontFamily: "Roboto Serif",
    color: "#2ae90b",
    textAlign: "left",
  },
  superAdminText: {
    position: "absolute",
    top: 72,
    left: 134,
    fontSize: 16,
    lineHeight: 29,
    fontFamily: "Roboto Flex",
    color: "#fff",
    textAlign: "left",
  },
  icon: {
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  windowClosePressable: {
    position: "absolute",
    left: 326,
    top: 8,
  },
  frameView: {
    position: "relative",
    backgroundColor: "#543d59",
    width: 364,
    height: 114,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView1: {
    position: "absolute",
    top: 32,
    left: 32,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameView2: {
    position: "relative",
    backgroundColor: "#381034",
    width: 360,
    height: 688,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView3: {
    position: "absolute",
    top: 0,
    left: -4,
    backgroundColor: "#fff",
    height: 800,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  view: {
    position: "relative",
    backgroundColor: "#fbf9f9",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default SideMenu;
