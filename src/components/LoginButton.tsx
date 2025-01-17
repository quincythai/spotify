"use client";

import { base64encode, generateRandomString, sha256 } from "@/app/utils/pkce";

export default function LoginButton() {
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;
  const scope = "user-read-private user-read-email";
  const authUrl = new URL("https://accounts.spotify.com/authorize");

  if (!clientId || !redirectUri) {
    throw new Error(
      "Environment variables NEXT_PUBLIC_SPOTIFY_CLIENT_ID or NEXT_PUBLIC_SPOTIFY_REDIRECT_URI are not set"
    );
  }

  const handleLogin = async () => {
    const codeVerifier = generateRandomString(64);
    const hashed = await sha256(codeVerifier);
    const codeChallenge = base64encode(hashed);
    window.localStorage.setItem("code_verifier", codeVerifier);

    const params = {
      response_type: "code",
      client_id: clientId,
      scope,
      code_challenge_method: "S256",
      code_challenge: codeChallenge,
      redirect_uri: redirectUri,
    };

    authUrl.search = new URLSearchParams(params).toString();
    window.location.href = authUrl.toString();
  };

  return (
    <button
      className="px-8 py-3 bg-[#1ed760] text-gray-900 font-bold rounded-full shadow-md hover:bg-lime-400 hover:scale-105 transition transform duration-300"
      onClick={handleLogin}
    >
      Login
    </button>
  );
}
