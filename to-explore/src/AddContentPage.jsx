import { Link, useNavigate } from "react-router-dom";
import ButtonPrev from "./ButtonPrev";
import CountrySelector from "./CountrySelector";
import UploadAndDisplayImage from "./UploadAndDisplayImage";
import { Avatar } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import TextAdd from "./TextAdd";
import { CustomButton } from "./CustomButton";
import userLoggedContest from "./UserLoggedContest";
import { Loading } from "./Loading";
import LanguageContext from "./LanguageContext";

function AddContentPage() {
  const navigate = useNavigate();
  const { avatar, avatarColor, username } = React.useContext(userLoggedContest);
  const { languageApp } = React.useContext(LanguageContext);
  const [countrySelected, setCountrySelected] = React.useState({});
  const [descriptionSelected, setDescriptionSelected] = React.useState("");
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [loading, setLoading] = useState(false);
  const languages = {
    description: languageApp === "it" ? "Descrizione" : "description",
    pushPost: languageApp === "it" ? "Pubblica" : "Publish",
  };
  let riceviStateCountry = (state) => {
    const { regione, provincia, comune } = state;
    setCountrySelected({
      regione,
      provincia,
      comune,
    });
  };

  let riceviStateDescription = (description) => {
    setDescriptionSelected(description);
  };

  let onPushcontent = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    const formData = new FormData();
    formData.append("comune", countrySelected.comune);
    formData.append("regione", countrySelected.regione);
    formData.append("descrizione", descriptionSelected);
    formData.append("image", selectedImage);
    formData.append("avatar", avatar);
    formData.append("avatarColor", avatarColor);
    formData.append("postUser", username);

    fetch("http://192.168.0.194:3001/uploadPost", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((json) => {
        alert(json.text);
        setLoading(false);
        navigate(`/redirect`);
      })
      .catch((err) => "Error occured");
  };

  // React.useEffect(() => {
  //   console.log(countrySelected);
  // }, [countrySelected]);

  const onClickP = (event) => {
    setSelectedImage(event.target.files[0]);
  };
  return (
    <div className="lg:h-full">
      {loading && <Loading />}
      <div className="p-4 flex flex-col justify-around bg-primary h-screen lg:h-full">
        <div className="flex justify-between items-center">
          <Link className="lg:hidden" to="/redirect">
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
          <h1>{languages.description}</h1>
          <TextAdd
            sentComment={{ sent: false }}
            passaState={riceviStateDescription}
          />
        </div>

        <div className="flex justify-center">
          <CustomButton
            buttonText={languages.pushPost}
            onPushcontent={onPushcontent}
          />
        </div>
      </div>
    </div>
  );
}

export default AddContentPage;
