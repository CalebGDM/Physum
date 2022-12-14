import { StyleSheet } from "react-native";

const tintColorLight = '#FFB830';
const tintColorDark = '#FFB830';
const base = {white: "#FFFFFF", dark: "#1E1E1E"}


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
    tertiary:{
      100: "#fbeaea",
      200: "#D4F7EB",
      300: "#BFF3E1",
      400: "#A9EFD7",
      500: "#eb9494",
      600: "#76BCA4",
      700: "#8d5959",
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
    error: '#FF5530',
    tint: tintColorLight,
    tabIconDefault: '#6B6B6B',
    tabIconSelected: tintColorLight,
    base
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
    tertiary:{
      100: "#fbeaea",
      200: "#D4F7EB",
      300: "#BFF3E1",
      400: "#A9EFD7",
      500: "#eb9494",
      600: "#76BCA4",
      700: "#8d5959",
      800: "#3B5E52",
      900: "#1E2F29",
    },
    neutral:{
      100: "#464646",
      200: "#1C1C1C",
      300: "#2A2A2A",
      400: "#CCCCCC",
      500: "#6B6B6B",
      600: "#383838",
      700: "#B5B5B5",
      800: "#0E0E0E",
      900: "#DADADA",
    },
    tint: tintColorDark,
    tabIconDefault: '#6B6B6B',
    tabIconSelected: tintColorDark,
    base
  },
};

