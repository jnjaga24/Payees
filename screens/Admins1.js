import * as React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Admins1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.adminsView}>
      <View style={styles.toolbarView}>
        <View style={styles.groupView}>
          <View style={styles.toolBarView} />
          <Text style={styles.adminsText}>Admins</Text>
          <Pressable
            style={styles.bellPressable}
            onPress={() => navigation.navigate("Notifications")}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/bell.png")}
            />
          </Pressable>
          <Pressable
            style={styles.alignJustifyPressable}
            onPress={() => navigation.toggleDrawer()}
          >
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={require("../assets/alignjustify.png")}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.adminGroupView}>
        <View style={styles.dashboardGroupView}>
          <View style={styles.dashboardCardView} />
          <Text style={styles.jagadeeshText}>Jagadeesh</Text>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector13.png")}
          />
          <Text style={styles.superAdminText}>Super Admin</Text>
          <View style={styles.frameView}>
            <Image
              style={styles.vectorIcon1}
              resizeMode="cover"
              source={require("../assets/vector14.png")}
            />
            <Text style={styles.editText}>Edit</Text>
          </View>
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/rectangle-1.png")}
          />
        </View>
      </View>
      <View style={styles.adminGroupView1}>
        <View style={styles.dashboardGroupView1}>
          <View style={styles.dashboardCardView1} />
          <Text style={styles.johnDoeText}>John Doe</Text>
          <Image
            style={styles.vectorIcon2}
            resizeMode="cover"
            source={require("../assets/vector15.png")}
          />
          <Text style={styles.adminText}>Admin</Text>
          <View style={styles.frameView1}>
            <Image
              style={styles.vectorIcon3}
              resizeMode="cover"
              source={require("../assets/vector14.png")}
            />
            <Text style={styles.editText1}>Edit</Text>
          </View>
          <View style={styles.rectangleView}>
            <Image
              style={styles.rectangleIcon1}
              resizeMode="cover"
              source={require("../assets/rectangle-11.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  toolBarView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#19024a",
    width: 360,
    height: 43,
  },
  adminsText: {
    position: "absolute",
    top: 7,
    left: 130,
    fontSize: 25,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  icon: {
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  bellPressable: {
    position: "absolute",
    left: 320,
    top: 10,
  },
  icon1: {
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  alignJustifyPressable: {
    position: "absolute",
    left: 12,
    top: 10,
  },
  groupView: {
    position: "relative",
    width: 360,
    height: 43,
    flexShrink: 0,
  },
  toolbarView: {
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  dashboardCardView: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#11101b",
    width: 323,
    height: 100,
  },
  jagadeeshText: {
    position: "absolute",
    top: 6,
    left: 89,
    fontSize: 20,
    lineHeight: 27,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  vectorIcon: {
    position: "absolute",
    height: "14%",
    width: "4.33%",
    top: "40%",
    right: "68.11%",
    bottom: "46%",
    left: "27.55%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  superAdminText: {
    position: "absolute",
    top: 34,
    left: 108,
    fontSize: 12,
    lineHeight: 29,
    fontFamily: "Roboto Serif",
    color: "#d6f80a",
    textAlign: "left",
    width: 84,
    height: 23,
  },
  vectorIcon1: {
    position: "absolute",
    height: "48.15%",
    width: "5.63%",
    top: "29.63%",
    right: "60.61%",
    bottom: "22.22%",
    left: "33.77%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  editText: {
    position: "absolute",
    height: "107.41%",
    width: "11.69%",
    top: "0%",
    right: "47.19%",
    bottom: "-7.41%",
    left: "41.13%",
    fontSize: 12,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Roboto Serif",
    color: "#2b12c6",
    textAlign: "left",
  },
  frameView: {
    position: "absolute",
    top: 64,
    left: 85,
    borderRadius: 9,
    backgroundColor: "rgba(75, 25, 25, 0)",
    borderStyle: "solid",
    borderColor: "#493451",
    borderWidth: 1,
    width: 231,
    height: 27,
    overflow: "hidden",
  },
  rectangleIcon: {
    position: "absolute",
    top: 9,
    left: 1,
    width: 81,
    height: 91,
  },
  dashboardGroupView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 323,
    height: 100,
  },
  adminGroupView: {
    position: "absolute",
    top: 71,
    left: 19,
    width: 323,
    height: 100,
  },
  dashboardCardView1: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#11101b",
    width: 323,
    height: 100,
  },
  johnDoeText: {
    position: "absolute",
    top: 6,
    left: 89,
    fontSize: 20,
    lineHeight: 27,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  vectorIcon2: {
    position: "absolute",
    height: "14%",
    width: "4.33%",
    top: "40%",
    right: "68.11%",
    bottom: "46%",
    left: "27.55%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  adminText: {
    position: "absolute",
    top: 34,
    left: 108,
    fontSize: 12,
    lineHeight: 29,
    fontFamily: "Roboto Serif",
    color: "#d6f80a",
    textAlign: "left",
    width: 84,
    height: 23,
  },
  vectorIcon3: {
    position: "absolute",
    height: "48.15%",
    width: "5.63%",
    top: "29.63%",
    right: "60.61%",
    bottom: "22.22%",
    left: "33.77%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  editText1: {
    position: "absolute",
    height: "107.41%",
    width: "11.69%",
    top: "0%",
    right: "47.19%",
    bottom: "-7.41%",
    left: "41.13%",
    fontSize: 12,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Roboto Serif",
    color: "#2b12c6",
    textAlign: "left",
  },
  frameView1: {
    position: "absolute",
    top: 64,
    left: 85,
    borderRadius: 9,
    backgroundColor: "rgba(75, 25, 25, 0)",
    borderStyle: "solid",
    borderColor: "#493451",
    borderWidth: 1,
    width: 231,
    height: 27,
    overflow: "hidden",
  },
  rectangleIcon1: {
    position: "absolute",
    height: "109.64%",
    width: "110.96%",
    top: "-1.2%",
    right: "-5.48%",
    bottom: "-8.43%",
    left: "-5.48%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleView: {
    position: "absolute",
    top: 10,
    left: 5,
    width: 73,
    height: 83,
  },
  dashboardGroupView1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 323,
    height: 100,
  },
  adminGroupView1: {
    position: "absolute",
    top: 199,
    left: 17,
    width: 323,
    height: 100,
  },
  adminsView: {
    position: "relative",
    backgroundColor: "#051113",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Admins1;
