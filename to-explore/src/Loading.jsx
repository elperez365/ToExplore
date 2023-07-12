import { useState } from "react";
import birdLogo2 from "./images/birdLogo2.png";

export function Loading() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="fixed flex justify-center items-center z-50 bg-opacity-40 w-screen h-screen bg-black ">
      <img src={birdLogo2} alt="logo" className="w-44 h-44 animate-spin" />
    </div>
  );
}
