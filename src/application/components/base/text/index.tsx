import React from "react";
import { Text as RNText, TextProps as RNTextProps } from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";

export interface TextProps extends RNTextProps {
  size?: number;
  weight?: "light" | "regular" | "medium" | "bold" | "black";
}

export const Text = ({
  size = 16,
  weight = "regular",
  style,
  ...rest
}: TextProps) => {
  const { styles, theme } = useStyles(stylesheet);

  const fontFamily = {
    light: theme.fonts.light,
    regular: theme.fonts.regular,
    medium: theme.fonts.medium,
    bold: theme.fonts.bold,
    black: theme.fonts.black,
  }[weight];

  return <RNText {...rest} style={[styles.text(size, fontFamily), style]} />;
};
