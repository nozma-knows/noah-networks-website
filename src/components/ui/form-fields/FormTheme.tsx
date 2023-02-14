import { createTheme, experimental_sx as sx } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d9f6f5",
    },
    secondary: {
      main: "#00FF00", // SET TO SECOND COLOR
    },
    error: {
      main: "#FF0000", // SET TO ERROR COLOR
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          // color: "#623C3F",
          color: "#000000",
        },
        input: {
          "&::placeholder": {
            opacity: 0.4,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          width: "100%",
          borderRadius: "10px",
          fieldset: {
            borderWidth: 2,
          },
          "&:hover fieldset": {
            borderWidth: 2,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#FFFFFF",
          borderRadius: "10px",
        },
      },
    },
  },
});

export default theme;
