import PhotoIcon from "../icons/PhotoIcon";

const ProjectLogo = ({ src }: { src: string }) => {
  if (!src) {
    return (
      <div className=" w-fit ">
        <div className=" w-[102px] lg:w-[300px] lg:h-[300px] h-[102px] relative">
          <div className=" w-[102px] lg:w-[300px] lg:h-[300px] h-[102px] left-0 top-0 absolute bg-gray-100 rounded-full"></div>
          <PhotoIcon iconContainerClass="w-[82px] lg:w-[260px] lg:h-[260px] h-[82px] left-[10px] top-[10px]  lg:left-[20px] lg:top-[20px] absolute rounded-full shadow" />
        </div>
      </div>
    );
  }

  return (
    <div className=" w-fit ">
      <div className=" w-[102px] lg:w-[300px] lg:h-[300px] h-[102px] relative">
        <div className=" w-[102px] lg:w-[300px] lg:h-[300px] h-[102px] left-0 top-0 absolute bg-gray-100 rounded-full"></div>
        <img
          src={src}
          alt="Project logo"
          className="w-[82px] lg:w-[260px] lg:h-[260px] h-[82px] left-[10px] top-[10px]  lg:left-[20px] lg:top-[20px] absolute rounded-full shadow"
        />
      </div>
    </div>
  );
};

export default ProjectLogo;
