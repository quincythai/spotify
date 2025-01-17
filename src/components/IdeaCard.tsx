import Image from "next/image";

export default function IdeaCard() {
  return (
    <div className="rounded-md bg-persian-green p-4 h-40 shadow-lg hover:scale-105 transition transform duration-300">
      <Image src="/sparkle.svg" alt="sparkle icon" width={40} height={40} />
      <p className="text-white py-2 px-2">
        Play this while u sippin soju at the kbbq type shit
      </p>
    </div>
  );
}
