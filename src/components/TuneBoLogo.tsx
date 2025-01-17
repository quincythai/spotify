import Image from "next/image";
import Link from "next/link";
import { poppins } from "@/app/fonts";

export default function TuneBoLogo() {
  return (
    <div>
      <Link href="/profile" passHref>
        <div className="flex items-center gap-2 font-bold">
          <Image
            src="/assets/logos/tuning-svgrepo-com.svg"
            width={40}
            height={40}
            alt="tune-bo logo"
          />
          <p className={`${poppins.className} text-2xl`}>Tune-Bo</p>
        </div>
      </Link>
    </div>
  );
}
