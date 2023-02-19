import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface CircleButtonProps {
  children: string;
}

export default function CircleButton(props: CircleButtonProps) {
  const { children } = props;
  return (
    <View style={styles.circleButton}>
      <Text style={styles.circleButtonLabel}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: "#467fd3",
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    right: 40,
    bottom: 40,
    // iOSのみ適用される
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    // androidに適用する
    elevation: 8,
  },
  circleButtonLabel: {
    color: "#fff",
    paddingBottom: "8px",
    fontSize: 40,
    lineHeight: 40,
  },
});
