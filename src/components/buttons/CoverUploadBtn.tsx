import React from "react";
import MediaUploadBtn from "../buttons/MediaUploadBtn";

interface Props {
  onFileChangeHandler: (e: any) => void;
  currentImagePath: string;
}

function CoverPhotoBtn(props: Props) {
  const { onFileChangeHandler, currentImagePath } = props;

  return (
    <MediaUploadBtn
      currentImagePath={currentImagePath}
      btnWrapperClass="w-full h-[250px] lg:h-[525px] flex relative justify-center items-center bg-slate-200 rounded-[10px]"
      photoClass="w-full h-full object-cover rounded-[10px] z-10 absolute"
      iconContainerClass="w-[70px] h-[70px] lg: lg:w-[200px] z-20 lg:h-[200px]"
      onFileChange={onFileChangeHandler}
    />
  );
}

export default CoverPhotoBtn;
