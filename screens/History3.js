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

const History3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.historyView}>
      <View style={styles.toolBarView}>
        <Text style={styles.historyText}>History</Text>
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
      <Pressable
        style={styles.dashboardComponentPressable}
        onPress={() => navigation.navigate("MakePayment")}
      >
        <View style={styles.frameView5}>
          <View style={styles.dashboardFrameView}>
            <View style={styles.dashboardGroupView}>
              <View style={styles.dashboardCardView} />
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require("../assets/vector23.png")}
              />
              <Text style={styles.walkerFootWear}>Walker Foot Wear</Text>
              <Image
                style={styles.vectorIcon1}
                resizeMode="cover"
                source={require("../assets/vector13.png")}
              />
              <Text style={styles.text}>3.9</Text>
              <View style={styles.frameView}>
                <Image
                  style={styles.vectorIcon2}
                  resizeMode="cover"
                  source={require("../assets/vector14.png")}
                />
                <Text style={styles.payNowText}>Pay Now</Text>
              </View>
              <Image
                style={styles.rectangleIcon}
                resizeMode="cover"
                source={require("../assets/rectangle-12.png")}
              />
            </View>
          </View>
          <View style={styles.dashboardFrameView1}>
            <View style={styles.dashboardGroupView1}>
              <View style={styles.dashboardCardView1} />
              <Image
                style={styles.vectorIcon3}
                resizeMode="cover"
                source={require("../assets/vector23.png")}
              />
              <Text style={styles.netflixText}>Netflix</Text>
              <Image
                style={styles.vectorIcon4}
                resizeMode="cover"
                source={require("../assets/vector13.png")}
              />
              <Text style={styles.text1}>4.1</Text>
              <View style={styles.frameView1}>
                <Image
                  style={styles.vectorIcon5}
                  resizeMode="cover"
                  source={require("../assets/vector14.png")}
                />
                <Text style={styles.payNowText1}>Pay Now</Text>
              </View>
              <Image
                style={styles.rectangleIcon1}
                resizeMode="cover"
                source={require("../assets/rectangle-14.png")}
              />
            </View>
          </View>
          <View style={styles.dashboardFrameView2}>
            <View style={styles.dashboardGroupView2}>
              <View style={styles.dashboardCardView2} />
              <Image
                style={styles.vectorIcon6}
                resizeMode="cover"
                source={require("../assets/vector23.png")}
              />
              <Text style={styles.hDFCBankText}>HDFC Bank</Text>
              <Image
                style={styles.vectorIcon7}
                resizeMode="cover"
                source={require("../assets/vector13.png")}
              />
              <Text style={styles.text2}>3.0</Text>
              <View style={styles.frameView2}>
                <Image
                  style={styles.vectorIcon8}
                  resizeMode="cover"
                  source={require("../assets/vector14.png")}
                />
                <Text style={styles.payNowText2}>Pay Now</Text>
              </View>
              <Image
                style={styles.rectangleIcon2}
                resizeMode="cover"
                source={require("../assets/rectangle-15.png")}
              />
            </View>
          </View>
          <View style={styles.dashboardFrameView3}>
            <View style={styles.dashboardGroupView3}>
              <View style={styles.dashboardCardView3} />
              <Image
                style={styles.vectorIcon9}
                resizeMode="cover"
                source={require("../assets/vector23.png")}
              />
              <Text style={styles.airtelPostpaidText}>Airtel Postpaid</Text>
              <Image
                style={styles.vectorIcon10}
                resizeMode="cover"
                source={require("../assets/vector13.png")}
              />
              <Text style={styles.text3}>2.8</Text>
              <View style={styles.frameView3}>
                <Image
                  style={styles.vectorIcon11}
                  resizeMode="cover"
                  source={require("../assets/vector14.png")}
                />
                <Text style={styles.payNowText3}>Pay Now</Text>
              </View>
              <Image
                style={styles.rectangleIcon3}
                resizeMode="cover"
                source={require("../assets/rectangle-16.png")}
              />
            </View>
          </View>
          <View style={styles.dashboardFrameView4}>
            <View style={styles.dashboardGroupView4}>
              <View style={styles.dashboardCardView4} />
              <Image
                style={styles.vectorIcon12}
                resizeMode="cover"
                source={require("../assets/vector23.png")}
              />
              <Text style={styles.walkerFootWear1}>Nivaram Soup Shop</Text>
              <Image
                style={styles.vectorIcon13}
                resizeMode="cover"
                source={require("../assets/vector13.png")}
              />
              <Text style={styles.text4}>4.9</Text>
              <View style={styles.frameView4}>
                <Image
                  style={styles.vectorIcon14}
                  resizeMode="cover"
                  source={require("../assets/vector14.png")}
                />
                <Text style={styles.payNowText4}>Pay Now</Text>
              </View>
              <Image
                style={styles.rectangleIcon4}
                resizeMode="cover"
                source={require("../assets/rectangle-17.png")}
              />
            </View>
          </View>
        </View>
      </Pressable>
      <View style={styles.bottomTabView}>
        <View style={styles.homeView}>
          <Image
            style={styles.vectorIcon15}
            resizeMode="cover"
            source={require("../assets/vector4.png")}
          />
          <Text style={styles.homeText}>Home</Text>
        </View>
        <View style={[styles.rateView, styles.ml10]}>
          <View style={styles.groupView}>
            <Text style={styles.rateText}>Rate</Text>
            <Image
              style={styles.vectorIcon16}
              resizeMode="cover"
              source={require("../assets/vector3.png")}
            />
          </View>
        </View>
        <View style={[styles.interestView, styles.ml10]}>
          <View style={styles.groupView1}>
            <Text style={styles.interestText}>Interest</Text>
            <Image
              style={styles.dollarSignIcon}
              resizeMode="cover"
              source={require("../assets/dollarsign2.png")}
            />
          </View>
        </View>
        <View style={[styles.expenseView, styles.ml10]}>
          <View style={styles.groupView2}>
            <Text style={styles.expenseText}>Expense</Text>
            <Image
              style={styles.vectorIcon17}
              resizeMode="cover"
              source={require("../assets/vector.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml10: {
    marginLeft: 10,
  },
  historyText: {
    position: "absolute",
    top: 9,
    left: 175,
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
  vectorIcon: {
    position: "absolute",
    height: "15.63%",
    width: "3.12%",
    top: "32%",
    right: "2.76%",
    bottom: "52.37%",
    left: "94.12%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
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
  vectorIcon1: {
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
  text: {
    position: "absolute",
    top: 33,
    left: 108,
    fontSize: 12,
    lineHeight: 29,
    fontFamily: "Roboto Serif",
    color: "#fff",
    textAlign: "left",
    width: 36,
    height: 25,
  },
  vectorIcon2: {
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
  payNowText: {
    position: "absolute",
    height: "107.41%",
    width: "24.68%",
    top: "0%",
    right: "34.2%",
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
  dashboardFrameView: {
    position: "absolute",
    height: "16.67%",
    width: "99.38%",
    top: "0%",
    right: "0%",
    bottom: "83.33%",
    left: "0.62%",
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
  vectorIcon3: {
    position: "absolute",
    height: "15.63%",
    width: "3.12%",
    top: "32%",
    right: "2.76%",
    bottom: "52.37%",
    left: "94.12%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  netflixText: {
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
  vectorIcon4: {
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
  text1: {
    position: "absolute",
    top: 33,
    left: 108,
    fontSize: 12,
    lineHeight: 29,
    fontFamily: "Roboto Serif",
    color: "#fff",
    textAlign: "left",
    width: 36,
    height: 25,
  },
  vectorIcon5: {
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
  payNowText1: {
    position: "absolute",
    height: "107.41%",
    width: "24.68%",
    top: "0%",
    right: "34.2%",
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
    top: 9,
    left: 1,
    width: 81,
    height: 91,
  },
  dashboardGroupView1: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 323,
    height: 100,
  },
  dashboardFrameView1: {
    position: "absolute",
    height: "16.67%",
    width: "99.38%",
    top: "20.83%",
    right: "0%",
    bottom: "62.5%",
    left: "0.62%",
  },
  dashboardCardView2: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#11101b",
    width: 323,
    height: 100,
  },
  vectorIcon6: {
    position: "absolute",
    height: "15.63%",
    width: "3.12%",
    top: "32%",
    right: "2.76%",
    bottom: "52.37%",
    left: "94.12%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  hDFCBankText: {
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
  vectorIcon7: {
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
  text2: {
    position: "absolute",
    top: 33,
    left: 108,
    fontSize: 12,
    lineHeight: 29,
    fontFamily: "Roboto Serif",
    color: "#fff",
    textAlign: "left",
    width: 36,
    height: 25,
  },
  vectorIcon8: {
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
  payNowText2: {
    position: "absolute",
    height: "107.41%",
    width: "24.68%",
    top: "0%",
    right: "34.2%",
    bottom: "-7.41%",
    left: "41.13%",
    fontSize: 12,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Roboto Serif",
    color: "#2b12c6",
    textAlign: "left",
  },
  frameView2: {
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
  rectangleIcon2: {
    position: "absolute",
    top: 9,
    left: 1,
    width: 81,
    height: 91,
  },
  dashboardGroupView2: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 323,
    height: 100,
  },
  dashboardFrameView2: {
    position: "absolute",
    height: "16.67%",
    width: "99.38%",
    top: "41.67%",
    right: "0%",
    bottom: "41.67%",
    left: "0.62%",
  },
  dashboardCardView3: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#11101b",
    width: 323,
    height: 100,
  },
  vectorIcon9: {
    position: "absolute",
    height: "15.63%",
    width: "3.12%",
    top: "32%",
    right: "2.76%",
    bottom: "52.37%",
    left: "94.12%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  airtelPostpaidText: {
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
  vectorIcon10: {
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
  text3: {
    position: "absolute",
    top: 33,
    left: 108,
    fontSize: 12,
    lineHeight: 29,
    fontFamily: "Roboto Serif",
    color: "#fff",
    textAlign: "left",
    width: 36,
    height: 25,
  },
  vectorIcon11: {
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
  payNowText3: {
    position: "absolute",
    height: "107.41%",
    width: "24.68%",
    top: "0%",
    right: "34.2%",
    bottom: "-7.41%",
    left: "41.13%",
    fontSize: 12,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Roboto Serif",
    color: "#2b12c6",
    textAlign: "left",
  },
  frameView3: {
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
  rectangleIcon3: {
    position: "absolute",
    top: 9,
    left: 1,
    width: 81,
    height: 91,
  },
  dashboardGroupView3: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 323,
    height: 100,
  },
  dashboardFrameView3: {
    position: "absolute",
    height: "16.67%",
    width: "99.38%",
    top: "62.5%",
    right: "0%",
    bottom: "20.83%",
    left: "0.62%",
  },
  dashboardCardView4: {
    position: "absolute",
    top: 0,
    left: 0,
    borderRadius: 10,
    backgroundColor: "#11101b",
    width: 323,
    height: 100,
  },
  vectorIcon12: {
    position: "absolute",
    height: "15.63%",
    width: "3.12%",
    top: "32%",
    right: "2.76%",
    bottom: "52.37%",
    left: "94.12%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  walkerFootWear1: {
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
  vectorIcon13: {
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
  text4: {
    position: "absolute",
    top: 33,
    left: 108,
    fontSize: 12,
    lineHeight: 29,
    fontFamily: "Roboto Serif",
    color: "#fff",
    textAlign: "left",
    width: 36,
    height: 25,
  },
  vectorIcon14: {
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
  payNowText4: {
    position: "absolute",
    height: "107.41%",
    width: "24.68%",
    top: "0%",
    right: "34.2%",
    bottom: "-7.41%",
    left: "41.13%",
    fontSize: 12,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Roboto Serif",
    color: "#2b12c6",
    textAlign: "left",
  },
  frameView4: {
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
  rectangleIcon4: {
    position: "absolute",
    top: 9,
    left: 1,
    width: 81,
    height: 91,
  },
  dashboardGroupView4: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 323,
    height: 100,
  },
  dashboardFrameView4: {
    position: "absolute",
    height: "16.67%",
    width: "99.38%",
    top: "83.33%",
    right: "0.62%",
    bottom: "0%",
    left: "0%",
  },
  frameView5: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 325,
    height: 600,
  },
  dashboardComponentPressable: {
    position: "absolute",
    top: 124,
    left: 16,
    width: 325,
    height: 600,
  },
  vectorIcon15: {
    position: "absolute",
    height: "46.29%",
    width: "54.35%",
    top: "11.9%",
    right: "17.39%",
    bottom: "41.8%",
    left: "28.26%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  homeText: {
    position: "absolute",
    top: 17,
    left: 15,
    fontSize: 15,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "rgba(255, 255, 255, 0.41)",
    textAlign: "left",
  },
  homeView: {
    position: "relative",
    width: 60,
    height: 42,
    flexShrink: 0,
    overflow: "hidden",
  },
  rateText: {
    position: "absolute",
    top: 12,
    left: 0,
    fontSize: 15,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "rgba(255, 255, 255, 0.34)",
    textAlign: "left",
  },
  vectorIcon16: {
    position: "absolute",
    height: "45.73%",
    width: "80.65%",
    top: "0%",
    right: "12.9%",
    bottom: "54.27%",
    left: "6.45%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView: {
    position: "absolute",
    top: 5,
    left: 19,
    width: 31,
    height: 41,
  },
  rateView: {
    position: "relative",
    width: 60,
    height: 42,
    flexShrink: 0,
    overflow: "hidden",
  },
  interestText: {
    position: "absolute",
    top: 15.09,
    left: 0,
    fontSize: 15,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "rgba(255, 255, 255, 0.34)",
    textAlign: "left",
  },
  dollarSignIcon: {
    position: "absolute",
    top: 0,
    left: 11.41,
    width: 25,
    height: 25,
    overflow: "hidden",
  },
  groupView1: {
    position: "absolute",
    top: 1.91,
    left: 15,
    width: 53,
    height: 44.09,
  },
  interestView: {
    position: "relative",
    width: 70,
    height: 42,
    flexShrink: 0,
    overflow: "hidden",
  },
  expenseText: {
    position: "absolute",
    top: 14,
    left: 0,
    fontSize: 15,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "rgba(255, 255, 255, 0.34)",
    textAlign: "left",
  },
  vectorIcon17: {
    position: "absolute",
    height: "50.87%",
    width: "27.41%",
    top: "0%",
    right: "37.5%",
    bottom: "49.13%",
    left: "35.09%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  groupView2: {
    position: "absolute",
    top: 3,
    left: 3,
    width: 57,
    height: 43,
  },
  expenseView: {
    position: "relative",
    width: 65,
    height: 42,
    flexShrink: 0,
    overflow: "hidden",
  },
  bottomTabView: {
    position: "absolute",
    top: 760,
    left: 0,
    backgroundColor: "#580555",
    width: 360,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  historyView: {
    position: "relative",
    backgroundColor: "#051113",
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default History3;
