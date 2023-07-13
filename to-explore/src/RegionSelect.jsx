import { useContext, useState } from "react";
import ClickableMap from "./ClickableMap";
import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import LanguageContext from "./LanguageContext";

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
    <div className="flex flex-col items-center gap-6 bg-contrast h-screen w-screen">
      {/* <h1 className="bg-cardPrimary w-full text-center">{languages.archive}</h1> */}
      <h1 className="bg-cardPrimary w-full h-10 text-center text-3xl">
        {languages.clickRegion.toUpperCase()}
      </h1>
      <ClickableMap passRegionClicked={passRegionClicked} />
      {regionClicked && (
        <h2 className="text-indigo-50 text-3xl">
          {/* {languages.regionSelected} */}
          {regionClicked.toUpperCase()}
        </h2>
      )}

      {regionClicked && (
        <div className="flex justify-center  items-center bg-cardPrimary rounded-full w-36 h-12 text-2xl">
          <Link to={`/postRegion/${regionClicked}`}>Show Posts</Link>
        </div>
      )}
      <Navbar />
    </div>
  );
}

export default RegionSelect;
