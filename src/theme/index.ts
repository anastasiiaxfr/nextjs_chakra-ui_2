import { extendTheme, ThemeConfig, StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

import colors from "./colors";
import typography from "./typography";
import Button from "./components/buttons";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const { fonts, textStyles } = typography;

export const theme = extendTheme({
  config,
  colors,
  fonts,
  textStyles,
  components: {
    Button,
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      "*::selection": {
        background: "main",
        color: "white",
      },
      "::-webkit-scrollbar": {
        width: "8px",
        height: "8px",
      },
      "::-webkit-scrollbar-thumb": {
        backgroundColor: mode("main", "main")(props),
        borderRadius: "4px",
      },
      "::-webkit-scrollbar-track": {
        background: mode("white", "dark.1")(props),
      },
      body: {
        overflowX: "hidden",
        bg: mode("white", "dark.0")(props),
        color: mode("text.dark.1", "whiteAlpha.800")(props),
      },
      footer: {
        bg: mode("dark.0", "dark.1")(props),
        color: mode("white", "white")(props),
      },
      header: {
        color: mode("text.dark.1", "white")(props),
      },
    }),
  },
});
