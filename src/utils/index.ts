import { keccak256, toUtf8Bytes, parseUnits } from "ethers";
import { JWT_KEY } from "../constants";
import { CHAIN_ID } from "../constants/network";
import { ChainId, GAS_PRICE } from "../types";

export const signingMessage = () => {
  const currentTimeAsString = new Date().toISOString();
  const currentTimeStamp = Date.parse(currentTimeAsString) / 1000;
  const hexTimeStamp = currentTimeStamp.toString(16);

  const hashedTime = keccak256(toUtf8Bytes(hexTimeStamp));

  return `Sign this message to authorize your account: ${hashedTime}`;
};

export const decodedJWT = () => {
  try {
    const jwtToken = localStorage.getItem(JWT_KEY);
    if (!jwtToken) return null;
    return JSON.parse(atob(jwtToken.split(".")[1]));
  } catch (e) {
    return null;
  }
};

export const GAS_PRICE_GWEI = {
  default: parseUnits(GAS_PRICE.default, 'gwei').toString(),
  fast: parseUnits(GAS_PRICE.fast, 'gwei').toString(),
  instant: parseUnits(GAS_PRICE.instant, 'gwei').toString(),
  testnet: parseUnits(GAS_PRICE.testnet, 'gwei').toString(),
}

export const getGasPrice = (): string => {
  const chainId = parseInt(CHAIN_ID, 10);
  return chainId === ChainId.MAINNET ? GAS_PRICE_GWEI.default : GAS_PRICE_GWEI.testnet;
}