import React, { useRef } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
import { useTheme } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";
import { startSaveNote, startUploadImage } from "../actions/notes";
const NotesAppBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const fileInput = useRef(null);

  const { active } = useSelector((state) => state.notes);
  const parseDate = dayjs(active.date).format("MMM, DD, YYYY ");

  const handleSave = () => {
    dispatch(startSaveNote(active));
  };

  const handleUploadImage = () => {
    fileInput.current.click();
  };

  const handleFileChanged = ({ target }) => {
    const file = target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "react-journal");
      dispatch(startUploadImage(formData));
    }
  };

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
          {parseDate}
        </Typography>
      </Grid>
      <Grid item xs>
        <input
          type="file"
          name="file"
          style={{ display: "none" }}
          ref={fileInput}
          onChange={handleFileChanged}
        />
      </Grid>
      <Grid item container xs justifyContent={"end"}>
        <IconButton aria-label="Add A Photo" onClick={handleUploadImage}>
          <AddAPhotoIcon />
        </IconButton>
        <IconButton aria-label="Save Entry" onClick={handleSave}>
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
