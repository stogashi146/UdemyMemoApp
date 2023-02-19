import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { string } from "prop-types";
import { IconProps } from "@expo/vector-icons/build/createIconSet";
import Icon from "./Icon";

interface CircleButtonProps {
  style: any;
  name: "plus" | "check" | "pencil" | "delete";
}

export default function CircleButton(props: CircleButtonProps) {
  const { style, name } = props;
  return (
    <View style={[styles.circleButton, style]}>
      <Icon name={name} size={40} color="white" />
    </View>
  );
}

CircleButton.defaultProps = {
  style: {},
  name: "plus",
};

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
    // paddingBottom: 8,
    fontSize: 40,
    lineHeight: 40,
  },
});
