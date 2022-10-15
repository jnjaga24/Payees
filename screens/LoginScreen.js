import * as React from "react";
import { Text, StyleSheet, View, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.loginScreenView}>
      <View style={styles.paymentGridView}>
        <View style={styles.frameView}>
          <Text style={styles.loginText}>Login</Text>
        </View>
        <View style={[styles.frameView1, styles.mt28]}>
          <TextInput
            style={styles.usernameTextInput}
            placeholder="Enter Username"
            keyboardType="default"
            placeholderTextColor="rgba(255, 255, 255, 0.26)"
          />
          <TextInput
            style={[styles.passwordTextInput, styles.mt28]}
            placeholder="Enter Password"
            keyboardType="default"
            placeholderTextColor="rgba(255, 255, 255, 0.28)"
          />
        </View>
        <Pressable
          style={[styles.framePressable, styles.mt28]}
          onPress={() =>
            navigation.navigate("DrawerRoot", { screen: "BottomTabsRoot" })
          }
        >
          <Text style={styles.submitText}>Submit</Text>
        </Pressable>
      </View>
      <View style={styles.toolbarView}>
        <View style={styles.groupView}>
          <View style={styles.toolBarView} />
          <Text style={styles.payeesText}>Payees</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mt28: {
    marginTop: 28,
  },
  loginText: {
    position: "relative",
    fontSize: 28,
    lineHeight: 29,
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "left",
  },
  frameView: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  usernameTextInput: {
    position: "relative",
    borderRadius: 6,
    backgroundColor: "rgba(255, 255, 255, 0)",
    borderStyle: "solid",
    borderColor: "#5111d9",
    borderWidth: 1,
    width: 268,
    height: 33,
    flexShrink: 0,
    overflow: "hidden",
  },
  passwordTextInput: {
    position: "relative",
    borderRadius: 6,
    backgroundColor: "rgba(255, 255, 255, 0)",
    borderStyle: "solid",
    borderColor: "#5111d9",
    borderWidth: 1,
    width: 268,
    height: 33,
    flexShrink: 0,
    overflow: "hidden",
  },
  frameView1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  submitText: {
    position: "relative",
    fontSize: 26,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#eccdcd",
    textAlign: "left",
  },
  framePressable: {
    borderRadius: 18,
    backgroundColor: "#e04040",
    flexDirection: "row",
    paddingHorizontal: 90,
    paddingVertical: 8,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  paymentGridView: {
    position: "absolute",
    top: 292,
    left: 7,
    backgroundColor: "#11101b",
    flexDirection: "column",
    paddingHorizontal: 39,
    paddingVertical: 32,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  toolBarView: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#19024a",
    width: 360,
    height: 43,
  },
  payeesText: {
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
  loginScreenView: {
    position: "relative",
    backgroundColor: "#051113",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default LoginScreen;
