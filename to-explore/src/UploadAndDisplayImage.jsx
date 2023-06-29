import React, { useRef, useState } from "react";
import { LiaCloudUploadAltSolid } from "react-icons/lia";
import { TbHandClick } from "react-icons/tb";
import { CiCircleRemove } from "react-icons/ci";

const UploadAndDisplayImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInput = useRef();
  return (
    <div className="relative">
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
            <CiCircleRemove className="bg-red-500 rounded-full h-7 w-7" />
          </button>
        </div>
      )}
      <label
        className=" bg-green-500 rounded-full flex items-center cursor-pointer"
        onClick={() => fileInput.current.click()}
        htmlFor="myImage"
      >
        <LiaCloudUploadAltSolid className="w-20 h-20" />
        Carica la tua Foto
        <TbHandClick className="w-12 h-12" />
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
