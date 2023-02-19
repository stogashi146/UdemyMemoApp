import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import Icon from "./Icon";

interface CircleButtonProps {
  style: any;
  name: "plus" | "check" | "pencil" | "delete";
  onPress?: (event: GestureResponderEvent) => void;
}

export default function CircleButton(props: CircleButtonProps) {
  const { style, name, onPress } = props;
  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <Icon name={name} size={40} color="white" />
    </TouchableOpacity>
  );
}

CircleButton.defaultProps = {
  style: {},
  name: "plus",
  onPress: null,
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
