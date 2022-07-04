import { Grid, Typography, useTheme } from "@mui/material";
import NotePage from "../pages/home/NotePage";
import NothingSelected from "./NothingSelected";
const MainContent = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      item
      xs={8}
      sx={{
        backgroundColor: `${theme.palette.grey["900"]}`,
      }}
    >
      {/* <NothingSelected /> */}
      <NotePage />
    </Grid>
  );
};

export default MainContent;
