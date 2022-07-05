import React from "react";
import { Grid } from "@mui/material";
import JournalEntry from "./JournalEntry";
import { useSelector } from "react-redux";

const JournalEntries = () => {
  const { notes } = useSelector((state) => state.notes);
  const keys = Object.keys(notes);
  return (
    <Grid
      container
      item
      xs
      className="journal-entries"
      marginTop={"5px"}
      padding={1}
    >
      {keys.map((key) => (
        <JournalEntry key={notes[key].id} entry={notes[key]} />
      ))}
    </Grid>
  );
};

export default JournalEntries;
