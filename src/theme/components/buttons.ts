import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";

const Button = {
  baseStyle: {
    fontWeight: "bold",
  },
  sizes: {
    lg: {
      px: "30px",
      py: "20px",
    },
  },
  variants: {
    primary: {
      bg: "main",
      color: "white",
      transition: "0.3s",
      _hover: {
        bg: "color.1",
        color: "white",
      },
    },
    white: (props: StyleFunctionProps) => ({
      boxShadow: "xl",
      color: mode("main", "white")(props),
      bgColor: mode("white", "main")(props),
      _hover: {
        bgColor: mode("main", "color.1")(props),
        color: mode("white", "white")(props),
      },
    }),
    rounded: {
      bg: "main",
      color: "white",
      borderRadius: "16px",
      transition: "0.3s",
      _hover: {
        bg: "color.1",
        color: "white",
        boxShadow: "xl",
      },
    },
    circle: {
      bg: "main",
      color: "white",
      borderRadius: "50%",
      border: "0",
      _hover: {
        bg: "color.1",
        color: "white",
        boxShadow: "xl",
      },
    },
    text: (props: StyleFunctionProps) => ({
      bg: "transparent",
      color: mode("text.dark.0", "main")(props),
      _hover: {
        color: mode("main", "color.1")(props),
      },
    }),
  },
};

export default Button;
