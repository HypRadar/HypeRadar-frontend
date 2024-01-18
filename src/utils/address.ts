import { ethers } from "ethers";
import { Address, ChainId } from "../types";
import { CHAIN_ID } from "../constants/network";

export const isAddress = (address: string | any) => {
  if (ethers.isAddress(address)) {
    return true;
  }
  return false;
};

export const getAddress = (address: Address): string => {
  return address[CHAIN_ID] ? address[CHAIN_ID] : address[ChainId.MAINNET]
}