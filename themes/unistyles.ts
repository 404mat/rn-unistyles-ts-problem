import { UnistylesRegistry } from "react-native-unistyles";
import { lightTheme, darkTheme } from "./themes";

// if you defined themes
type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

// override library types
declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  light: lightTheme,
  dark: darkTheme,
}).addConfig({
  adaptiveThemes: true,
});
