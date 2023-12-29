import React from "react";
import { useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import { CHAIN_ID } from "../../constants/network";

const badWalletStyle = {
  boxShadow: "1px -4px 34px -10px rgba(225, 74, 40, 0.75)",
  WebkitSoxShadow: "1px -4px 34px -10px rgba(225, 74, 40, 0.75)",
  MozBoxShadow: "1px -4px 34px -10px rgba(225, 74, 40, 0.75)",
  backgroundColor: "rgb(225, 74, 40)"
};

const ConnectWallet = ({ children }: { children: JSX.Element }) => {
  const { open } = useWeb3Modal();
  const { chainId, isConnected } = useWeb3ModalAccount();

  if (isConnected && chainId === CHAIN_ID) {
    return <></>;
  } else if (isConnected && chainId !== CHAIN_ID) {
    const childrenWithStyles = React.Children.map(children, (child) =>
      React.cloneElement(child, { style: badWalletStyle })
    );
    return (
      <div onClick={() => open()}>
        {childrenWithStyles}
      </div>
    );
  }

  return <div onClick={() => open()}>{children}</div>;
};

export default ConnectWallet;
