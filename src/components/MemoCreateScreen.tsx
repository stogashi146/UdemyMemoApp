import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";

import AppBar from "../components/AppBar";
import CircleButton from "../components/CircleButton";

export default function MemoCreateScreen() {
  return (
    // NOTE: キーボードの高さ分Containerを押し上げる
    <KeyboardAvoidingView style={styles.container} behavior="height">
      <AppBar />
      <View style={styles.inputContainer}>
        <TextInput value="" multiline style={styles.input} />
      </View>
      <CircleButton name="check" />
    </KeyboardAvoidingView>
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
