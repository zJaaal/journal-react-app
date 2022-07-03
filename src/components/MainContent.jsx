import { Grid, Typography, useTheme } from "@mui/material";

const MainContent = () => {
  const theme = useTheme();
  return (
    <Grid
      container
      item
      xs={8}
      sx={{ backgroundColor: `${theme.palette.grey["900"]}` }}
    >
      <Typography variant="h3">Main Content</Typography>
    </Grid>
  );
};

export default MainContent;
