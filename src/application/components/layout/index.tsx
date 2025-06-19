import React, { JSX } from "react";
import {
  ScrollViewProps,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { styles } from "./styles";
import { UnistylesRuntime, useUnistyles } from "react-native-unistyles";
import { StatusBar } from "expo-status-bar";

interface LayoutProps extends ScrollViewProps {
  header?: React.ReactNode | JSX.Element;
  footer?: React.ReactNode | JSX.Element;
}

export const Layout = ({
  header,
  footer,
  style,
  scrollEnabled,
  ...rest
}: LayoutProps) => {
  const { theme } = useUnistyles();
  const { themeName } = UnistylesRuntime;

  const behavior = Platform.OS === "ios" ? "padding" : "height";
  const statusBarStyle = themeName === "dark" ? "light" : "dark";

  return (
    <SafeAreaProvider>
      <StatusBar
        style={statusBarStyle}
        backgroundColor={theme.colors.background}
      />
      <KeyboardAvoidingView
        enabled
        behavior={behavior}
        style={styles.container}
      >
        {header && <>{header}</>}
        {scrollEnabled ? (
          <ScrollView {...rest} />
        ) : (
          <View {...rest} style={[styles.content, style]} />
        )}
        {footer && <>{footer}</>}
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  );
};
