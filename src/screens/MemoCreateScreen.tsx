import React, { useState } from "react";
import { View, StyleSheet, TextInput } from "react-native";

import firebase from "firebase";

import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "../components/KeyboardSafeView";

export default function MemoCreateScreen(props: any) {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState("");

  function handlePress() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    const ref = db.collection(`users/${currentUser?.uid}/memos`);
    ref
      .add({
        bodyText,
        updatedAt: new Date(),
      })
      .then((docRef) => {
        console.log("Created!", docRef.id);
        navigation.goBack();
      })
      .catch((error) => {
        console.log("Error", error);
      });
  }
  return (
    // NOTE: キーボードの高さ分Containerを押し上げる
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          multiline
          style={styles.input}
          onChangeText={(text) => {
            setBodyText(text);
          }}
          autoFocus
        />
      </View>
      <CircleButton name="check" onPress={() => handlePress()} />
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
