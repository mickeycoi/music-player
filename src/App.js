import React from "react";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import TrackList from "./components/TrackList";

function App() {
  return (
    <>
      <MusicPlayerProvider>
        <TrackList />
      </MusicPlayerProvider>
    </>
  );
}

export default App;
