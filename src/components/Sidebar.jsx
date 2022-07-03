import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import AddBoxIcon from "@mui/icons-material/AddBox";

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
        <PersonIcon sx={{ marginRight: "3px" }} />
        <Grid item xs={9}>
          <Typography variant="h5">Jalinson</Typography>
        </Grid>
        <Grid item>
          <Button color="error">Log out</Button>
        </Grid>
      </Grid>
      <Grid item container direction={"row"}>
        <Button color="secondary" startIcon={<AddBoxIcon />}>
          Add Entry
        </Button>
      </Grid>
    </Grid>
  );
};

export default Sidebar;
