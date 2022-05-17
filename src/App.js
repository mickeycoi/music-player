import React from "react";
import Controller from "./components/Controller";
import TrackList from "./components/TrackList";
import { Container } from "@mui/system";
import { Box, CssBaseline, Grid } from "@mui/material";

import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";

function App() {
  return (
    <MusicPlayerProvider>
      <Box
        sx={{
          border: "1px solid black",
          borderRadius: 5,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 500,
          height: "auto",
          m: "auto",
          p: 2,
          mt: 10,
          backgroundColor: "#dfb3f2",
        }}
      >
        <CssBaseline>
          <TrackList />
          <Controller />
        </CssBaseline>
      </Box>
    </MusicPlayerProvider>
  );
}

export default App;
