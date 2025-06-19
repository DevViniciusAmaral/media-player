import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { useUnistyles } from "react-native-unistyles";
import { styles } from "./styles";

export interface TextProps extends RNTextProps {
  size?: number;
  weight?: "light" | "regular" | "medium" | "bold" | "black";
}

export const Text = ({ size, weight, style, ...rest }: TextProps) => {
  const { theme } = useUnistyles();

  const fontFamily = {
    light: theme.fonts.light,
    regular: theme.fonts.regular,
    medium: theme.fonts.medium,
    bold: theme.fonts.bold,
    black: theme.fonts.black,
  }[weight];

  return <RNText {...rest} style={[styles.text(size, fontFamily), style]} />;
};
