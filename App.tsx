import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MemoListScreen from "./src/screens/MemoListScreen";
import MemoDetailScreen from "./src/screens/MemoDetailScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";
import MemoCreateScreen from "./src/components/MemoCreateScreen";
import LogInScreen from "./src/screens/LogInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MemoDetail"
        screenOptions={{
          headerStyle: { backgroundColor: "#467fd3" },
          headerTitleStyle: { color: "#fff" },
          headerTitle: "Memo App",
          headerTintColor: "#fff",
          headerBackTitle: "Back",
        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen name="LogIn" component={LogInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
