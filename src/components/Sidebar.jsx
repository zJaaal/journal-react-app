import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import NightlightIcon from "@mui/icons-material/Nightlight";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../actions/auth";
import JournalEntries from "./JournalEntries";
import { startNewNote } from "../actions/notes";

const Sidebar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(startLogout());
  };

  const handleAddNew = () => {
    dispatch(startNewNote());
  };

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
          <Typography variant="h5">{name}</Typography>
        </Grid>
        <Grid item container xs justifyContent={"end"}>
          <Button color="error" onClick={handleLogout}>
            Log out
          </Button>
        </Grid>
      </Grid>
      <Grid item container direction={"row"} justifyContent={"center"}>
        <Button
          color="secondary"
          startIcon={<AddBoxIcon />}
          onClick={handleAddNew}
        >
          Add Entry
        </Button>
      </Grid>
      <JournalEntries />
    </Grid>
  );
};

export default Sidebar;
