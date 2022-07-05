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
import validator from "validator";
import { useDispatch, useSelector } from "react-redux/es/exports";
import useForm from "../../hooks/useForm";
import { setError, removeError, setStartLoading } from "../../actions/ui";
import { startRegisterWithEmailPasswordName } from "../../actions/auth";

const RegisterPage = () => {
  const dispatch = useDispatch();

  const { errMsg, loading } = useSelector((state) => state.ui);

  const [values, handleInputChange, reset] = useForm({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const { name, email, password, confirm } = values;

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(removeError());
    dispatch(setStartLoading());

    if (!formIsValid()) return;

    dispatch(startRegisterWithEmailPasswordName(email, password, name));
  };

  const formIsValid = () => {
    if (!name.trim().length) {
      dispatch(setError("Name is required"));
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError("Email is invalid"));
      return false;
    } else if (password != confirm) {
      dispatch(setError("Passwords are different"));
      return false;
    } else if (password.length < 6) {
      dispatch(setError("Password should have at least 6 characters"));
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
      <Grid item xs={6} component="form" onSubmit={handleRegister}>
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
                    id="standard-name"
                    label="Name"
                    variant="standard"
                    name="name"
                    color="secondary"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-email"
                    label="Email"
                    variant="standard"
                    name="email"
                    color="secondary"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-password"
                    label="Password"
                    variant="standard"
                    name="password"
                    type="password"
                    color="secondary"
                    value={password}
                    onChange={handleInputChange}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    id="standard-confirm"
                    label="Confirm Password"
                    variant="standard"
                    name="confirm"
                    type="password"
                    color="secondary"
                    value={confirm}
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
                rowSpacing={3}
              >
                <Grid item>
                  <Button
                    variant="contained"
                    color="secondary"
                    endIcon={<ArrowForwardIosIcon />}
                    type="submit"
                    disabled={loading}
                  >
                    Register
                  </Button>
                </Grid>
                <Grid item mt={4}>
                  <Link to="/auth/login">
                    <Button size="small" disabled={loading}>
                      Already have an account?
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

export default RegisterPage;
