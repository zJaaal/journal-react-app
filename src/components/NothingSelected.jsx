import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useTheme } from "@mui/material";

const NothingSelected = () => {
  return (
    <Grid container item justifyContent={"center"} alignItems={"center"}>
      <Grid
        item
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        xs={12}
      >
        <Typography variant="h6" align="center" marginTop={2}>
          Select something or create an entry
        </Typography>
        <StarBorderIcon sx={{ fontSize: "150px" }} />
      </Grid>
    </Grid>
  );
};

export default NothingSelected;
