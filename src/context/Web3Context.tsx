import { useContext, createContext, useEffect, useMemo } from "react";
import { BrowserProvider, JsonRpcSigner } from "ethers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { CHAIN_ID } from "../constants/network";
import { handleJwtClaiming } from "../helpers/user";
import { JWT_KEY } from "../constants";
import { decodedJWT } from "../utils";

interface Web3ContextType {
  chainId: number | undefined;
  isConnected: boolean;
  address: `0x${string}` | null | undefined;
  userSigner: JsonRpcSigner;
}

const Web3Context = createContext<null | Web3ContextType>(null);

export const Web3ContextProvider = ({
  children,
  userSigner
}: {
  children: JSX.Element;
  userSigner: JsonRpcSigner
}) => {
  const { chainId, isConnected, address } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const switchWalletChain = async () => {
    if (walletProvider) {
      try {
        const ethersProvider = new BrowserProvider(walletProvider);
        await ethersProvider.send("wallet_switchEthereumChain", [
          {
            chainId: `0x${parseInt(CHAIN_ID, 10).toString(16)}`,
          },
        ]);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  };

  const authenticateAddress = async () => {
    const jwtToken = localStorage.getItem(JWT_KEY) || null;

      if (jwtToken) {
        const jwtDetails = decodedJWT();
        const userAddress = jwtDetails['address'];

        if (userAddress != address) {
          localStorage.removeItem(JWT_KEY);
          window.location.reload();
        }
      } else {
        await handleJwtClaiming(walletProvider, address ?? "");
      }
  }

  useEffect(() => {
    if (isConnected && chainId !== parseInt(CHAIN_ID, 10)) {
      switchWalletChain();
    }
  }, [chainId, isConnected]);

  useEffect(() => {
    if (isConnected && chainId === parseInt(CHAIN_ID, 10)) {
      authenticateAddress();
    }
  }, [chainId, isConnected, address]);

  const web3ContextValue = useMemo(
    () => ({
      chainId,
      isConnected: isConnected && chainId === parseInt(CHAIN_ID, 10) ? true : false,
      address: isConnected && chainId === parseInt(CHAIN_ID, 10) ? address : null,
      userSigner
    }),
    [chainId, address, isConnected, userSigner]
  );

  return (
    <Web3Context.Provider value={web3ContextValue}>
      {children}
    </Web3Context.Provider>
  );
};

export function useWeb3Context() {
  const context = useContext(Web3Context);

  if (!context) {
    throw new Error("useWeb3Context must be used within a Web3ContextProvider");
  }

  return context;
}
