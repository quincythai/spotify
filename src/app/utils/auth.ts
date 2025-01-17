export const getRefreshToken = async () => {
  // refresh token that has been previously stored
  const refreshToken = localStorage.getItem("refresh_token");
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const url = "https://accounts.spotify.com/api/token";

  if (!refreshToken) {
    return new Error("Error getting refresh token");
  }

  if (!clientId) {
    return new Error("Error getting clientId");
  }

  const payload = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refreshToken,
      client_id: clientId,
    }),
  };
  const body = await fetch(url, payload);
  const response = await body.json();

  localStorage.setItem("access_token", response.accessToken);
  if (response.refreshToken) {
    localStorage.setItem("refresh_token", response.refreshToken);
  }
};
