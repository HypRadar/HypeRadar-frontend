import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Project } from "../../types";
import { useState } from "react";
import { useWeb3Context } from "../../context/Web3Context";
import { useCustomToast } from "../../helpers/useToast";
import { BASE_BPS } from "../../constants";
import RoyaltyInput from "../form/RoyaltyInput";
import ConnectWallet from "../../components/buttons/ConnectWallet";
import Http from "../../helpers/http";
import { useRepCallbacks } from "../../helpers/calls/useRepCallbacks";

const EditRoyaltyCard = ({ project }: { project: Project }) => {
  const [pendingTx, setTxStatus] = useState<boolean>(false);
  const [royalty, setRoyalty] = useState(project.royalty / BASE_BPS);
  const { isConnected } = useWeb3Context();
  const repCallbacks = useRepCallbacks(project.address);
  const navigate = useNavigate();

  const { txToast, errorToast, successToast } = useCustomToast();

  const submit = async () => {
    if (!royalty) {
      errorToast("Enter project royalty.");
      return;
    }
    setTxStatus(true);
    try {
      const tx = await repCallbacks.updateProjectRoyalty({
        projectRoyalty: royalty,
      });
      successToast("Project royalty updating. Pending confirmation...");

      const receipt = await tx.wait();
      const projectRoyaltyInBPS = royalty * BASE_BPS;

      const formData = {
        royalty: projectRoyaltyInBPS.toString(),
      };

      const url = `/projects/edit/${project.address}`;
      await new Http().put(url, formData);

      txToast(receipt.hash);
      setTxStatus(false);

      navigate(`/projects/${project.address}`);
    } catch (err: any) {
      errorToast(err);
      setTxStatus(false);
    }
  };

  return (
    <div className=" lg:max-w-7xl w-full flex flex-col px-4 lg:px-8 gap-4 ">
      <div className=" bg-white w-full rounded-[10px] py-9 lg:px-9 px-4 gap-5 flex flex-col ">
        <p className="text-center text-slate-900 text-2xl font-bold leading-loose">
          Project Royalty
        </p>
        <div className="w-full">
          <span className="text-neutral-600 text-base font-normal ">
            Each time your Project rep token is bought you earn a percentage of
            the purchase as royalty. The royalty is a percentage of the amount
            used in the purchase.
            <br />
            Each Project sets their own percentage. The recommended percentage
            is 10%. However, your are free to increase of reduce it.
            <br />
            <br />
            If you set the Project royalty to{" "}
          </span>
          <span className="text-neutral-600 text-base font-bold ">100%</span>
          <span className="text-neutral-600 text-base font-normal ">
            {" "}
            then no one (except you) will be able to buy your rep token until
            you reduce it. You can set your royalty to 100% if you are not ready
            to start taking purchases of your rep token
          </span>
        </div>
        <div className="w-full flex flex-col gap-2">
          <p className="text-[#4D4D4D]">
            <span className="text-[#D20000]">*</span> Project royalty
          </p>
          <RoyaltyInput royaltyInputHandler={setRoyalty} defaultValue={project.royalty / BASE_BPS} />
        </div>
      </div>
      {!isConnected ? (
        <ConnectWallet>
          <Button
            mt={"4"}
            rounded={"30px"}
            bgColor={"#5404FF"}
            color={"white"}
            _hover={{ backgroundColor: "#5404FF" }}
            py={"4"}
          >
            Connect Wallet
          </Button>
        </ConnectWallet>
      ) : (
        <Button
          onClick={() => submit()}
          mt={"4"}
          rounded={"30px"}
          bgColor={"#5404FF"}
          color={"white"}
          _hover={{ backgroundColor: "#5404FF" }}
          py={"4"}
          isDisabled={pendingTx}
          isLoading={pendingTx}
        >
          {pendingTx ? "Confirming..." : "Update Project Royalty"}
        </Button>
      )}
    </div>
  );
};

export default EditRoyaltyCard;
