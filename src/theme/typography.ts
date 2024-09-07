const typography = {
  fonts: {
    heading: "var(--font-inter)",
    body: "var(--font-inter)",
  },
  textStyles: {
    h1: {
      fontSize: ["35px", "2.65em", "3.2em", "80px"], // Responsive font sizes
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "initial",
    },
    h2: {
      fontSize: ["30px", "30px", "40px", "50px"], // Responsive font sizes
      fontWeight: "600",
      lineHeight: "100%",
      letterSpacing: "0",
    },
    h3: {
      fontSize: ["25px", "25px", "30px", "40px"], // Responsive font sizes
      fontWeight: "800",
      lineHeight: "110%",
      letterSpacing: "0",
    },
    h4: {
      fontSize: ["20px", "22px", "24px", "28px"], // Responsive font sizes
      fontWeight: "700",
      lineHeight: "110%",
      letterSpacing: "",
    },
    subtitle: {
      fontSize: ["14px", "18px"], // Responsive font sizes
      lineHeight: ["20px", "30px"],
      fontWeight: "500",
    },
  },
};

export default typography;
