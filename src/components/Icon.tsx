import React from "react";
import { View } from "react-native";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import { useFonts } from "@use-expo/font";

import icomoon from "../../assets/fonts/icomoon.ttf";
import selection from "../../assets/fonts/selection.json";

interface IconProps {
  name: "plus" | "check" | "pencil" | "delete";
  size: number;
  color: string;
}
export default function Icon(props: IconProps) {
  const [fontLoaded] = useFonts({ icomoon });
  const { name, size, color } = props;
  const CustomIcon = createIconSetFromIcoMoon(selection);

  if (!fontLoaded) {
    return null;
  }
  return (
    <View>
      <CustomIcon name={name} size={size} color={color} />
    </View>
  );
}

Icon.defaultProps = {
  size: 24,
  color: "#000",
};
