import { TransactionResponse } from "ethers";
import { useContractCall } from "./";
import { BASE_BPS, HUNDRED_IN_BPS, REP_CREATION_FEE } from "../../constants";
import { useREPFactory } from "../useContract";

interface CreateRepProps {
  projectName: string;
  projectTicker: string;
  address: string;
  projectRoyalty: number;
}

export function useCreateRepCallback(): {
  createRep: (props: CreateRepProps) => Promise<TransactionResponse>;
} {
  const { contractCall } = useContractCall();

  const repFactoryContract = useREPFactory();

  const createRep = async (props: CreateRepProps): Promise<TransactionResponse> => {
    const projectRoyaltyInBPS = props.projectRoyalty * BASE_BPS;

    if (projectRoyaltyInBPS > HUNDRED_IN_BPS) {
      console.error("Invalid founder reward");
      return;
    }

    if (!repFactoryContract) {
      console.error("tokenContract is null");
      return;
    }

    const functionName = 'createRep';

    const estimatedGas = await repFactoryContract['createRep'].estimateGas(
      props.projectName,
      props.projectTicker,
      props.address,
      projectRoyaltyInBPS,
      { value: REP_CREATION_FEE }
    );

    // eslint-disable-next-line consistent-return
    return contractCall(
      repFactoryContract,
      functionName,
      [
        props.projectName,
        props.projectTicker,
        props.address,
        projectRoyaltyInBPS,
      ],
      {
        value: REP_CREATION_FEE,
        gasLimit: estimatedGas,
      }
    )
      .then((response: TransactionResponse) => {
        return response;
      })
      .catch((error: Error) => {
        console.error("Failed to create rep", error);
        throw error;
      });
  };

  return { createRep };
}
