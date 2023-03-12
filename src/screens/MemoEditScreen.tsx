import React, { useState, useEffect } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";

import CircleButton from "../components/CircleButton";
import KeyboardSafeView from "../components/KeyboardSafeView";
import firebase from "firebase";
import { translateErrors } from "../utils";

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
          const errorMsg = translateErrors(error.code);
          Alert.alert(errorMsg.title, errorMsg.description);
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
    flex: 1,
  },
  input: {
    flex: 1,
    textAlignVerticalset: "top",
    fontSize: 16,
    lineHeight: 24,
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 27,
  },
});
