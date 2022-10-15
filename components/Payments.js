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

const Payments = ({ style }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={[styles.paymentsPressable, style]}
      onPress={() => navigation.navigate("PaymentScreen")}
    >
      <Image
        style={styles.vectorIcon}
        resizeMode="cover"
        source={require("../assets/vector10.png")}
      />
      <Text style={[styles.collectionsText, styles.ml21]}>Payments</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  ml21: {
    marginLeft: 21,
  },
  vectorIcon: {
    position: "relative",
    width: 25,
    height: 17.5,
    flexShrink: 0,
  },
  collectionsText: {
    position: "relative",
    fontSize: 25,
    lineHeight: 29,
    fontFamily: "Roboto Serif",
    color: "#fff",
    textAlign: "left",
  },
  paymentsPressable: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
});

export default Payments;
