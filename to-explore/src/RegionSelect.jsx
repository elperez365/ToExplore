import { useState } from "react";
import ClickableMap from "./ClickableMap";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

function RegionSelect() {
  const [regionClicked, setRegionClicked] = useState("");

  let passRegionClicked = (value) => {
    setRegionClicked(value);
  };
  return (
    <div className="flex flex-col items-center gap-14 bg-contrast h-screen w-screen">
      <h1 className="md:text-2xl mt-20">ARCHIVIO</h1>
      <h2 className="md:text-2xl">Clicca sulla regione desiderata</h2>
      <ClickableMap passRegionClicked={passRegionClicked} />
      <h2 className="md:text-2xl">Selected region : {regionClicked}</h2>
      {regionClicked && (
        <div className="flex justify-center items-center rounded-full w-36 h-12 bg-white">
          <Link to={`/postRegion/${regionClicked}`} className="md:text-2xl">Show Posts</Link>
        </div>
      )}
      <Navbar />
    </div>
  );
}

export default RegionSelect;
