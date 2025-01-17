"use client";

import Navbar from "@/components/Navbar";
import ProfileCard from "@/components/ProfileCard";
import { poppins } from "../fonts";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const accessToken = localStorage.getItem("access_token");
        if (!accessToken) {
          setError(error);
          throw new Error("Access token is missing");
        }

        const response = await fetch("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch profile: ${response.status}`);
        }

        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error("Error fetching profile: ", error);
      }
    };
    getProfile();
  }, [error]);

  // if (!profile) return <LoadingComponent />;
  if (!profile) return <div>No profile</div>;
  // if (error) return <ErrorComponent error={error} />;
  if (error) return <div>Error</div>;

  return (
    <div className="bg-gradient-to-b from-charcoal to-gray-900 h-screen flex flex-col items-center text-white">
      <Navbar />
      <div className="flex gap-4 mt-8 p-4">
        <p
          className={`${poppins.className} text-4xl font-bold text-white opacity-0 animate-fade-in-scale`}
        >
          Welcome, {profile.display_name}
        </p>
        <ProfileCard
          imageUrl={profile.images[0].url}
          displayName={profile.display_name}
        />
      </div>
    </div>
  );
}
