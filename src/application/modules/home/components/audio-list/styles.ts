import { createStyleSheet } from "react-native-unistyles";

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 16,
    padding: 16,
  },

  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray_primary,
  },

  contentIcon: {
    width: 60,
    height: 60,
    borderRadius: 12,
    backgroundColor: theme.colors.gray_primary,
    alignItems: "center",
    justifyContent: "center",
  },

  details: {
    flex: 1,
  },

  author: {
    color: theme.colors.gray_secondary,
  },

  divider: {
    borderBottomWidth: 1,
    borderBottomColor: `${theme.colors.white}05`,
    width: "78%",
    alignSelf: "flex-end",
    marginRight: 16,
  },

  list: {
    paddingBottom: 16,
  },
}));
