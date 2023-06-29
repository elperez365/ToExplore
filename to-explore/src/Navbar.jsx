import { AiFillHome } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { BiSolidUserCircle, BiSolidArchiveIn } from "react-icons/bi";

export function Navbar() {
  return (
    <nav className="w-screen flex h-16 bg-primary fixed bottom-0 justify-between px-12">
      <button>
        <IoMdSettings size={30} />
      </button>
      <button>
        <AiFillHome size={30} />
      </button>
      <button>
        <BiSolidArchiveIn size={30} />
      </button>
      <button>
        <BiSolidUserCircle size={30} />
      </button>
    </nav>
  );
}
