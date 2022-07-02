import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import AuthRouter from "./AuthRouter";
import HomePage from "../pages/home/HomePage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRouter />} />
      <Route exact path="/" element={<HomePage />} />
    </Routes>
  );
};

export default AppRouter;
