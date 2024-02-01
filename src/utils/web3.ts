import { JsonRpcProvider } from "ethers";
import { RPC_URL } from "../constants/network";
import { MulticallProvider } from "@ethers-ext/provider-multicall";

export const simpleRpcProvider = new JsonRpcProvider(RPC_URL);

export const multicallProvider = new MulticallProvider(simpleRpcProvider);
