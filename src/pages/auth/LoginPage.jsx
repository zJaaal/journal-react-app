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
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator";
import { setError, removeError, setStartLoading } from "../../actions/ui";
import {
  login,
  startGoogleLogin,
  startLoginWithEmailPassword,
} from "../../actions/auth";

const LoginPage = () => {
  const dispatch = useDispatch();

  const { errMsg, loading } = useSelector((state) => state.ui);

  const [values, handleInputChange, reset] = useForm({
    email: "",
    password: "",
  });

  const { email, password } = values;

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(removeError());
    dispatch(setStartLoading());

    if (!formIsValid()) return;

    dispatch(startLoginWithEmailPassword(email, password));
  };

  const handleGoogleLogin = () => {
    dispatch(removeError());
    dispatch(startGoogleLogin());
  };

  const formIsValid = () => {
    if (!email.trim().length) {
      dispatch(setError("Email is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Please enter a valid email"));
      return false;
    } else if (!password.trim().length) {
      dispatch(setError("Password is required"));
      return false;
    }

    return true;
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
      height={"100vh"}
    >
      <Grid item xs={6} component="form" onSubmit={handleLogin}>
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
                <Grid item>
                  <Typography variant="h5" gutterBottom>
                    Journal App
                  </Typography>
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-email"
                    label="Email"
                    variant="standard"
                    name="email"
                    value={email}
                    color="secondary"
                    autoComplete="off"
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-password"
                    label="Password"
                    variant="standard"
                    name="password"
                    value={password}
                    type="password"
                    color="secondary"
                    onChange={handleInputChange}
                  />
                </Grid>
                {errMsg && (
                  <Grid item container justifyContent={"center"}>
                    <Typography
                      variant="subtitle2"
                      color="error"
                      align="center"
                    >
                      {errMsg}
                    </Typography>
                  </Grid>
                )}
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
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<LoginIcon />}
                    type="submit"
                    disabled={loading}
                  >
                    Login
                  </Button>
                </Grid>
                <Divider
                  variant="middle"
                  sx={{ width: "55%", paddingTop: "16px" }}
                />
                <Grid item>
                  <Button
                    variant="outlined"
                    startIcon={<GoogleIcon />}
                    onClick={handleGoogleLogin}
                    disabled={loading}
                  >
                    Sign in with Google
                  </Button>
                </Grid>
                <Grid item mt={4}>
                  <Link to="/auth/register">
                    <Button size="small" disabled={loading}>
                      Register
                    </Button>
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
