import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, StyleSheet } from "react-native";
import CircleButton from "../components/CircleButton";
import firebase from "firebase";
import { dateToString } from "../utils";

interface memoData {
  id: string;
  bodyText: string;
  updatedAt: any;
}

interface memoDetail {
  navigation: any;
  route: {
    params: memoData;
  };
}

export default function MemoDetailScreen(props: memoDetail) {
  const { navigation, route } = props;
  const { id } = route.params;
  const [memo, setMemo] = useState<memoData>();
  useEffect(() => {
    const { currentUser } = firebase.auth();
    let unsubscribe = () => {};
    if (currentUser) {
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/memos`).doc(id);
      unsubscribe = ref.onSnapshot((doc: any) => {
        const data: memoData = doc.data();
        setMemo({
          id: data.id,
          bodyText: data.bodyText,
          updatedAt: data.updatedAt.toDate(),
        });
      });
    }
    return unsubscribe;
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle} numberOfLines={1}>
          {memo && memo.bodyText}
        </Text>
        <Text style={styles.memoDate}>
          {memo && dateToString(memo.updatedAt)}
        </Text>
      </View>

      <ScrollView>
        <View style={styles.memoBodyInner}>
          <Text style={styles.memoText}>{memo && memo.bodyText}</Text>
        </View>
      </ScrollView>

      <CircleButton
        style={{ top: 60, bottom: "auto" }}
        name="pencil"
        onPress={() => {
          navigation.navigate("MemoEdit", {
            id: id,
            bodyText: memo?.bodyText,
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  memoHeader: {
    backgroundColor: "#467fd3",
    height: 96,
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 19,
  },
  memoTitle: {
    color: "#fff",
    fontSize: 20,
    lineHeight: 32,
    fontWeight: "bold",
  },
  memoDate: {
    color: "#fff",
    fontSize: 12,
    lineHeight: 16,
  },
  memoBodyInner: {
    paddingTop: 32,
    paddingBottom: 80,
    paddingHorizontal: 27,
  },
  memoText: {
    fontSize: 16,
    lineHeight: 24,
  },
});
