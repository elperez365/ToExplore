import { useEffect, useState } from "react";
import ClickableMap from "./ClickableMap";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";

function RegionSelect({ setRegionSelected }) {
  const [regionClicked, setRegionClicked] = useState("");

  useEffect(() => {
    setRegionSelected(regionClicked);
  }, [regionClicked, setRegionSelected]);

  let passRegionClicked = (value) => {
    setRegionClicked(value);
  };
  return (
    <div className="flex flex-col items-center gap-10 bg-contrast h-screen w-screen">
      <h1>ARCHIVIO</h1>
      <h2>Clicca sulla regione desiderata</h2>
      <ClickableMap passRegionClicked={passRegionClicked} />
      <h2>Selected region : {regionClicked}</h2>
      {regionClicked && (
        <div className="bg-secondary rounded-full w-36 h-12">
          <Link to="/postRegion">Show Posts</Link>
        </div>
      )}
      <Navbar />
    </div>
  );
}

export default RegionSelect;
