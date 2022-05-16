import useMusicPlayer from "../hooks/useMusicPlayer";

function TrackList() {
  const { trackList, currentTrackIndex, playTrack, isPlaying } =
    useMusicPlayer();
  console.log(trackList);
  return (
    <>
      {trackList.map((track, index) => (
        // ( Surprise us with your code here)

        <div className="song-title">{track.name}</div>
      ))}
    </>
  );
}
export default TrackList;
