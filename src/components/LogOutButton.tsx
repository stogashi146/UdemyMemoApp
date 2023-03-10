import React from "react";
import { TouchableOpacity, Text, StyleSheet, Alert } from "react-native";
import firebase from "firebase";
import { useNavigation } from "@react-navigation/native";

export default function LogOutButton() {
  const navigation: any = useNavigation();
  function handlePress() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "LogIn" }],
        });
      })
      .catch(() => {
        Alert.alert("ログアウトに失敗しました");
      });
  }
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.label} onPress={() => handlePress()}>
        ログアウト
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 3,
  },
  label: {
    fontSize: 14,
    color: "rgba(255,255,255,0.7)",
  },
});
