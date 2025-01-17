import TuneBoLogo from "./TuneBoLogo";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 backdrop-blur-sm w-full shadow-md p-5">
      <div className="flex items-center place-content-between">
        <TuneBoLogo />
        <div>Profile</div>
      </div>
    </nav>
  );
}
