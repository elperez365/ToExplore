import React, { useState, useMemo, useRef } from "react";
import Select from "react-select";
// import countryList from "react-select-country-list";
import comuniWithSpec from "./comuni.json";
import regioniWithSpec from "./regioni.json";
import provinceWithSpec from "./province.json";

function CountrySelector() {
  const [regione, setRegione] = useState("");
  const [provincia, setProvincia] = useState("");
  const [comune, setComune] = useState("");
  const regioniRef = useRef();
  const provincieRef = useRef();
  const comuniRef = useRef();
  // const stati = useMemo(() => countryList().getData(), []);

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
  };

  const changeComune = (comune) => {
    setComune(comune);
  };

  return (
    <div className="w-full">
      <h2>Scrivi o seleziona la regione</h2>
      <Select
        ref={regioniRef}
        className="w-full"
        options={regioniItaliane}
        value={regione}
        onChange={changeRegione}
      />
      {regione && (
        <div>
          <h2>la provincia</h2>
          <Select
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
          <h2>e il comune</h2>
          <Select
            ref={comuniRef}
            className="w-full"
            options={comuniFiltrati}
            value={comune}
            onChange={changeComune}
            isDisabled={!provincia ? true : false}
          />
        </div>
      )}
    </div>
  );
}

export default CountrySelector;
