import React from "react";
import { View, StyleSheet, TextInput } from "react-native";

import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "./KeyboardSafeView";

export default function MemoCreateScreen() {
  return (
    // NOTE: キーボードの高さ分Containerを押し上げる
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButton name="check" />
    </KeyboardSafeView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVerticalset: "top",
    fontSize: 16,
    lineHeight: 24,
  },
});
