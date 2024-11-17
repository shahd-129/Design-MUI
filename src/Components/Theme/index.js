import { createTheme } from "@mui/material";
<style>
@import url('https://fonts.googleapis.com/css2?family=Host+Grotesk:ital,wght@0,300..800;1,300..800&display=swap');
</style>
const Theme = createTheme({
  palette: {
    primary: {
      main: "#1e2d3b",
    },
    secondary: {
      main: "#edcd1f",
    },
  typography: {
    fontFamily: "Host Grotesk",
    colorTypography:"#3d5975"
  },
  spacing: 1,
}});

export default Theme;
