const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./screens/LoginScreen";
import AndroidLarge3 from "./screens/AndroidLarge3";
import Admins1 from "./screens/Admins1";
import MakePayment from "./screens/MakePayment";
import Notifications from "./screens/Notifications";
import SideMenu from "./screens/SideMenu";
import PaymentScreen from "./screens/PaymentScreen";
import Rate1 from "./screens/Rate1";
import Expense3 from "./screens/Expense3";
import Interest1 from "./screens/Interest1";
import History3 from "./screens/History3";
import Dashboard1 from "./screens/Dashboard1";
import AndroidLarge1 from "./screens/AndroidLarge1";
import Home1 from "./components/Home1";
import Home from "./components/Home";
import Interest from "./components/Interest";
import Rate from "./components/Rate";
import Expense2 from "./components/Expense2";
import Expense1 from "./components/Expense1";
import Expense from "./components/Expense";
import History2 from "./components/History1";
import History1 from "./components/History";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

function DrawerRoot({ navigation }) {
  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false, drawerStyle: { width: 360 } }}
      drawerContent={(props) => <SideMenu {...props} />}
    >
      <Drawer.Screen name="BottomTabsRoot" component={BottomTabsRoot} />
      <Drawer.Screen
        name="PaymentScreen"
        component={PaymentScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Admins"
        component={Admins1}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
function BottomTabsRoot({ navigation }) {
  const [bottomTabItemsNormal] = React.useState([
    <Home />,
    <Rate />,
    <Expense2 />,
    <Expense />,
    <History1 />,
  ]);
  const [bottomTabItemsActive] = React.useState([
    <Home1 />,
    <Interest />,
    <Interest />,
    <Expense1 />,
    <History2 />,
  ]);
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={({ state, descriptors, navigation }) => {
        const activeIndex = state.index;
        return (
          <View
            style={{
              backgroundColor: "#580555",
              width: 360,
              flexDirection: "row",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              height: 42,
            }}
          >
            {bottomTabItemsNormal.map((item, index) => {
              const isFocused = state.index === index;
              return (
                <Pressable
                  style={{ flex: 1 }}
                  onPress={() => {
                    navigation.navigate({
                      name: state.routes[index].name,
                      merge: true,
                    });
                  }}
                >
                  {activeIndex === index
                    ? bottomTabItemsActive[index] || item
                    : item}
                </Pressable>
              );
            })}
          </View>
        );
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard1}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Rate"
        component={Rate1}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Interest"
        component={Interest1}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Expense"
        component={Expense3}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="History"
        component={History3}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const SplashScreen = () => {
    return <AndroidLarge3 />;
  };
  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 3000);
  }, []);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DrawerRoot" component={DrawerRoot} />

            <Stack.Screen
              name="AndroidLarge3"
              component={AndroidLarge3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="MakePayment"
              component={MakePayment}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AndroidLarge1"
              component={AndroidLarge1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SplashScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
