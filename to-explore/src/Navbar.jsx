import { AiFillHome } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { BiSolidUserCircle, BiSolidArchiveIn } from "react-icons/bi";

import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="w-screen glass-effect z-30 bg-blur bg-opacity-80 rounded-lg flex h-16 rounded-t-xl bg-primary fixed bottom-0 justify-between px-12">
      <Link to="/settings" className="flex self-center">
        <IoMdSettings size={35} />
      </Link>
      <Link to="/homepage" className="flex self-center">
        <AiFillHome size={35} />
      </Link>
      <Link to="/map" className="flex self-center">
        <BiSolidArchiveIn size={35} />
      </Link>
      <Link to="/profilo" className="flex self-center">
        <BiSolidUserCircle size={35} />
      </Link>
    </nav>
  );
}
