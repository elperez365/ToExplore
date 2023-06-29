import { useState } from "react";
import ClickableMap from "./ClickableMap";

function RegionSelect() {
  const [regionClicked, setRegionClicked] = useState("");

  let passRegionClicked = (value) => {
    setRegionClicked(value);
  };
  return (
    <div className="flex flex-col items-center gap-10 bg-green-100 h-screen w-screen">
      <h1>ARCHIVIO</h1>
      <h2>Clicca sulla regione desiderata</h2>
      <ClickableMap passRegionClicked={passRegionClicked} />
      <h2>Hai selezionato la regione : {regionClicked}</h2>
      {regionClicked && (
        <button className="bg-green-500 rounded-full w-36 h-12">
          visualizza i post
        </button>
      )}
    </div>
  );
}

export default RegionSelect;
