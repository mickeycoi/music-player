import useMusicPlayer from "../hooks/useMusicPlayer";
import React from "react";
import { PauseCircle } from "@mui/icons-material";
import { PlayCircle } from "@mui/icons-material";
import { SkipPrevious } from "@mui/icons-material";
import { SkipNext } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { flexbox } from "@mui/system";

function Controller() {
  const {
    togglePlay,
    playPreviousTrack,
    playNextTrack,
    isPlaying,
    currentTrackName,
  } = useMusicPlayer();
  return (
    <Box sx={{ p: 1, m: 1 }}>
      <Typography variant="h3" sx={{ color: "red" }}>
        <marquee>{currentTrackName}</marquee>
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{ width: 100, height: 100 }}
          onClick={playPreviousTrack}
          disabled={!currentTrackName}
        >
          <SkipPrevious fontSize="large" />
        </Button>
        <Button
          sx={{ width: 100, height: 100 }}
          onClick={togglePlay}
          disabled={!currentTrackName}
        >
          {isPlaying ? (
            <PauseCircle fontSize="large" />
          ) : (
            <PlayCircle fontSize="large" />
          )}
        </Button>
        <Button
          sx={{ width: 100, height: 100 }}
          onClick={playNextTrack}
          disabled={!currentTrackName}
        >
          <SkipNext fontSize="large" />
        </Button>
      </Box>
    </Box>
  );
}

export default Controller;
