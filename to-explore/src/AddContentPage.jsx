import { Link } from "react-router-dom";
import ButtonPrev from "./ButtonPrev";
import CountrySelector from "./CountrySelector";
import UploadAndDisplayImage from "./UploadAndDisplayImage";
import { Header } from "./Header";
import { Avatar } from "@mui/material";

function AddContentPage() {
  return (
    <div>
      <div className="p-4 flex flex-col justify-around bg-primary h-screen">
        <div className="flex justify-between">
          <Link to="/homepage">
            <ButtonPrev />
          </Link>
          <Avatar sx={{ bgcolor: "blue" }}>FF</Avatar>
        </div>
        <div className="flex flex-col items-center gap-4">
          <UploadAndDisplayImage />
        </div>
        <div className="flex flex-col items-center w-full h-32">
          <label htmlFor="">Descrizione</label>
          <textarea className="bg-contrast2 w-full h-40 rounded" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <CountrySelector />
          <img
            className="w-32 rounded-full"
            src="https://media.istockphoto.com/id/1308342065/it/vettoriale/mappa-della-posizione-piegata-con-marcatore-mappa-della-citt%C3%A0-con-puntatore-a-spillo.jpg?s=1024x1024&w=is&k=20&c=CKgSZB1-ZsfIVP2eESrfqN9MDJyyuGxqj6H_6zxeu_I="
            alt="noimage"
          />
        </div>
        <div className="flex justify-center h-20 bg-contrast rounded-full">
          <button>PUBBLICA</button>
        </div>
      </div>
    </div>
  );
}

export default AddContentPage;
