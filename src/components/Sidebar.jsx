import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NightlightIcon from "@mui/icons-material/Nightlight";
import AddBoxIcon from "@mui/icons-material/AddBox";
import JournalEntries from "./JournalEntries";

const Sidebar = () => {
  return (
    <Grid container direction={"column"} item xs={4} height="100vh">
      <Grid
        item
        container
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        padding={1}
      >
        <Grid container item alignItems={"center"} xs>
          <NightlightIcon sx={{ marginRight: "3px" }} color="secondary" />
          <Typography variant="h5">Jalinson</Typography>
        </Grid>
        <Grid item container xs justifyContent={"end"}>
          <Button color="error">Log out</Button>
        </Grid>
      </Grid>
      <Grid item container direction={"row"} justifyContent={"center"}>
        <Button color="secondary" startIcon={<AddBoxIcon />}>
          Add Entry
        </Button>
      </Grid>
      <JournalEntries />
    </Grid>
  );
};

export default Sidebar;
