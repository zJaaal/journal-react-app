import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Paper,
  TextField,
  Divider,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import MenuBookTwoToneIcon from "@mui/icons-material/MenuBookTwoTone";
import LoginIcon from "@mui/icons-material/Login";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      height={"100vh"}
    >
      <Grid item xs={6}>
        <Paper elevation={4}>
          <Card>
            <CardContent>
              <Grid
                container
                direction="column"
                rowSpacing={1}
                justifyContent="center"
                alignItems="center"
                height={"100%"}
              >
                <MenuBookTwoToneIcon
                  sx={{ marginTop: "4px", fontSize: "30px" }}
                  color="secondary"
                />
                <Grid item xs={3}>
                  <Typography variant="h4" gutterBottom>
                    Journal App
                  </Typography>
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    name="email"
                    color="secondary"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item xs={3}>
                  <TextField
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    name="password"
                    type="password"
                    color="secondary"
                  />
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                rowSpacing={2}
              >
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<LoginIcon />}
                  >
                    Login
                  </Button>
                </Grid>
                <Divider
                  variant="middle"
                  sx={{ width: "55%", paddingTop: "16px" }}
                />
                <Grid item xs={4}>
                  <Button variant="outlined" startIcon={<GoogleIcon />}>
                    Sign in with Google
                  </Button>
                </Grid>
                <Grid item xs={4} mt={4}>
                  <Link to="/auth/register">
                    <Button size="small">Register</Button>
                  </Link>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
