import BigNumber from "bignumber.js";
import { simpleRpcProvider } from "../../utils/web3";

export const fetchBalance = async (address: string) => {
    const provider = simpleRpcProvider;
    const balance = await provider.getBalance(address);
  
    return new BigNumber(balance.toString());
  }