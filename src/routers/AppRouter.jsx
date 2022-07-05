import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CircularProgress, Grid } from "@mui/material";
import { firebase } from "../firebase/firebase-config";
import { useDispatch } from "react-redux";
import AuthRouter from "./AuthRouter";
import HomePage from "../pages/home/HomePage";
import { login } from "../actions/auth";

const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName));
      }

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
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    );
};

export default AppRouter;
