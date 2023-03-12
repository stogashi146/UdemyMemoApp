import React from "react";
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface ButtonProps {
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
  style?: any;
}

export default function Button(props: ButtonProps) {
  const { label, onPress, style } = props;
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
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
});
