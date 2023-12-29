import { useContext, createContext, useEffect, useMemo } from "react";
import { BrowserProvider } from "ethers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { CHAIN_ID } from "../constants/network";

interface Web3ContextType {
  chainId: number | undefined;
  isConnected: boolean;
  address: `0x${string}` | null | undefined;
}

const Web3Context = createContext<null | Web3ContextType>(null);

export const Web3ContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const { chainId, isConnected, address } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  const switchWalletChain = async () => {
    if (walletProvider) {
      try {
        const ethersProvider = new BrowserProvider(walletProvider);
        await ethersProvider.send("wallet_switchEthereumChain", [
          {
            chainId: `0x${CHAIN_ID.toString(16)}`,
          },
        ]);
      } catch (err) {
        console.log("Error: ", err);
      }
    }
  };

  useEffect(() => {
    if (isConnected && chainId !== CHAIN_ID) {
      switchWalletChain();
    }
  }, [chainId, isConnected]);

  const web3ContextValue = useMemo(
    () => ({
      chainId,
      isConnected: isConnected && chainId === CHAIN_ID ? true : false,
      address: isConnected && chainId === CHAIN_ID ? address : null,
    }),
    [chainId, address, isConnected]
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
    throw new Error(
      "useWeb3Context must be used within a Web3ContextProvider"
    );
  }

  return context;
}
