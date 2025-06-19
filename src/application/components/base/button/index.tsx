import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export const Button = ({ ...rest }: TouchableOpacityProps) => {
  return <TouchableOpacity {...rest} activeOpacity={1} />;
};
