import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import firebase from "firebase";

import MemoListScreen from "./src/screens/MemoListScreen";
import MemoDetailScreen from "./src/screens/MemoDetailScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";
import MemoCreateScreen from "./src/screens/MemoCreateScreen";
import LogInScreen from "./src/screens/LogInScreen";
import SignUpScreen from "./src/screens/SignUpScreen";

const Stack = createNativeStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyAlJCz-u0hvibIIr8fubkD-2Bt4ZkBcKrc",
  authDomain: "udemymemoapp02.firebaseapp.com",
  projectId: "udemymemoapp02",
  storageBucket: "udemymemoapp02.appspot.com",
  messagingSenderId: "673347927424",
  appId: "1:673347927424:web:7af91885d54885906f9565",
};
// 既に初期化されているかチェック
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUp"
        screenOptions={{
          headerStyle: { backgroundColor: "#467fd3" },
          headerTitleStyle: { color: "#fff" },
          headerTitle: "Memo App",
          headerTintColor: "#fff",
          headerBackTitle: "Back",
          gestureDirection: "horizontal",
          gestureEnabled: true,
        }}
      >
        <Stack.Screen name="MemoList" component={MemoListScreen} />
        <Stack.Screen name="MemoDetail" component={MemoDetailScreen} />
        <Stack.Screen name="MemoCreate" component={MemoCreateScreen} />
        <Stack.Screen name="MemoEdit" component={MemoEditScreen} />
        <Stack.Screen
          name="LogIn"
          component={LogInScreen}
          options={{ gestureDirection: "vertical" }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{ gestureDirection: "vertical" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
