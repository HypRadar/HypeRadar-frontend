import { UseToastOptions, useToast } from "@chakra-ui/react";
import { BASE_BSC_SCAN_URL } from "../constants";

export const useCustomToast = () => {
  const toast = useToast();
  const configurations: UseToastOptions = {
    position: "top-right",
    isClosable: true,
  };

  const txToast = (txHash: string) => {
    const explorerUrl = `${BASE_BSC_SCAN_URL}/tx/${txHash}`;

    toast({
      ...configurations,
      title: "Transaction Details!",
      description: (
        <a href={explorerUrl} target="_blank" rel="noopener noreferrer">
          {explorerUrl}
        </a>
      ),
      status: "info",
    });
  };

  const errorToast = (message: string) => {
    toast({
      ...configurations,
      title: message,
      status: "error",
    });
  };

  const infoToast = (message: string) => {
    toast({
      ...configurations,
      title: message,
      status: "info",
    });
  };

  const successToast = (message: string) => {
    toast({
      ...configurations,
      title: message,
      status: "success",
    });
  };

  return { successToast, infoToast, errorToast, txToast };
};
