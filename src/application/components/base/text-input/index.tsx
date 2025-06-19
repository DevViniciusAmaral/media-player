import React from "react";
import { TextInput as RNTextInput, TextInputProps as RNTextInputProps } from "react-native";
import { useUnistyles } from "react-native-unistyles";
import { styles } from "./styles";

export interface TextInputProps extends RNTextInputProps {
  size?: number;
  weight?: "light" | "regular" | "medium" | "bold" | "black";
}

export const TextInput = ({ size, weight, style, ...rest }: TextInputProps) => {
  const { theme } = useUnistyles();

  const fontFamily = {
    light: theme.fonts.light,
    regular: theme.fonts.regular,
    medium: theme.fonts.medium,
    bold: theme.fonts.bold,
    black: theme.fonts.black,
  }[weight];

  return <RNTextInput {...rest} style={[styles.input(size, fontFamily), style]} />;
};
