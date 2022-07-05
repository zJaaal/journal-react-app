import { Grid, Typography, useTheme } from "@mui/material";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { activeNote } from "../actions/notes";

const JournalEntry = ({ imageUrl, date, body, title, id }) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const parseDate = dayjs(date).format("ddd DD");

  const handleEntryClick = () => {
    dispatch(activeNote(id, { imageUrl, date, body, title, id }));
  };

  return (
    <Grid
      container
      item
      marginBottom={"10px"}
      sx={{ backgroundColor: `${theme.palette.grey["900"]}` }}
      columnSpacing={2}
      className="journal-entry"
      onClick={handleEntryClick}
    >
      {imageUrl && (
        <Grid
          item
          sx={{
            backgroundSize: "cover",
            backgroundImage: `url(${imageUrl})`,
            backgroundPositionX: "-30px",
          }}
          className="entry-image"
        ></Grid>
      )}
      <Grid item xs={7} container direction={"column"}>
        <Typography variant="h6">
          {title.length ? title : "Add some title"}
        </Typography>
        <Typography variant="caption">
          {body.length ? body : "Add some body"}
        </Typography>
      </Grid>
      <Grid item container xs direction={"column"} justifyContent={"center"}>
        <Typography variant="subtitle1" align="center">
          {parseDate}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default JournalEntry;
