import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },

  menuButtonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 16,
  },

  menuButton: (isActive: boolean) => ({
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 100,
    backgroundColor: isActive ? theme.colors.purple : "transparent",
  }),

  menuTextButton: (isActive: boolean) => ({
    color: isActive ? theme.colors.white : `${theme.colors.white}70`,
  }),
}));
