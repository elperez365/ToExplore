import { Avatar } from "@mui/material";
import birdLogo2 from "./images/birdLogo2.png";

export function Header() {
  return (
    <div>
      <header className="flex fixed top-0 z-30 glass-effect justify-between w-screen h-12 bg-primary bg-blur bg-opacity-70 px-1">
        <div className="headerLeft flex">
          <img src={birdLogo2} alt="logo" className="" />
        </div>

        <div className="headerRight flex items-center gap-2">
          <h1> Name Name</h1>
          <Avatar sx={{ bgcolor: "blue" }}>FF</Avatar>
        </div>
      </header>
    </div>
  );
}
