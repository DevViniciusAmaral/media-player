import { AppThemes } from "@/application/theme/app-themes";

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}
