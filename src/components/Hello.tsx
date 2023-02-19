import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { string, bool } from "prop-types";

interface HelloProps {
  children: string;
  bang?: boolean;
  style?: any;
}

function Hello(props: HelloProps): JSX.Element {
  const { children, bang, style } = props;
  return (
    <View>
      <Text style={[styles.text, style]}>{`Hello ${children}${
        bang ? "!" : ""
      }`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#fff",
    backgroundColor: "blue",
    fontSize: 40,
    fontWeight: "bold",
    padding: 16,
  },
});

Hello.defaultProps = {
  bang: false,
  style: {},
};

export default Hello;
