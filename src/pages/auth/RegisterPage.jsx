import {
  Grid,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Paper,
  TextField,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const RegisterPage = () => {
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
                justifyContent="center"
                alignItems="center"
                height={"100%"}
                rowSpacing={1}
              >
                <Grid item>
                  <AccountCircleIcon
                    sx={{ fontSize: "35px" }}
                    color="secondary"
                  />
                </Grid>
                <Grid item marginBottom={1}>
                  <Typography variant="h5" gutterBottom>
                    Create Account
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="Name"
                    variant="standard"
                    name="name"
                    color="secondary"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    name="email"
                    color="secondary"
                    autoComplete="off"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="Password"
                    variant="standard"
                    name="password"
                    type="password"
                    color="secondary"
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-basic"
                    label="Confirm Password"
                    variant="standard"
                    name="confirm"
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
                rowSpacing={3}
              >
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<ArrowForwardIosIcon />}
                    type="submit"
                  >
                    Register
                  </Button>
                </Grid>
                <Grid item mt={4}>
                  <Link to="/auth/login">
                    <Button size="small">Already have an account?</Button>
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

export default RegisterPage;
