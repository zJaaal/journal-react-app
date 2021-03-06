import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CircularProgress, Grid } from "@mui/material";
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from "react-redux";
import AuthRouter from "./AuthRouter";
import PrivateRoutes from "./PrivateRoutes";
import HomePage from "../pages/home/HomePage";
import { login } from "../actions/auth";
import PublicRoutes from "./PublicRoutes";
import { startLoadingNotes } from "../actions/notes";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
        dispatch(startLoadingNotes(user.uid));
        setLoggedIn(true);
      } else setLoggedIn(false);

      setChecking(false);
    });
  }, [dispatch, checking]);

  if (checking) {
    return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        alignContent="center"
        height={"100vh"}
      >
        <CircularProgress color="secondary" />
      </Grid>
    );
  } else
    return (
      <Routes>
        <Route
          path="/auth/*"
          element={
            <PublicRoutes loggedIn={loggedIn}>
              <AuthRouter />
            </PublicRoutes>
          }
        />

        <Route
          exact
          path="/"
          element={
            <PrivateRoutes loggedIn={loggedIn}>
              <HomePage />
            </PrivateRoutes>
          }
        />
      </Routes>
    );
};

export default AppRouter;
