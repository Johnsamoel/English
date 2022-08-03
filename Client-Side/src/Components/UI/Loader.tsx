import { Box } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";
import React from "react";

// using Loader component to show while loading the page/component

const Loader = () => {
  return (
    <Box sx={{ height: "100vh", position: "relative" }}>
      <CircularProgress
        color="primary"
        size={60}
        sx={{ position: "absolute", top: "50%", left: "50%" }}
      />
    </Box>
  );
};

export default Loader;
