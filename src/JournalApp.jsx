import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Typography,
  Paper,
  Grid,
  Container,
} from "@mui/material";
import "./JournalApp.css";

function JournalApp() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Paper>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          height={"100vh"}
        >
          <Grid item xs={12}>
            <Typography variant="h3" align="center">
              Hello World
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </ThemeProvider>
  );
}

export default JournalApp;
