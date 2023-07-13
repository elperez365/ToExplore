import mappaItalia from "./images/610px-Italia_regioni_color.png";
// import { useState } from "react";

function ClickableMap(props) {
  // const [loading, setLoading] = useState(false);
  let handleREgionClicked = (event) => {
    event.preventDefault();
    props.passRegionClicked(event.target.alt);
  };

  return (
    <div className="md:bg-primary md:p-32 lg:p-8 md:rounded-2xl md:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] ">
      <div id="mappaItalia">
        <img
          src={mappaItalia}
          alt="Italia"
          width="359"
          height="452"
          border="0"
          useMap="#mappature"
        />
      </div>
      <map name="mappature">
        <area
          shape="poly"
          coords="42,39,14,44,17,56,39,54,39,43"
          href="#"
          alt="Valle d'Aosta"
          onClick={handleREgionClicked}
        />
        <area
          shape="poly"
          coords="60,27,47,42,45,56,22,61,17,72,6,75,9,83,8,97,10,111,31,117,42,102,67,100,70,92,61,83,59,71,64,66,60,51,65,37"
          href="#"
          alt="Piemonte"
          onClick={handleREgionClicked}
        />
        <area
          shape="poly"
          coords="23,128,32,129,45,118,55,108,64,110,78,116,92,125,97,123,86,112,75,105,63,105,54,105,44,108"
          href="#"
          alt="Liguria"
          onClick={handleREgionClicked}
        />
        <area
          shape="poly"
          coords="66,74,66,80,73,87,75,95,79,84,90,78,101,79,108,86,119,89,130,88,139,90,124,75,123,61,126,55,118,48,121,38,123,25,116,23,115,32,105,30,93,30,93,23,82,43,78,53,71,43"
          href="#"
          alt="Lombardia"
          onClick={handleREgionClicked}
        />
        <area
          shape="poly"
          coords="128,14,128,34,124,45,135,54,159,37,164,24,178,17,174,5,154,7,142,13"
          href="#"
          alt="Trentino-Alto Adige"
          onClick={handleREgionClicked}
        />
        <area
          shape="poly"
          coords="169,28,166,40,142,57,130,59,127,69,133,77,148,89,164,87,173,92,172,79,176,69,183,68,196,59,181,54,175,43,177,32,184,26,185,20,173,22"
          href="#"
          alt="Veneto"
          onClick={handleREgionClicked}
        />
        <area
          shape="poly"
          coords="183,43,186,51,194,51,203,59,214,54,213,47,208,43,210,36,216,29,207,26,195,26,187,29"
          href="#"
          alt="Friuli-Venezia Giulia"
          onClick={handleREgionClicked}
        />
        <area
          shape="poly"
          coords="92,85,101,86,109,92,121,94,133,94,150,97,166,96,169,121,179,137,171,137,159,140,148,134,143,124,127,127,107,112,96,107,89,110,80,102,84,88"
          href="#"
          alt="Emilia-Romagna"
          onClick={handleREgionClicked}
        />
        <area
          shape="poly"
          coords="94,114,103,129,111,171,127,188,129,203,151,181,151,167,157,161,165,149,140,130,121,130,105,117"
          href="#"
          alt="Toscana"
          onClick={handleREgionClicked}
        />
        <area
          shape="poly"
          coords="168,142,174,146,171,152,183,157,186,174,196,187,212,180,205,155,187,142"
          href="#"
          alt="Marche"
          onClick={handleREgionClicked}
        />
        <area
          shape="poly"
          coords="163,160,164,166,156,173,156,187,167,198,188,185,180,173,178,161,168,156"
          href="#"
          alt="Umbria"
          onClick={handleREgionClicked}
        />
        <area
          shape="poly"
          coords="150,190,167,205,190,193,186,206,188,211,182,215,188,227,211,237,201,253,176,248,139,204"
          href="#"
          alt="Lazio"
          onClick={handleREgionClicked}
        />

        <area
          shape="poly"
          coords="193,199,213,186,221,202,238,218,232,224,220,227,212,231,198,227,189,216,194,210"
          href="#"
          alt="Abruzzo"
          onClick={handleREgionClicked}
        />
        <area
          shape="poly"
          coords="215,241,224,230,234,230,243,222,248,226,246,234,240,243,231,247"
          href="#"
          alt="Molise"
          onClick={handleREgionClicked}
        />
        <area
          shape="poly"
          coords="218,247,209,251,215,271,224,270,228,280,236,278,243,296,253,306,262,304,263,295,255,274,258,263,246,250,232,250"
          href="#"
          alt="Campania"
          onClick={handleREgionClicked}
        />
        <area
          shape="poly"
          coords="248,242,254,229,281,228,275,238,279,248,312,263,354,293,351,312,339,295,329,291,321,291,316,283,304,285,302,275,288,270,280,261,274,257,265,257,257,257"
          href="#"
          alt="Puglia"
          onClick={handleREgionClicked}
        />
        <area
          shape="poly"
          coords="265,265,274,263,285,275,292,277,300,288,295,299,289,300,283,308,273,305,267,305,270,299,261,279,259,272"
          href="#"
          alt="Basilicata"
          onClick={handleREgionClicked}
        />
        <area
          shape="poly"
          coords="271,311,282,316,291,307,294,307,290,321,312,336,306,350,299,352,290,357,288,375,280,379,271,391,262,393,260,387,270,375,268,369,278,364,280,355,268,319"
          href="#"
          alt="Calabria"
          onClick={handleREgionClicked}
        />
        <area
          shape="poly"
          coords="220,392,231,386,253,384,247,395,236,414,241,433,232,447,208,430,197,428,170,408,156,405,152,397,159,389,168,391,177,385,185,387,189,395"
          href="#"
          alt="Sicilia"
          onClick={handleREgionClicked}
        />
        <area
          shape="poly"
          coords="25,260,37,261,46,256,57,247,64,251,64,260,68,263,70,275,63,284,64,302,55,329,45,327,34,338,25,332,21,327,24,313,30,307,26,296,30,284,23,268"
          href="#"
          alt="Sardegna"
          onClick={handleREgionClicked}
        />
      </map>
    </div>
  );
}

export default ClickableMap;
