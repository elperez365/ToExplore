import { Link } from "react-router-dom";
import ButtonPrev from "./ButtonPrev";
import CountrySelector from "./CountrySelector";
import UploadAndDisplayImage from "./UploadAndDisplayImage";
import { Avatar } from "@mui/material";
import * as React from "react";
import TextAdd from "./TextAdd";

function AddContentPage() {
  return (
    <div>
      <div className="p-4 flex flex-col justify-around bg-primary h-screen">
        <div className="flex justify-between items-center">
          <Link to="/homepage">
            <ButtonPrev />
          </Link>

          <Avatar sx={{ width: 60, height: 60, bgcolor: "blue" }}>FF</Avatar>
        </div>
        <div className="flex flex-col items-center gap-4">
          <UploadAndDisplayImage />
        </div>
        <CountrySelector />
        <div className="flex flex-col items-center">
          <TextAdd />
        </div>

        <div className="flex justify-center h-20 bg-contrast rounded-full">
          <button>PUBBLICA</button>
        </div>
      </div>
    </div>
  );
}

export default AddContentPage;
