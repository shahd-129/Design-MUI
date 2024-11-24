import { createTheme } from "@mui/material";
const Theme = createTheme({
  palette: {
    primary: {
      main: "#1e2d3b",
    },
    secondary: {
      main: "#edcd1f",
    },
    greyBackground: {
      main: "#f7f7f7",
    },
    typography: {
      fontFamily: "Source Code Pro  sans-serif",
      colorTypography: "#3d5975"
    },
    spacing: 1,
    // components: {
    //   MuiCssBaseline: {
    //     styleOverrides: {
    //       body: {
    //         fontFamily: "EB Garamond , sans-serif",
    //       },
    //     },
    //   },
    // },
  }
});

export default Theme;
