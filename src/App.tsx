import { theme } from "./style/custom-theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <NavBar />
      </ThemeProvider>
    </>
  );
}

export default App;
