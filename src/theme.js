import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

//COLOR DESIGN TOKENS
export const tokens = (mode) => ({
  ...(mode === "dark"
    ? {
        grey: {
          100: "#e0e0e0",
          200: "#c2c2c2",
          300: "#a3a3a3",
          400: "#858585",
          500: "#666666",
          600: "#525252",
          700: "#3d3d3d",
          800: "#292929",
          900: "#141414",
        },
        primary: {
          100: "#eedafb",
          200: "#ddb4f7",
          300: "#cc8ff2",
          400: "#bb69ee",
          500: "#aa44ea",
          600: "#8836bb",
          700: "#66298c",
          800: "#441b5e",
          900: "#220e2f",
        },
        lightpink: {
          100: "#ebd6f7",
          200: "#d7adf0",
          300: "#c384e8",
          400: "#af5be1",
          500: "#9b32d9",
          600: "#7c28ae",
          700: "#5d1e82",
          800: "#3e1457",
          900: "#1f0a2b",
        },
        lightpurple: {
          100: "#f4e1f9",
          200: "#e9c4f4",
          300: "#dda6ee",
          400: "#d289e9",
          500: "#c76be3",
          600: "#9f56b6",
          700: "#774088",
          800: "#502b5b",
          900: "#28152d",
        },
        yellow: {
          100: "#fff3cc",
          200: "#ffe799",
          300: "#ffdb66",
          400: "#ffcf33",
          500: "#ffc300",
          600: "#cc9c00",
          700: "#997500",
          800: "#664e00",
          900: "#332700",
        },
        teal: {
          100: "#ccf2ff",
          200: "#99e5ff",
          300: "#66d9ff",
          400: "#33ccff",
          500: "#00bfff",
          600: "#0099cc",
          700: "#007399",
          800: "#004c66",
          900: "#002633",
        },
      }
    : {
        grey: {
          100: "#141414",
          200: "#292929",
          300: "#3d3d3d",
          400: "#525252",
          500: "#666666",
          600: "#858585",
          700: "#a3a3a3",
          800: "#c2c2c2",
          900: "#e0e0e0",
        },
        primary: {
          100: "#220e2f",
          200: "#441b5e",
          300: "#66298c",
          400: "#8836bb",
          500: "#aa44ea",
          600: "#bb69ee",
          700: "#cc8ff2",
          800: "#ddb4f7",
          900: "#eedafb",
        },
        lightpink: {
          100: "#1f0a2b",
          200: "#3e1457",
          300: "#5d1e82",
          400: "#7c28ae",
          500: "#9b32d9",
          600: "#af5be1",
          700: "#c384e8",
          800: "#d7adf0",
          900: "#ebd6f7",
        },
        lightpurple: {
          100: "#28152d",
          200: "#502b5b",
          300: "#774088",
          400: "#9f56b6",
          500: "#c76be3",
          600: "#d289e9",
          700: "#dda6ee",
          800: "#e9c4f4",
          900: "#f4e1f9",
        },
        yellow: {
          100: "#332700",
          200: "#664e00",
          300: "#997500",
          400: "#cc9c00",
          500: "#ffc300",
          600: "#ffcf33",
          700: "#ffdb66",
          800: "#ffe799",
          900: "#fff3cc",
        },
        teal: {
          100: "#002633",
          200: "#004c66",
          300: "#007399",
          400: "#0099cc",
          500: "#00bfff",
          600: "#33ccff",
          700: "#66d9ff",
          800: "#99e5ff",
          900: "#ccf2ff",
        },
      }),
});

//mui them settings
export const themeSettings = (mode) => {
  const colors = tokens(mode);
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.yellow[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[900],
            },
          }
        : {
            primary: {
              main: colors.primary[500],
            },
            secondary: {
              main: colors.yellow[500],
            },
            neutral: {
              dark: colors.grey[700],
              main: colors.grey[500],
              light: colors.grey[100],
            },
            background: {
              default: colors.primary[900],
            },
          }),
    },
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};


// CONTEXT FOR COLOR MODE
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () =>
        setMode((prev) => (prev === "light" ? "dark" : "light")),
    }),
    []
  );

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return [theme, colorMode];
};