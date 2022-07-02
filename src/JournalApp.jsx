import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Typography,
  Paper,
  Grid,
  Container,
} from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routers/AppRouter";
import "./JournalApp.css";

function JournalApp() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <CssBaseline />
        <Paper>
          <AppRouter />
        </Paper>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default JournalApp;
