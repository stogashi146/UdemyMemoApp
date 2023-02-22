import React from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";

import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "../components/KeyboardSafeView";
import { NavigationProp } from "@react-navigation/native";

export default function MemoEditScreen(props: any) {
  const { navigation } = props;
  return (
    // NOTE: キーボードの高さ分Containerを押し上げる
    // バグありのためKeyboardAvoidingViewは使用しない
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput value="買い物リスト" multiline style={styles.input} />
      </View>
      <CircleButton
        name="check"
        onPress={() => {
          navigation.goBack();
        }}
      />
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
