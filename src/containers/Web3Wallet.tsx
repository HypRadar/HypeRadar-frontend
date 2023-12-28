import React, { useEffect } from "react";
import { BrowserProvider } from "ethers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { CHAIN_ID } from "../constants/network";

export default function Web3Wallet({ children }: { children: JSX.Element }) {
  const { chainId, isConnected } = useWeb3ModalAccount();
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

  return children;
}
