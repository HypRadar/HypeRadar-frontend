import { TransactionResponse, Web3Provider } from "@ethersproject/providers";
import { useWeb3ModalProvider } from "@web3modal/ethers/react";
import { BrowserProvider } from "ethers";
import { useContractCall } from "./";
import { BASE_BPS, HUNDRED_IN_BPS, REP_CREATION_FEE } from "../../constants";
import { useREPFactory } from "../useContract";
import { useWeb3Context } from "../../context/Web3Context";

interface CreateRepProps {
  projectName: string;
  projectTicker: string;
  address: string;
  projectRoyalty: number;
}

export function useCreateRepCallback(): {
  createRep: (
    props: CreateRepProps
  ) => Promise<void>;
} {
  const { contractCall } = useContractCall();
  const { userSigner } = useWeb3Context();

  // const { walletProvider } = useWeb3ModalProvider();
  // const ethersProvider = new BrowserProvider(walletProvider);
  // // @ts-ignore
  // const b = new Web3Provider(ethersProvider);

  // console.log(b.getSigner());

  const repFactoryContract = useREPFactory();

  const createRep = async (props: CreateRepProps): Promise<void> => {
    const projectRoyaltyInBPS = props.projectRoyalty * BASE_BPS;

    if (projectRoyaltyInBPS > HUNDRED_IN_BPS) {
      console.error("Invalid founder reward");
      return;
    }

    if (!repFactoryContract) {
      console.error("tokenContract is null");
      return;
    }

    const estimatedGas = await repFactoryContract.estimateGas.createRep(
      props.projectName,
      props.projectTicker,
      props.address,
      projectRoyaltyInBPS
    );

    // eslint-disable-next-line consistent-return
    return contractCall(
      repFactoryContract,
      "createRep",
      [props.projectName, props.projectTicker, props.address, projectRoyaltyInBPS],
      {
        value: REP_CREATION_FEE,
        gasLimit: estimatedGas,
      }
    )
      .then((response: TransactionResponse) => {
        console.log("Success: ", response);
      })
      .catch((error: Error) => {
        console.error("Failed to create rep", error);
        throw error;
      });
  };

  return { createRep };
}
