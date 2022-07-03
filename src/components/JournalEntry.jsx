import { Grid, Typography, useTheme } from "@mui/material";
import React from "react";

const JournalEntry = ({ entry }) => {
  const theme = useTheme();

  return (
    <Grid
      container
      item
      marginBottom={"10px"}
      sx={{ backgroundColor: `${theme.palette.grey["900"]}` }}
      columnSpacing={2}
    >
      <Grid
        item
        sx={{
          backgroundSize: "cover",
          backgroundImage: `url(../../assets/guy.png)`,
          backgroundPositionX: "-30px",
        }}
        className="entry-image"
      ></Grid>
      <Grid item xs={7} container direction={"column"}>
        <Typography variant="h6">Here goes my title</Typography>
        <Typography variant="caption">
          Here goes the content and its supose to be really long
        </Typography>
      </Grid>
      <Grid item container xs direction={"column"} justifyContent={"center"}>
        <Typography variant="caption">Monday</Typography>
        <Typography variant="caption">28</Typography>
      </Grid>
    </Grid>
  );
};

export default JournalEntry;
