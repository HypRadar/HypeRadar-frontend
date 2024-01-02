import { keccak256, toUtf8Bytes } from "ethers";
import { JWT_KEY } from "../constants";

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
