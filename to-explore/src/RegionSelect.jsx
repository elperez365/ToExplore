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
    <div className="flex flex-col items-center gap-6 bg-contrast h-screen w-screen">
      <h1>ARCHIVIO</h1>
      <h2>Clicca sulla regione desiderata</h2>
      <ClickableMap passRegionClicked={passRegionClicked} />
      <h2>Selected region : {regionClicked}</h2>
      {regionClicked && (
        <div className="flex justify-center  items-center bg-secondary rounded-full w-36 h-12">
          <Link to={`/postRegion/${regionClicked}`}>Show Posts</Link>
        </div>
      )}
      <Navbar />
    </div>
  );
}

export default RegionSelect;
