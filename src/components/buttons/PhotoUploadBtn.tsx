import React from "react";
import MediaUploadBtn from "../buttons/MediaUploadBtn";

interface Props {
  onFileChangeHandler: (e) => void;
  currentImagePath: string;
}

function PhotoUploadBtn(props: Props) {
  const { onFileChangeHandler, currentImagePath } = props;

  return (
    <div className='w-fit' >
        <MediaUploadBtn
          currentImagePath={currentImagePath}
          btnWrapperClass="w-[120px] h-[120px] relative lg:w-[300px] lg:h-[300px] bg-slate-200 rounded-[500px] justify-center shadow-md items-center flex"
          photoClass="w-full h-full object-cover rounded-[500px] z-10 absolute"
          iconContainerClass="w-[50px] h-[50px] lg:w-[100px] lg:h-[100px] z-20"
          onFileChange={onFileChangeHandler}
        />
    </div>
  );
}

export default PhotoUploadBtn;
