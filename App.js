import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from "react-native";

import AnimTab2 from "./bottomTab/AnimTab2";

import Home from "./screens/Home";

import Colors from "./constants/Colors";

import {
  Provider,
  MD2DarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from "react-native-paper";

import { createSharedElementStackNavigator } from "react-navigation-shared-element";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.black : Colors.white,
  };

  return (
    <Provider theme={isDarkMode ? MD2DarkTheme : PaperDefaultTheme}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
        <RootStack />
      </NavigationContainer>
    </Provider>
  );
};

const options = {
  gestureEnabled: true,
  gestureDirection: "horizontal",
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
};

const Stack = createSharedElementStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: "React-Native Ui", headerShown: true }}
      />

      <Stack.Screen name="Tab2" component={AnimTab2} />
    </Stack.Navigator>
  );
};

export default App;
