import Image from "next/image";

interface PolaroidProps {
  imageUrl: string;
  displayName: string;
}

import { Permanent_Marker } from "next/font/google";

const permanent_marker = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
});

export default function PolaroidCard({ imageUrl, displayName }: PolaroidProps) {
  return (
    <div className="bg-white shadow-lg rounded-sm flex flex-col items-center max-w-xs pt-10 pb-4 px-2 hover:scale-105 transition-transform duration-300 hover:rotate-3">
      {/* Image with some white border */}
      <div className="bg-white border-4 border-gray-200 mb-2">
        <Image
          src={imageUrl}
          alt={`${displayName}'s profile`}
          width={200}
          height={200}
          className="object-cover"
        />
      </div>
      {/* Text below the image */}
      <p className={`${permanent_marker.className} text-gray-800 text-2xl`}>
        {displayName}
      </p>
    </div>
  );
}
