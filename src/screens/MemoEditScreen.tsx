import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";

import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "../components/KeyboardSafeView";
import firebase from "firebase";

interface memoData {
  id: string;
  bodyText: string;
  updatedAt: any;
}

interface memoEdit {
  navigation: any;
  route: {
    params: memoData;
  };
}
export default function MemoEditScreen(props: memoEdit) {
  const { navigation, route } = props;
  const { id, bodyText } = route.params;
  const [body, setBody] = useState(bodyText);
  console.log(id);
  function handlePress() {
    const { currentUser } = firebase.auth();
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);

      ref
        .set(
          {
            bodyText: body,
            updatedAt: new Date(),
          },
          { merge: true }
        )
        .then(() => {
          navigation.goBack();
        })
        .catch((error) => {
          Alert.alert(error.code);
        });
    }
  }
  return (
    // NOTE: キーボードの高さ分Containerを押し上げる
    // バグありのためKeyboardAvoidingViewは使用しない
    <KeyboardSafeView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          value={body}
          multiline
          style={styles.input}
          onChangeText={(text) => setBody(text)}
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
