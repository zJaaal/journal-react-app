import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTheme } from "@mui/material";
const NotesAppBar = () => {
  const theme = useTheme();
  return (
    <Grid
      item
      container
      justifyContent={"space-between"}
      alignItems={"center"}
      sx={{ backgroundColor: `${theme.palette.secondary.dark}` }}
    >
      <Grid item xs>
        <Typography variant="h5" padding="8px">
          July, 04, 2022
        </Typography>
      </Grid>
      <Grid item container xs justifyContent={"end"}>
        <IconButton aria-label="Add A Photo">
          <AddAPhotoIcon />
        </IconButton>
        <IconButton aria-label="Save Entry">
          <SaveIcon />
        </IconButton>
        <IconButton aria-label="Delete Entry">
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default NotesAppBar;
