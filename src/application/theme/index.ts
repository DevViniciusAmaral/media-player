import { UnistylesRegistry } from "react-native-unistyles";
import { appThemes } from "./app-themes";

UnistylesRegistry.addThemes(appThemes).addConfig({ adaptiveThemes: true });
