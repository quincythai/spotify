export const getRecentlyPlayedTracks = async (accessToken: string) => {
  const response = await fetch(
    "https://api.spotify.com/v1/me/player/recently-played", 
  );
}