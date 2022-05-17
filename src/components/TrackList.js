import useMusicPlayer from "../hooks/useMusicPlayer";
import { PauseCircle } from "@mui/icons-material";
import { PlayCircle } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

const TrackList = () => {
  const { trackList, currentTrackName, playTrack, isPlaying } =
    useMusicPlayer();

  return (
    <>
      {trackList.map((track, index) => (
        // ( Surprise us with your code here)
        <Box
          key={index}
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            p: 1,
            mt: 2,
            border: "1px solid black",
            borderRadius: 10,
            width: 300,
            backgroundColor: "violet",
          }}
        >
          <Button onClick={() => playTrack(index)}>
            {currentTrackName === track.name && isPlaying ? (
              <PauseCircle />
            ) : (
              <PlayCircle />
            )}
          </Button>

          <Typography sx={{ alignSelf: "center" }}>{track.name}</Typography>
        </Box>
      ))}
    </>
  );
};

export default TrackList;
