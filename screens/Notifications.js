import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Notifications = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notificationsView}>
      <View style={styles.frameView}>
        <View style={styles.notificationCardView}>
          <Image
            style={styles.ellipseIcon}
            resizeMode="cover"
            source={require("../assets/ellipse-2.png")}
          />
          <Text style={styles.paymentPendingText}>Payment Pending</Text>
          <Text style={styles.text}>14-10-2022</Text>
        </View>
      </View>
      <View style={styles.notificationCardView1}>
        <Image
          style={styles.ellipseIcon1}
          resizeMode="cover"
          source={require("../assets/ellipse-21.png")}
        />
        <Text style={styles.paymentPendingText1}>Payment Pending</Text>
        <Text style={styles.text1}>14-10-2022</Text>
      </View>
      <View style={styles.toolbarView}>
        <View style={styles.groupView}>
          <View style={styles.toolBarView} />
          <Text style={styles.notificationsText}>Notifications</Text>
          <Pressable
            style={styles.arrowLeftPressable}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.icon}
              resizeMode="cover"
              source={require("../assets/arrowleft.png")}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseIcon: {
    position: "absolute",
    top: 9.5,
    left: 6,
    width: 70,
    height: 55,
  },
  paymentPendingText: {
    position: "absolute",
    top: 8,
    left: 95,
    fontSize: 21,
    lineHeight: 29,
    fontFamily: "Roboto",
    color: "#b697d4",
    textAlign: "left",
  },
  text: {
    position: "absolute",
    top: 37,
    left: 95,
    fontSize: 21,
    lineHeight: 29,
    fontFamily: "Roboto",
    color: "#b697d4",
    textAlign: "left",
  },
  notificationCardView: {
    position: "relative",
    backgroundColor: "#11101b",
    width: 340,
    height: 74,
    flexShrink: 0,
  },
  frameView: {
    position: "absolute",
    top: 59,
    left: 8,
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  ellipseIcon1: {
    position: "absolute",
    top: 9.5,
    left: 6,
    width: 70,
    height: 55,
  },
  paymentPendingText1: {
    position: "absolute",
    top: 8,
    left: 95,
    fontSize: 21,
    lineHeight: 29,
    fontFamily: "Roboto",
    color: "#b697d4",
    textAlign: "left",
  },
  text1: {
    position: "absolute",
    top: 37,
    left: 95,
    fontSize: 21,
    lineHeight: 29,
    fontFamily: "Roboto",
    color: "#b697d4",
    textAlign: "left",
  },
  notificationCardView1: {
    position: "absolute",
    top: 168,
    left: 8,
    backgroundColor: "#11101b",
    width: 340,
    height: 74,
  },
  toolBarView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#19024a",
    width: 360,
    height: 43,
  },
  notificationsText: {
    position: "absolute",
    top: 7,
    left: 107,
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
  arrowLeftPressable: {
    position: "absolute",
    left: 8,
    top: 11,
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
  notificationsView: {
    position: "relative",
    backgroundColor: "#051113",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Notifications;
