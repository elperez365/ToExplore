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
  const [selectedImage, setSelectedImage] = React.useState(null);
  let riceviStateCountry = (state) => {
    const { regione, provincia, comune } = state;
    setCountrySelected({ regione, provincia, comune });
  };

  let riceviStateDescription = (description) => {
    setDescriptionSelected(description);
  };

  let onPushcontent = () => {
    const formData = new FormData();
    formData.append("comune", countrySelected.comune);
    formData.append("regione", countrySelected.regione);
    formData.append("descrizione", descriptionSelected);
    formData.append("image", selectedImage);
    // fetch("",)
    console.log(formData.get("image"));
  };

  const onClickP = (event) => {
    console.log(event.target.files[0]);
    setSelectedImage(event.target.files[0]);
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
          <UploadAndDisplayImage
            onClickP={onClickP}
            onRemove={setSelectedImage}
            selectedImage={selectedImage}
          />
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
