import React from "react";
import { Grid } from "@mui/material";
import JournalEntry from "./JournalEntry";
import { useSelector } from "react-redux";

const JournalEntries = () => {
  const { notes } = useSelector((state) => state.notes);
  return (
    <Grid
      container
      item
      xs
      className="journal-entries"
      marginTop={"5px"}
      padding={1}
    >
      {notes.map((note) => (
        <JournalEntry key={note.id} entry={note} />
      ))}
    </Grid>
  );
};

export default JournalEntries;
