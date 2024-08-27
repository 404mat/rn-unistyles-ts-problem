import { brandColors } from "./colors";

export const lightTheme = {
  colors: {
    typography: "#000000",
    background: "#FFFFFF",
    ...brandColors,
  },
  blue: "blue",
} as const;

export const darkTheme = {
  colors: {
    typography: "#FFFFFF",
    background: "#000000",
  },
} as const;

// define other themes
