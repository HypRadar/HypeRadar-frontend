import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { isAddress } from "../../utils/address";
import { useLoadProject } from "../../helpers/loadProject";
import PageLoader from "../../components/misc/PageLoader";
import { useWeb3Context } from "../../context/Web3Context";
import Error404 from "../../components/misc/Error404";
import EditProjectCard from "../../components/projects/EditProjectCard";

const EditProject = () => {
  const { address: userAddress } = useWeb3Context();
  const { isLoading, project, loadProject } = useLoadProject();
  let { address }: Record<string, any> = useParams();

  useEffect(() => {
    loadProject(address);
  }, []);

  if (!isAddress(address)) {
    return <Error404 />;
  }

  if (isLoading || !project) {
    return <PageLoader />;
  }

  if (userAddress && project) {
    if (userAddress !== project.owner) {
      return <Error404 />;
    }
  }

  return <EditProjectCard project={project} />;
};

export default EditProject;
