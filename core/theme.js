import { createTheme } from "@mui/material"

const Theme = createTheme({
  typography: {
    fontFamily: "IRANSans",
  },
  palette: {
    gray: {
      main: "#F5F5F5",
      center: "#ABB4BC",
      100: "#5D6670",
      contrastText: "#ABB4BC",
    },
    lime: {
      main: "#00664A",
      120: "#004F39",
    },
    green: {
      dark: "#2A9B44",
      main: "#28A745",
    },
    blue: {
      main: "#007BFF",
    },
    white: {
      main: "#FFF",
      light: "#FFF",
      dark: "#F5F5F5",
    },
    red: {
      main: "#CB0036",
    },
    orange: {
      main: "#FD7E14",
      light: "#FD7E14",
      dark: "#FD7E14",
      contrastText: "#fff",
    },
    pink: {
      main: "#FF6A6A",
      light: "#fcc2c2",
      dark: "#fc3838",
      contrastText: "#fff",
    },
    black: {
      main: "#1E2022",
      dark: "#000",
      light: "#5D6670",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "24px",
          boxShadow: "none",
          fontFamily: "IRANSans",
          textTransform: "none",
          boxShaddow: 0,
          border: 0,
          height: "40px",
          fontSize: "14px",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textAlign: "right",
          color: "#1E2022",
          //direction: "rtl",
          fontFamily: "IRANSans",
        },
      },
    },
  },
})

export default Theme
