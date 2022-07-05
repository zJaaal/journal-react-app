import React from "react";
import { Grid } from "@mui/material";
import NotesAppBar from "./NotesAppBar";
import { useSelector } from "react-redux";
import useForm from "../hooks/useForm";
const Note = () => {
  const { active: note } = useSelector((state) => state.notes);
  const [values, handleInputChange] = useForm(note);

  const { body, title } = values;
  return (
    <>
      <NotesAppBar />
      <Grid container xs={true} item direction="column" component="form">
        <input
          className="title-input"
          placeholder="Something amazing"
          value={title}
          onChange={handleInputChange}
        ></input>
        <textarea
          className="entry-text-area"
          placeholder="How was your day?"
          value={body}
          onChange={handleInputChange}
        ></textarea>
        {note.imageUrl && (
          <Grid item justifyContent={"start"}>
            <img
              height={"150px"}
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
              alt="some image"
            />
          </Grid>
        )}
      </Grid>
    </>
  );
};

export default Note;
