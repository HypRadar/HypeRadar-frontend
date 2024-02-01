import { BASE_BPS } from "../../constants";
import { getFormattedBalance } from "../../helpers/formats/balance";
import { Project } from "../../types";
import DiscordBtn from "../buttons/Socials/DiscordBtn";
import TelegramBtn from "../buttons/Socials/TelegramBtn";
import TwitterBtn from "../buttons/Socials/TwitterBtn";
import WebsiteBtn from "../buttons/Socials/WebsiteBtn";
import BuyRepBtn from "../project_component/buy_rep_btn";
import SellRepBtn from "../project_component/sell_rep_btn";
import CopyComponent from "../shared/copy_component";
import ProjectLogo from "./ProjectLogo";

const ProjectCardHeader = ({ project }: { project: Project }) => {
  return (
    <div className=" bg-white w-full rounded-[10px] items-center lg:py-9 lg:px-9 px-0 py-6 gap4 lg:gap-12 flex lg:flex-row flex-col ">
      <ProjectLogo src={project.logo} />
      <div className=" flex flex-col lg:gap-0 gap-4 lg:w-auto w-full lg:items-start items-center px-6 lg:px-0 ">
        <p className="text-slate-900 text-[34px] lg:text-[48px] font-bold">
          {project.name}
        </p>
        <CopyComponent
          item={project.address}
          fontsize="text-sm lg:text-lg lg:mt-0 -mt-3 "
          color="text-zinc-500"
        />
        <div className="w-full justify-start lg:mt-6 lg:items-start items-center gap-4 flex-col flex lg:flex-row">
          <div className=" p-2 lg:p-4 lg:w-fit bg-[#E5FFE8] rounded-[5px] lg:flow-row flex-col justify-center items-end gap-1 inline-flex">
          <p className="text-right text-[#00990F] text-lg lg:text-[24px] font-bold ">
          RepT price: {project.usdCoinPrice ? getFormattedBalance(project.usdCoinPrice.toNumber()) : "__"}
            </p>
          </div>
          <div className="p-2.5 bg-white rounded-[10px] justify-center items-end gap-8 flex">
            {project.websiteUrl ? (
              <WebsiteBtn url={project.websiteUrl} />
            ) : null}
            {project.twitterUrl ? (
              <TwitterBtn url={project.twitterUrl} />
            ) : null}
            {project.discordUrl ? (
              <DiscordBtn url={project.discordUrl} />
            ) : null}
            {project.telegramUrl ? (
              <TelegramBtn url={project.telegramUrl} />
            ) : null}
          </div>
        </div>
        <div className=" lg:w-full lg:my-8 flex lg:mx-0 mx-auto lg:justify-start gap-4 lg:gap-8 ">
          <div className=" border-r pr-4 lg:pr-8 ">
            <p className="text-slate-900 lg:text-2xl text-lg font-bold  leading-loose">
            {project.marketCap ? getFormattedBalance(project.marketCap.toNumber()) : "__"}
            </p>
            <p className="text-zinc-500 lg:text-lg text-sm font-normal ">
              mkt cap
            </p>
          </div>
          <div className="border-r pr-4 lg:pr-8 ">
            <p className="text-slate-900 lg:text-2xl text-lg font-bold  leading-loose">
            {project.usdLocked ? getFormattedBalance(project.usdLocked.toNumber()) : "__"} 
            </p>
            <p className="text-zinc-500 lg:text-lg text-sm font-normal ">
              usd locked
            </p>
          </div>
          <div className="">
            <p className="text-slate-900 lg:text-2xl text-lg font-bold  leading-loose">
              {project.royalty / BASE_BPS}%
            </p>
            <p className="text-zinc-500 lg:text-lg text-sm font-normal ">PR</p>
          </div>
        </div>
        <div className="w-full h-[40px] lg:h-[50px] lg:justify-start justify-between gap-2 lg:gap-6 flex">
          <BuyRepBtn />
          <SellRepBtn />
          <div
            role="button"
            // onClick={() => navigate("/holder")}
            className="lg:px-8 lg:w-fit w-full lg:py-2 bg-yellow-50 rounded-[10px] border lg:border-[2px] border-yellow-600 justify-center items-center gap-2 flex"
          >
            <p className="text-center text-yellow-600 text-sm lg:text-lg font-semibold ">
              Holders
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardHeader;
