import { StyleSheet } from "react-native";

const tintColorLight = '#FFB830';
const tintColorDark = '#FFB830';
const base = {white: "FFFFFF", dark: "1E1E1E"}


export default {
  light: {
    background: base.white,
    primary:{
      100: "#FFF1D6",
      200: "#FFE3AC",
      300: "#FFD483",
      400: "#FFC659",
      500: "#FFB830",
      600: "#CC9326",
      700: "#996E1D",
      800: "#664A13",
      900: "#33250A",
    },
    secondary:{
      100: "#EAFBF5",
      200: "#D4F7EB",
      300: "#BFF3E1",
      400: "#A9EFD7",
      500: "#94EBCD",
      600: "#76BCA4",
      700: "#598D7B",
      800: "#3B5E52",
      900: "#1E2F29",
    },
    neutral:{
      100: "#DADADA",
      200: "#CCCCCC",
      300: "#B5B5B5",
      400: "#6B6B6B",
      500: "#464646",
      600: "#383838",
      700: "#2A2A2A",
      800: "#1C1C1C",
      900: "#0E0E0E",
    },
    tint: tintColorLight,
    tabIconDefault: '#6B6B6B',
    tabIconSelected: tintColorLight,
  },
  dark: {
    background: base.dark,
    primary:{
      100: "#FFF1D6",
      200: "#FFE3AC",
      300: "#FFD483",
      400: "#FFC659",
      500: "#FFB830",
      600: "#CC9326",
      700: "#996E1D",
      800: "#664A13",
      900: "#33250A",
    },
    secondary:{
      100: "#EAFBF5",
      200: "#D4F7EB",
      300: "#BFF3E1",
      400: "#A9EFD7",
      500: "#94EBCD",
      600: "#76BCA4",
      700: "#598D7B",
      800: "#3B5E52",
      900: "#1E2F29",
    },
    neutral:{
      900: "#0E0E0E",
      800: "#1C1C1C",
      700: "#2A2A2A",
      600: "#383838",
      500: "#464646",
      400: "#6B6B6B",
      300: "#B5B5B5",
      200: "#CCCCCC",
      100: "#DADADA",
    },
    tint: tintColorDark,
    tabIconDefault: '#6B6B6B',
    tabIconSelected: tintColorDark,
  },
};

