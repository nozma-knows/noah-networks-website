import { createTheme, experimental_sx as sx } from "@mui/material/styles";

// export enum ThemeType {
//   Primary = "Primary",
//   Secondary = "Secondary",
//   Title = "Title",
// }

// interface ThemeProps {
//   theme: ThemeType;
// }

// export default function Theme({ theme }: ThemeProps) {
//   switch (theme) {
//     case "Secondary":
//       console.log("Secondary");
//       return secondaryTheme;
//     case "Title":
//       console.log("Title");
//       return titleTheme;
//     default:
//       console.log("Primary");
//       return secondaryTheme;
//   }
// }

// export const primaryTheme = createTheme({
//   palette: {
//     primary: {
//       main: "#d9f6f5",
//     },
//     secondary: {
//       main: "#00FF00", // SET TO SECOND COLOR
//     },
//     error: {
//       main: "#FF0000", // SET TO ERROR COLOR
//     },
//   },
//   components: {
//     MuiInputBase: {
//       styleOverrides: {
//         root: {
//           color: "#e3d1e6",
//         },
//         input: {
//           "&::placeholder": {
//             opacity: 0.4,
//           },
//         },
//       },
//     },
//     MuiOutlinedInput: {
//       styleOverrides: {
//         root: {
//           width: "100%",
//           borderRadius: "10px",
//           fieldset: {
//             borderWidth: 2,
//             borderColor: "#a56baf",
//           },
//           "&:hover .MuiOutlinedInput-notchedOutline": {
//             borderWidth: 4,
//             borderColor: "#a56baf",
//           },
//           "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//             borderWidth: 6,
//             borderColor: "#a56baf",
//           },
//           "&:focused .MuiOutlinedInput-notchedOutline": {
//             borderWidth: 4,
//             borderColor: "#a56baf",
//           },
//         },
//       },
//     },
//     MuiTextField: {
//       // styleOverrides: {
//       //   root: {
//       //     // backgroundColor: "#FFFFFF",
//       //     borderRadius: "10px",
//       //     borderWidth: 2,
//       //     borderColor: "#a56baf",
//       //   },
//       // },
//     },
//   },
// });

// export const secondaryTheme = createTheme({
//   palette: {
//     primary: {
//       main: "#d9f6f5",
//     },
//     secondary: {
//       main: "#00FF00", // SET TO SECOND COLOR
//     },
//     error: {
//       main: "#FF0000", // SET TO ERROR COLOR
//     },
//   },
//   components: {
//     MuiInputBase: {
//       styleOverrides: {
//         root: {
//           color: "#58335e",
//         },
//         input: {
//           "&::placeholder": {
//             opacity: 0.4,
//           },
//         },
//       },
//     },
//     MuiOutlinedInput: {
//       styleOverrides: {
//         root: {
//           width: "100%",
//           borderRadius: "10px",
//           fieldset: {
//             borderWidth: 2,
//             borderColor: "#061515",
//           },
//           "&:hover .MuiOutlinedInput-notchedOutline": {
//             borderWidth: 4,
//             borderColor: "#061515",
//           },
//           "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//             borderWidth: 6,
//             borderColor: "#061515",
//           },
//           "&:focused .MuiOutlinedInput-notchedOutline": {
//             borderWidth: 4,
//             borderColor: "#061515",
//           },
//         },
//       },
//     },
//     MuiTextField: {
//       // styleOverrides: {
//       //   root: {
//       //     // backgroundColor: "#FFFFFF",
//       //     borderRadius: "10px",
//       //     borderWidth: 2,
//       //     borderColor: "#a56baf",
//       //   },
//       // },
//     },
//   },
// });

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
          color: "#e3d1e6",
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
            borderColor: "#a56baf",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderWidth: 4,
            borderColor: "#a56baf",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: 6,
            borderColor: "#a56baf",
          },
          "&:focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: 4,
            borderColor: "#a56baf",
          },
        },
      },
    },
    MuiTextField: {
      // styleOverrides: {
      //   root: {
      //     // backgroundColor: "#FFFFFF",
      //     borderRadius: "10px",
      //     borderWidth: 2,
      //     borderColor: "#a56baf",
      //   },
      // },
    },
  },
});

export default theme;
