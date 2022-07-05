import React from "react";
import Grid from "@mui/material/Grid";
import NotesAppBar from "../../components/NotesAppBar";
import { useSelector } from "react-redux";
import NothingSelected from "../../components/NothingSelected";
import Note from "../../components/Note";
const NotePage = () => {
  const { active } = useSelector((state) => state.notes);

  return (
    <Grid
      container
      item
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {active ? <Note /> : <NothingSelected />}
    </Grid>
  );
};

export default NotePage;
