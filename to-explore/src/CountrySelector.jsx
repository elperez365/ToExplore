import React, { useState, useMemo, useRef, useEffect, useContext } from "react";
import Select from "react-select";
// import countryList from "react-select-country-list";
import comuniWithSpec from "./comuni.json";
import regioniWithSpec from "./regioni.json";
import provinceWithSpec from "./province.json";
import LanguageContext from "./LanguageContext";

function CountrySelector({ passaState }) {
  const { languageApp } = useContext(LanguageContext);
  const [regione, setRegione] = useState("");
  const [provincia, setProvincia] = useState("");
  const [comune, setComune] = useState("");
  // const [loading, setLoading] = useState(false);
  const regioniRef = useRef();
  const provincieRef = useRef();
  const comuniRef = useRef();
  // const stati = useMemo(() => countryList().getData(), []);
  const languages = {
    region:
      languageApp === "it"
        ? "Scrivi o seleziona la Regione"
        : "Write or select the region",
    province:
      languageApp === "it"
        ? "Scrivi o seleziona la Provincia"
        : "Write or select the country's province",
    country:
      languageApp === "it"
        ? "Scrivi o seleziona il comune"
        : "Write or select the country",
  };

  // useEffect(() => {
  //   if (regione && provincia && comune) {
  //     passaState({
  //       regione: regione.label,
  //       provincia: provincia.label,
  //       comune: provincia.label,
  //     });
  //   }
  // }, [regione, provincia, comune, passaState]);

  const regioniItaliane = useMemo(
    () =>
      regioniWithSpec.map((el) => ({
        value: el.id,
        label: el.nome,
      })),
    []
  );

  const provincieItaliane = useMemo(
    () =>
      provinceWithSpec.map((el) => ({
        value: el.id_regione,
        label: el.nome,
      })),
    []
  );
  const provincieFiltrate = provincieItaliane.filter(
    (el) => el.value === regione.value
  );

  const comuniItaliani = useMemo(
    () =>
      comuniWithSpec.map((el) => ({
        value: el.provincia.nome,
        label: el.nome,
      })),
    []
  );

  const comuniFiltrati = comuniItaliani.filter(
    (el) => el.value === provincia.label
  );

  const changeRegione = (regione) => {
    setRegione(regione);
  };

  const changeProvincia = (provincia) => {
    setProvincia(provincia);
    setComune({ ...provincia });
    if (regione && provincia) {
      passaState({
        regione: regione.label,
        provincia: provincia.label,
        comune: provincia.label,
      });
    }
  };

  const changeComune = (comune) => {
    setComune(comune);
    if (regione && provincia && comune) {
      passaState({
        regione: regione.label,
        provincia: provincia.label,
        comune: comune.label,
      });
    }
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <Select
        required
        placeholder={languages.region}
        ref={regioniRef}
        className="w-full"
        options={regioniItaliane}
        value={regione}
        onChange={changeRegione}
      />
      {regione && (
        <div>
          <Select
            required
            placeholder={languages.province}
            ref={provincieRef}
            className="w-full"
            options={provincieFiltrate}
            value={provincia}
            onChange={changeProvincia}
            isDisabled={!regione ? true : false}
          />
        </div>
      )}
      {provincia && (
        <div>
          <Select
            placeholder={languages.country}
            ref={comuniRef}
            className="w-full"
            options={comuniFiltrati}
            // value={comune}
            onChange={changeComune}
            isDisabled={!provincia ? true : false}
          />
        </div>
      )}
    </div>
  );
}

export default CountrySelector;
