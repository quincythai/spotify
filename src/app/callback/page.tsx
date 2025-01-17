"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Spinner from "@/components/Spinner";

export default function CallbackPage() {
  const [error, setError] = useState<string | null>(null);
  const clientId = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_ID;
  const redirectUri = process.env.NEXT_PUBLIC_SPOTIFY_REDIRECT_URI;
  const router = useRouter();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const errorParam = urlParams.get("error");
    if (errorParam) {
      setError(errorParam);
      console.error("Authorization error: ", error);
      return;
    }

    // Request access token
    const code = urlParams.get("code");
    if (code) {
      const getToken = async () => {
        try {
          const codeVerifier = localStorage.getItem("code_verifier");

          if (!clientId || !redirectUri || !codeVerifier) {
            throw new Error(
              "clientId, redirectUri or codeVerifier is undefined."
            );
          }

          const payload = {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
              client_id: clientId,
              grant_type: "authorization_code",
              code,
              redirect_uri: redirectUri,
              code_verifier: codeVerifier,
            }),
          };

          const body = await fetch(
            "https://accounts.spotify.com/api/token",
            payload
          );
          const response = await body.json();

          localStorage.setItem("access_token", response.access_token);
          router.push("/home");
        } catch (err) {
          console.error("Error getting token: ", err);
        }
      };

      // Invoke the async function inside useEffect
      getToken();
    }
  }, [clientId, error, redirectUri, router]);

  return (
    <div className="bg-gradient-to-b from-charcoal to-gray-900 h-screen p-4 flex flex-col items-center text-white text-3xl justify-center gap-4">
      {error ? <p>Authorization failed</p> : <p>Checking authorization...</p>}
      <Spinner />
    </div>
  );
}
