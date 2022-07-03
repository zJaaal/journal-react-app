import React from "react";
import { Grid } from "@mui/material";
import JournalEntry from "./JournalEntry";

const JournalEntries = () => {
  const entries = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Grid container item xs className="journal-entries" marginTop={"5px"}>
      {entries.map((entry) => (
        <JournalEntry key={entry} entry={entry} />
      ))}
    </Grid>
  );
};

export default JournalEntries;
