import { Link } from "react-router-dom";
import ButtonPrev from "./ButtonPrev";
import { Navbar } from "./Navbar";
import { useContext } from "react";
// import { useEffect } from "react";
import LanguageContext from "./LanguageContext";

export function Settings({ setUserlogged }) {
  const { languageApp, SetLanguageApp } = useContext(LanguageContext);
  const languages = {
    selectLanguages:
      languageApp === "it" ? "Seleziona la lingua" : "Select Language",
    changeColor:
      languageApp === "it"
        ? "scegli il colore dell'avatar"
        : "Change avatar Color",
    team: languageApp === "it" ? "Il nostro Team" : "Our Team",
    logout: languageApp === "it" ? "Esci" : "Logout",
  };
  let selectLanguage = (evt) => {
    SetLanguageApp(evt.target.value);
  };

  //   useEffect(() => {
  //     console.log(languageApp);
  //   }, [languageApp]);
  return (
    <div className="h-screen w-screen bg-gradient-to-b from-green-100 via-green-400 to-green-700">
      <Link to="/homepage">
        <ButtonPrev />
      </Link>
      <div className="flex flex-col h-4/5 justify-around items-center">
        <label
          className="justify-center text-3xl flex flex-wrap w-full 
                md:text-5xl"
          for="language"
        >
          {languages.selectLanguages}
          <select
            value={languageApp}
            onChange={selectLanguage}
            className="text-center flex w-1/3 bg-transparent text-xl 
                    md:text-4xl md:w-1/4 
                    lg:w-36"
            id="language"
            name="language"
          >
            <option value="it">Italiano</option>
            <option value="en">English</option>
          </select>
        </label>
        <Link to="/changeAvatarColor" className="md:w-full">
          <p
            class="text-center text-3xl w-full 
                    md:text-5xl"
          >
            {languages.changeColor}
          </p>
        </Link>
        <Link to="/team" class="md:w-full">
          <p
            className="text-center text-3xl w-full 
                    md:text-5xl"
          >
            {languages.team}
          </p>
        </Link>
        <button
          onClick={() => {
            setUserlogged({ logged: false });
          }}
          className="text-center text-3xl w-full 
                md:text-5xl"
        >
          {languages.logout}
        </button>
      </div>
      <Navbar />
    </div>
  );
}
