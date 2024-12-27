import IdeaCard from "@/components/IdeaCard";
import LoginButton from "@/components/LoginButton";
import { Lato, Poppins } from "next/font/google";

// need to specify weight because not variable font
const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
  return (
    // background gradient from charcoal to gray
    <div className="bg-gradient-to-b from-charcoal to-gray-900 h-screen p-4 flex flex-col items-center">
      {/* typing effect? */}

      {/* This is how to add font to text */}
      <h1
        className={`${poppins.className}"font-extrabold text-6xl text-white text-center`}
      >
        Turn your idea into a playlist
      </h1>
      <div className="p-4 mt-8">
        {/* Carousel */}
        <h2 className={`${lato.className} text-3xl font-light text-white mb-4`}>
          Try asking
        </h2>
        <div className="flex gap-8 mb-12">
          <IdeaCard />
          <IdeaCard />
          <IdeaCard />
        </div>
      </div>
      <LoginButton />
    </div>
  );
}
