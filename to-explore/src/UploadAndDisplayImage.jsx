import React, { useRef, useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import logoMacchinaFotografica from "./images/LA-logo-macchina-fotografica.png";
import { GrFormAdd } from "react-icons/gr";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInput = useRef();
  return (
    <div className="flex self-center">
      {selectedImage && (
        <div className="flex justify-end gap-2">
          <img
            className="max-h-32 max-w-64"
            alt="not found"
            src={URL.createObjectURL(selectedImage)}
          />
          <button
            className="flex justify-center items-center p-0 m-0 h-7 w-7"
            onClick={() => setSelectedImage(null)}
          >
            <CiCircleRemove className="bg-complement rounded-full h-7 w-7" />
          </button>
        </div>
      )}
      <label
        className=" relative bg-contrast rounded-full flex flex-col justify-center items-center cursor-pointer w-32 h-32"
        onClick={() => fileInput.current.click()}
        htmlFor="myImage"
      >
        <GrFormAdd className="absolute top-2 right-5" size={40} />
        <img
          className="w-20"
          src={logoMacchinaFotografica}
          alt="logo-Macchina-Fotografica"
        />
      </label>
      <input
        className="hidden"
        type="file"
        name="myImage"
        ref={fileInput}
        onChange={(event) => {
          console.log(event.target.files[0]);
          setSelectedImage(event.target.files[0]);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;
