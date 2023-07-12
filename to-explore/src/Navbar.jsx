import { AiFillHome } from "react-icons/ai";
import { IoMdSettings } from "react-icons/io";
import { BiSolidUserCircle, BiSolidArchiveIn } from "react-icons/bi";
import { GrAddCircle } from "react-icons/gr";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import { Link } from "react-router-dom";
import { useState } from "react";
import AddContentPage from "./AddContentPage.jsx";

export function Navbar() {
  const [open, setOpen] = useState(false);
  let LGhandleAddClick = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <nav className="w-screen glass-effect z-30 bg-opacity-70 rounded-lg flex h-16 rounded-t-xl bg-primary fixed bottom-0 justify-between px-6">
      <Link to="/settings" className="flex self-center">
        <IoMdSettings size={35} />
      </Link>
      <Link to="/homepage" className="flex self-center">
        <AiFillHome size={35} />
      </Link>
      <Link className="lg:hidden" to="/add-content">
        {" "}
        <button
          className="animate-pulse z-30 glass-effect bg-blur bg-opacity-60  rounded-full bg-contrast2"
          style={{
            position: "fixed",
            bottom: 8,
            left: "50%",
            transform: "translate(-50%)",
          }}
        >
          <GrAddCircle size={65} />
        </button>
      </Link>

      <button
        className="hidden lg:block animate-pulse z-30 glass-effect bg-blur bg-opacity-60  rounded-full bg-contrast2"
        style={{
          position: "fixed",
          bottom: 8,
          left: "50%",
          transform: "translate(-50%)",
        }}
        onClick={LGhandleAddClick}
      >
        <GrAddCircle size={65} />
      </button>

      <Link to="/map" className="flex self-center">
        <BiSolidArchiveIn size={35} />
      </Link>
      <Link to="/profilo" className="flex self-center">
        <BiSolidUserCircle size={35} />
      </Link>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <div className="w-80">
          <AddContentPage />
        </div>
      </Modal>
    </nav>
  );
}
