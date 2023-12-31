import { useContext, useState } from "react";
import ClickableMap from "./ClickableMap";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import LanguageContext from "./LanguageContext";
import { Button } from "@material-tailwind/react";

function RegionSelect() {
  const [regionClicked, setRegionClicked] = useState("");
  const { languageApp } = useContext(LanguageContext);
  const languages = {
    archive: languageApp === "it" ? "Archivio" : "Archive",
    clickRegion:
      languageApp === "it" ? "Seleziona la regione" : "Select the Region",
    regionSelected:
      languageApp === "it"
        ? "Hai selezionato la regione: "
        : "Selected region:  ",
    showPosts: languageApp === "it" ? "Visualizza i post" : "Show Posts",
  };
  let passRegionClicked = (value) => {
    setRegionClicked(value);
  };
  return (
    <div className="flex flex-col items-center bg-contrast bg-blur bg-opacity-50 h-screen w-screen">
      {/* <h1 className="bg-cardPrimary w-full text-center">{languages.archive}</h1> */}
      <h1 className="bg-cardPrimary bg-opacity-80 w-full h-10 text-center text-3xl">
        {languages.clickRegion.toUpperCase()}
      </h1>
      <div className="flex flex-col justify-center items-center md:gap-14 h-full">
        <ClickableMap passRegionClicked={passRegionClicked} />
        {regionClicked && (
          <h2 className="text-indigo-50 text-3xl">
            {/* {languages.regionSelected} */}
            {regionClicked.toUpperCase()}
          </h2>
        )}

        {regionClicked && (
          <div className="flex justify-center  items-center bg-cardPrimary bg-opacity-70 rounded-full w-36 h-12 text-2xl shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
            <Link to={`/postRegion/${regionClicked}`}>Show Posts</Link>
          </div>
        )}
      </div>

      <Navbar />
    </div>
  );
}

export default RegionSelect;
