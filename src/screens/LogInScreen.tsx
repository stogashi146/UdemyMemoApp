import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import Button from "../components/Button";

export default function LogInScreen(props: any) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Login</Text>
        <TextInput style={styles.input} value="Email Adress" />
        <TextInput style={styles.input} value="Password" />
        <Button
          label="Submit"
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [{ name: "MemoList" }],
            })
          }
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not Registred?</Text>
          <TouchableOpacity
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: "SignUp" }],
              })
            }
          >
            <Text style={styles.footerLink}>Sign Up here!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: "#ddd",
    borderWidth: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  buttonContainer: {
    backgroundColor: "#467fd3",
    borderRadius: 4,
    alignSelf: "flex-start",
    marginBottom: 24,
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingVertical: 8,
    paddingHorizontal: 32,
    color: "#fff",
  },
  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: "#467fd3",
  },
  footer: {
    flexDirection: "row",
  },
});
