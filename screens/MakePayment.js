import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MakePayment = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.makePaymentView}>
      <View style={styles.paymentGridView}>
        <Image
          style={styles.ellipseIcon}
          resizeMode="cover"
          source={require("../assets/ellipse-3.png")}
        />
        <Image
          style={styles.rupeeSignIcon}
          resizeMode="cover"
          source={require("../assets/rupeesign.png")}
        />
        <Text style={styles.walkerFootWear}>Walker Foot Wear</Text>
        <TextInput
          style={styles.amountTextInput}
          placeholder="Enter Amount"
          keyboardType="number-pad"
          autoCapitalize="none"
          placeholderTextColor="rgba(255, 255, 255, 0.26)"
        />
        <TextInput
          style={styles.descriptionTextInput}
          placeholder="Description"
          keyboardType="default"
          placeholderTextColor="rgba(255, 255, 255, 0.28)"
        />
        <Text style={styles.hDFCBANKText}>HDFC BANK</Text>
      </View>
      <View style={styles.toolbarView}>
        <View style={styles.groupView}>
          <View style={styles.toolBarView} />
          <Text style={styles.paymentText}>Payment</Text>
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
      <View style={styles.frameView}>
        <Pressable
          style={styles.framePressable}
          onPress={() =>
            navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" })
          }
        >
          <View style={styles.rectangleView} />
          <Text style={styles.proceedToPay}>Proceed to Pay</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ellipseIcon: {
    position: "absolute",
    top: 8,
    left: 4,
    width: 57,
    height: 50,
  },
  rupeeSignIcon: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  walkerFootWear: {
    position: "absolute",
    top: 8,
    left: 82,
    fontSize: 21,
    lineHeight: 29,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  amountTextInput: {
    position: "absolute",
    top: 101,
    left: 41,
    borderRadius: 6,
    backgroundColor: "rgba(255, 255, 255, 0)",
    borderStyle: "solid",
    borderColor: "#5111d9",
    borderWidth: 1,
    width: 268,
    height: 33,
    overflow: "hidden",
  },
  descriptionTextInput: {
    position: "absolute",
    top: 157,
    left: 40,
    borderRadius: 6,
    backgroundColor: "rgba(255, 255, 255, 0)",
    borderStyle: "solid",
    borderColor: "#5111d9",
    borderWidth: 1,
    width: 268,
    height: 33,
    overflow: "hidden",
  },
  hDFCBANKText: {
    position: "absolute",
    top: 36,
    left: 86,
    fontSize: 14,
    lineHeight: 29,
    fontFamily: "Roboto",
    color: "#22e54d",
    textAlign: "left",
  },
  paymentGridView: {
    position: "absolute",
    top: 60,
    left: 6,
    backgroundColor: "#11101b",
    width: 348,
    height: 223,
  },
  toolBarView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#19024a",
    width: 360,
    height: 43,
  },
  paymentText: {
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
  rectangleView: {
    position: "absolute",
    top: 3,
    left: 24,
    backgroundColor: "#655757",
    width: 311,
    height: 29,
  },
  proceedToPay: {
    position: "absolute",
    top: 3,
    left: 112,
    fontSize: 20,
    lineHeight: 29,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  framePressable: {
    position: "absolute",
    top: 0,
    left: -5,
    width: 369,
    height: 35,
  },
  frameView: {
    position: "absolute",
    top: 274,
    left: 6,
    width: 364,
    height: 35,
  },
  makePaymentView: {
    position: "relative",
    backgroundColor: "#051113",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default MakePayment;
