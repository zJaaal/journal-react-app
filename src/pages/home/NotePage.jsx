import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import NotesAppBar from "../../components/NotesAppBar";
const NotePage = () => {
  return (
    <Grid
      container
      item
      direction={"column"}
      justifyContent={"start"}
      alignItems={"start"}
    >
      <NotesAppBar />
      <Grid container xs={true} item direction="column" component="form">
        <input className="title-input" placeholder="Something amazing"></input>
        <textarea
          className="entry-text-area"
          placeholder="How was your day?"
        ></textarea>
        <Grid item justifyContent={"start"}>
          <img
            height={"150px"}
            src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
            alt="some image"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NotePage;
