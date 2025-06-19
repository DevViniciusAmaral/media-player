import React from "react";
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
} from "react-native";
import { useStyles } from "react-native-unistyles";
import { stylesheet } from "./styles";

export interface TextInputProps extends RNTextInputProps {
  size?: number;
  weight?: "light" | "regular" | "medium" | "bold" | "black";
}

export const TextInput = ({
  size = 16,
  weight = "regular",
  style,
  ...rest
}: TextInputProps) => {
  const { styles, theme } = useStyles(stylesheet);

  const fontFamily = {
    light: theme.fonts.light,
    regular: theme.fonts.regular,
    medium: theme.fonts.medium,
    bold: theme.fonts.bold,
    black: theme.fonts.black,
  }[weight];

  return (
    <RNTextInput {...rest} style={[styles.input(size, fontFamily), style]} />
  );
};
