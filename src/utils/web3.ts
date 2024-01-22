import { JsonRpcProvider } from "ethers";
import { RPC_URL } from "../constants/network";

export const simpleRpcProvider = new JsonRpcProvider(RPC_URL);
