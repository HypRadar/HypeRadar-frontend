import { ethers } from "ethers";

export const isAddress = (address: string | any) => {
  if (ethers.isAddress(address)) {
    return true;
  }
  return false;
};
