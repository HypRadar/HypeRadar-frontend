import { TransactionResponse } from "ethers";
import { useContractCall } from "./";
import { BASE_BPS, HUNDRED_IN_BPS } from "../../constants";
import { useERC20 } from "../useContract";

interface UpdateRoyaltyProps {
  projectRoyalty: number;
}

export function useRepCallbacks(projectAddress: string): {
  updateProjectRoyalty: (
    props: UpdateRoyaltyProps
  ) => Promise<TransactionResponse>;
} {
  const { contractCall } = useContractCall();

  const repERC20Contract = useERC20(projectAddress);

  const updateProjectRoyalty = async (
    props: UpdateRoyaltyProps
  ): Promise<TransactionResponse> => {
    const projectRoyaltyInBPS = props.projectRoyalty * BASE_BPS;

    if (projectRoyaltyInBPS > HUNDRED_IN_BPS) {
      console.error("Invalid founder reward");
      return;
    }

    if (!repERC20Contract) {
      console.error("tokenContract is null");
      return;
    }

    const functionName = "changeProjectRoyalty";

    try {
      const estimatedGas = await repERC20Contract[functionName].estimateGas(
        projectRoyaltyInBPS
      );

      const response = await contractCall(
        repERC20Contract,
        functionName,
        [
          projectRoyaltyInBPS,
        ],
        {
          gasLimit: estimatedGas,
        }
      );

      return response;
    } catch (error: any) {
      console.error("Failed to update rep royalty", error);

      if (error.reason) {
        throw error.reason;
      }

      if (error.code && error.code === "CALL_EXCEPTION") {
        // eslint-disable-next-line no-throw-literal
        throw "Please verify you have enough funds to cover gas and transaction fee and try again";
      }

      throw error;
    }
  };

  return { updateProjectRoyalty };
}
