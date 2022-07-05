import React, { useEffect, useRef } from "react";
import { Grid } from "@mui/material";
import NotesAppBar from "./NotesAppBar";
import { useDispatch, useSelector } from "react-redux";
import useForm from "../hooks/useForm";
import { activeNote } from "../actions/notes";

const Note = () => {
  const dispatch = useDispatch();
  const { active: note } = useSelector((state) => state.notes);
  const [values, handleInputChange, reset] = useForm(note);

  const activeId = useRef(note.id);

  useEffect(() => {
    if (activeId.current !== note.id) {
      reset(note);
      activeId.current = note.id;
    }
  }, [note, reset]);

  useEffect(() => {
    dispatch(activeNote(values.id, { ...values }));
  }, [values, dispatch]);

  const { body, title } = values;
  return (
    <>
      <NotesAppBar />
      <Grid container xs item direction="column" component="form">
        <input
          className="title-input"
          placeholder="Something amazing"
          value={title}
          name="title"
          onChange={handleInputChange}
        />
        <textarea
          className="entry-text-area"
          placeholder="How was your day?"
          value={body}
          name="body"
          onChange={handleInputChange}
        />
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
