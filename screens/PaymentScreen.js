import * as React from "react";
import {
  Text,
  StyleSheet,
  Pressable,
  Image,
  View,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const PaymentScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.paymentScreenView}>
      <View style={styles.toolBarView}>
        <Text style={styles.paymentsText}>Payments</Text>
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
          style={styles.framePressable}
          onPress={() => navigation.toggleDrawer()}
        >
          <Pressable
            style={styles.vectorPressable}
            onPress={() => navigation.toggleDrawer()}
          >
            <Image
              style={styles.icon1}
              resizeMode="cover"
              source={require("../assets/vector20.png")}
            />
          </Pressable>
        </Pressable>
      </View>
      <TextInput
        style={styles.frameTextInput}
        placeholder="Search by Store or phone number"
        keyboardType="default"
        placeholderTextColor="rgba(255, 255, 255, 0.54)"
      />
      <View style={styles.dashboardFrameView}>
        <View style={styles.dashboardGroupView}>
          <View style={styles.dashboardCardView} />
          <Text style={styles.walkerFootWear}>Walker Foot Wear</Text>
          <View style={styles.groupView}>
            <Text style={styles.text}>750</Text>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector21.png")}
            />
          </View>
          <Image
            style={styles.rectangleIcon}
            resizeMode="cover"
            source={require("../assets/rectangle-12.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  paymentsText: {
    position: "absolute",
    top: 7,
    left: 155,
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
    left: 347,
    top: 9,
  },
  icon1: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  vectorPressable: {
    position: "absolute",
    left: "0%",
    top: "0%",
    right: "0%",
    bottom: "0%",
  },
  framePressable: {
    position: "absolute",
    top: 12,
    left: 62,
    width: 35,
    height: 24,
  },
  toolBarView: {
    position: "absolute",
    top: 0,
    left: -36,
    backgroundColor: "#19024a",
    width: 432,
    height: 43,
  },
  frameTextInput: {
    position: "absolute",
    top: 70,
    left: 18,
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
  walkerFootWear: {
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
  text: {
    position: "absolute",
    top: 0,
    left: 19,
    fontSize: 21,
    lineHeight: 29,
    fontFamily: "Roboto Slab",
    color: "#fff",
    textAlign: "left",
    width: 36,
    height: 25,
  },
  vectorIcon: {
    position: "absolute",
    height: "81.4%",
    width: "28.41%",
    top: "18.6%",
    right: "71.59%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView: {
    position: "absolute",
    top: 48,
    left: 93,
    width: 55,
    height: 26.88,
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
  dashboardFrameView: {
    position: "absolute",
    top: 124,
    left: 18,
    width: 323,
    height: 100,
  },
  paymentScreenView: {
    position: "relative",
    backgroundColor: "#051113",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default PaymentScreen;
