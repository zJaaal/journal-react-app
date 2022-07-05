import { Grid, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import NothingSelected from "./NothingSelected";
import Note from "./Note";

const MainContent = () => {
  const { active } = useSelector((state) => state.notes);
  const theme = useTheme();
  return (
    <Grid
      container
      item
      xs={8}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        backgroundColor: `${theme.palette.grey["900"]}`,
      }}
    >
      {active ? <Note /> : <NothingSelected />}
    </Grid>
  );
};

export default MainContent;
