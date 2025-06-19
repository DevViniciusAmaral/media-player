import { PixelRatio } from "react-native";
import { StyleSheet } from "react-native-unistyles";

export const styles = StyleSheet.create((theme) => ({
  text: (size: number, fontFamily: string) => ({
    fontFamily,
    fontSize: PixelRatio.getFontScale() * size,
    color: theme.colors.white,
  }),
}));
