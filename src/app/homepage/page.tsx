import { Lato, Poppins } from "next/font/google";

// need to specify weight because not variable font
const lato = Lato({
  weight: "400",
  subsets: ["latin"],
});

export default function Page() {
  return <h1 className={lato.className}>Hello Next.js!</h1>;
}
