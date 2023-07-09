import { Link } from "react-router-dom";
import ButtonPrev from "./ButtonPrev";
import CountrySelector from "./CountrySelector";
import UploadAndDisplayImage from "./UploadAndDisplayImage";
import { Avatar } from "@mui/material";
import * as React from "react";
import TextAdd from "./TextAdd";
import { CustomButton } from "./CustomButton";
import userLoggedContest from "./UserLoggedContest";

function AddContentPage() {
  const { avatar, avatarColor } = React.useContext(userLoggedContest);
  const [countrySelected, setCountrySelected] = React.useState({});
  const [descriptionSelected, setDescriptionSelected] = React.useState("");

  let riceviStateCountry = (state) => {
    const { regione, provincia, comune } = state;
    setCountrySelected({ regione, provincia, comune });
  };

  let riceviStateDescription = (description) => {
    setDescriptionSelected(description);
  };

  let onPushcontent = () => {
    console.log(countrySelected);
    console.log(descriptionSelected);
  };
  return (
    <div>
      <div className="p-4 flex flex-col justify-around bg-primary h-screen">
        <div className="flex justify-between items-center">
          <Link to="/homepage">
            <ButtonPrev />
          </Link>

          <Avatar sx={{ width: 60, height: 60, bgcolor: `${avatarColor}` }}>
            {avatar}
          </Avatar>
        </div>
        <div className="flex flex-col items-center gap-4">
          <UploadAndDisplayImage />
        </div>
        <CountrySelector passaState={riceviStateCountry} />
        <div className="flex flex-col items-center">
          <TextAdd
            sentComment={{ sent: false }}
            passaState={riceviStateDescription}
          />
        </div>

        <div className="flex justify-center">
          <CustomButton
            buttonText="Carica Immagine"
            onPushcontent={onPushcontent}
          />
        </div>
      </div>
    </div>
  );
}

export default AddContentPage;
