import React from "react";
import Navbar from "./Navbar";

interface Props {
  children: React.ReactNode;
  screen?: boolean;
}

function DashboardLayout(props: Props) {
  const { children, screen } = props;

  return (
    <div
      className={`flex flex-col w-full relative ${
        screen
          ? " h-screen  overflow-x-hidden "
          : "h-screen  lg:overflow-hidden"
      } bg-[#EBEDF2]`}
    >
      <div className=" w-full sticky top-0 z-[100] bg-[#EBEDF2] ">
        <Navbar />
      </div>
      {children}
    </div>
  );
}

export default DashboardLayout;
