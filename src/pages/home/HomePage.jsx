import { Grid, Typography } from "@mui/material";
import MainContent from "../../components/MainContent";
import Sidebar from "../../components/Sidebar";

const HomePage = () => {
  return (
    <Grid container height={"100vh"} width={"100vw"}>
      <Sidebar />
      <MainContent />
    </Grid>
  );
};

export default HomePage;
