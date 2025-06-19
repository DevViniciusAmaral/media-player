import React, { JSX } from "react";
import {
  ScrollViewProps,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from "react-native";
import { UnistylesRuntime, useStyles } from "react-native-unistyles";
import { StatusBar } from "expo-status-bar";
import { stylesheet } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";

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
  const { styles, theme } = useStyles(stylesheet);
  const { themeName } = UnistylesRuntime;

  const behavior = Platform.OS === "ios" ? "padding" : "height";
  const statusBarStyle = themeName === "dark" ? "light" : "dark";

  return (
    <SafeAreaView style={styles.content}>
      <KeyboardAvoidingView
        enabled
        behavior={behavior}
        style={styles.container}
      >
        <StatusBar
          style={statusBarStyle}
          backgroundColor={theme.colors.background}
        />
        {header && <>{header}</>}
        {scrollEnabled ? (
          <ScrollView {...rest} />
        ) : (
          <View {...rest} style={[styles.content, style]} />
        )}
        {footer && <>{footer}</>}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
