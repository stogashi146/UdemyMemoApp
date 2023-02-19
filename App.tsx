import React from "react";
import { StyleSheet, View } from "react-native";

import AppBar from "./src/components/AppBar";
import MemoList from "./src/components/MemoList";
import CircleButton from "./src/components/CircleButton";

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar />
      <MemoList />
      <CircleButton>+</CircleButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  circleButton: {
    backgroundColor: "#467fd3",
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 40,
    bottom: 40,
    // iOSのみ適用される
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    // androidに適用する
    elevation: 8,
  },
  circleButtonLabel: {
    color: "#fff",
    paddingBottom: "8px",
    fontSize: 40,
    lineHeight: 40,
  },
});
