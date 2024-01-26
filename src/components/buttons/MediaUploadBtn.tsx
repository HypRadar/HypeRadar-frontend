import React, { useState } from "react";
import PhotoIcon from "../icons/PhotoIcon";

interface Props {
  onFileChange: (file: any) => void;
  currentImagePath: string;
  btnWrapperClass: string;
  photoClass: string;
  iconContainerClass: string;
}

const MediaUploadBtn = (props: Props) => {
  const { onFileChange, currentImagePath } = props;

  const [photo, setPhoto] = useState("");

  const handleImage = (e: any) => {
    if (URL.createObjectURL(e.target.files[0])) {
      setPhoto(URL.createObjectURL(e.target.files[0]));
    }
    onFileChange(e.target.files[0]);
  };

  return (
    <label role="button" className={props.btnWrapperClass}>
      {(photo || currentImagePath) && (
        <img
          src={photo ? photo : currentImagePath}
          alt="Media"
          className={props.photoClass}
        />
      )}
      <input className=" hidden " onChange={handleImage} type="file" />
      <PhotoIcon iconContainerClass={props.iconContainerClass} />
    </label>
  );
};

export default MediaUploadBtn;
