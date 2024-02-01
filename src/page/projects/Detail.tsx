import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import Error404 from "../../components/misc/Error404";
import DashboardLayout from "../../components/shared/dashboard_layout";
import { isAddress } from "../../utils/address";
import { useLoadProject } from "../../helpers/loadProject";
import PageLoader from "../../components/misc/PageLoader";
import ProjectCardHeader from "../../components/projects/ProjectCardHeader";
import { useWeb3Context } from "../../context/Web3Context";
import { useMiscContext } from "../../context/MiscContextProvider";

const Details = () => {
  const navigate = useNavigate();
  const { address: userAddress } = useWeb3Context();
  const { isLoading, project, loadProject, loadOnChainData } = useLoadProject();
  let { address }: Record<string, any> = useParams();
  const { bnbPrice } = useMiscContext();

  useEffect(() => {
    loadProject(address);
    loadOnChainData(address);
  }, []);

  useEffect(() => {
    loadOnChainData(address);
  }, [bnbPrice]);

  if (!isAddress(address)) {
    return <Error404 />;
  }

  const clickHandler = () => {
    navigate("/edit");
  };

  if (isLoading || !project) {
    return <PageLoader />;
  }

  return (
    <DashboardLayout screen={true}>
      <div className=" flex flex-1 w-screen py-8  overflow-x-hidden justify-center overflow-auto">
        <div className=" lg:max-w-7xl w-full flex flex-col h-auto px-4 lg:px-8 gap-6 ">
          <ProjectCardHeader project={project} />
          <div className=" bg-white w-full rounded-[10px] items-center  lg:py-9 lg:px-9 px-6 py-6 gap-6 flex lg:flex-row flex-col-reverse ">
            <div className=" w-full flex flex-col gap-2 lg:mt-0 mt-4 ">
              <div className="lg:block hidden text-slate-900 text-[34px] font-bold  leading-10">
                ${project.ticker}
              </div>

              <div className="w-full text-zinc-800 text-sm lg:text-lg font-normal ">
                {project.bio}
              </div>
            </div>
          </div>
          <div className=" h-fit ">
            <div className=" bg-slate-400 h-[356px] lg:h-[569px] w-full rounded-[10px] items-center p-9 gap-6 flex "></div>
          </div>

          {project.owner === userAddress ? (
            <Button
              py={3}
              onClick={() => clickHandler()}
              rounded={"30px"}
              width={"full"}
              bgColor={"#5404FF"}
              color={"white"}
              _hover={{ backgroundColor: "#5404FF" }}
              fontSize={["sm", "medium"]}
              paddingY={"3"}
            >
              Edit Project Profile
            </Button>
          ) : null}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Details;
