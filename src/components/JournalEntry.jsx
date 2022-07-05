import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";

const JournalEntry = ({ entry }) => {
  const theme = useTheme();
  const date = new Date(entry.date);
  const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
  ];

  return (
    <Grid
      container
      item
      marginBottom={"10px"}
      sx={{ backgroundColor: `${theme.palette.grey["900"]}` }}
      columnSpacing={2}
      className="journal-entry"
    >
      <Grid
        item
        sx={{
          backgroundSize: "cover",
          backgroundImage: `url(${entry.imageUrl || ""})`,
          backgroundPositionX: "-30px",
        }}
        className="entry-image"
      ></Grid>
      <Grid item xs={7} container direction={"column"}>
        <Typography variant="h6">
          {entry.title.length ? entry.title : "Add some title"}
        </Typography>
        <Typography variant="caption">
          {entry.body.length ? entry.title : "Add some body"}
        </Typography>
      </Grid>
      <Grid item container xs direction={"column"} justifyContent={"center"}>
        <Typography variant="caption" align="center">
          {`${day}/${month}/${year}`}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default JournalEntry;
